import fs from "fs-extra";

import { cleanTestDir, setPromptMock, testConfig, testDir } from "../../testUtils";
import { getOutputFilePath, getTemplateFilePaths, loadNunjucksEnvironment, writeTemplateToFile } from "..";

describe("fileHandler", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  describe("loadNunjucksEnvironment()", () => {
    it("getTemplate() will succeed for existing templates", () => {
      const nunjucksEnvironment = loadNunjucksEnvironment();
      expect(nunjucksEnvironment.getTemplate("templates/ts-library/package.json")).toBeDefined();
    });

    it("getTemplate() will throw error for non-existing templates", () => {
      const nunjucksEnvironment = loadNunjucksEnvironment();
      expect(() => nunjucksEnvironment.getTemplate("templates/ts-library/fake-file.txt")).toThrowError(
        "template not found: templates/ts-library/fake-file.txt",
      );
    });
  });

  describe("getTemplateFilePaths()", () => {
    it("returns file paths under selectedTemplate", () => {
      const filePaths = getTemplateFilePaths("ts-library");
      expect(filePaths.length).toBeGreaterThan(0);
    });

    it("does not return folder paths under selectedTemplate", () => {
      const filePaths = getTemplateFilePaths("ts-library");
      expect(filePaths).not.toContain("templates/ts-library/src");
    });

    it("throws error when selectedTemplate does not exist", () => {
      expect(() => getTemplateFilePaths("fake-template-folder")).toThrowError(
        "selectedTemplate not found: fake-template-folder",
      );
    });
  });

  describe("getOutputFilePath()", () => {
    it("returns relative template file path mapped onto the projectDir", () => {
      const outputFilePath = getOutputFilePath("ts-library", "templates/ts-library/package.json", testDir);
      expect(outputFilePath).toEqual(`${testDir}/package.json`);
    });

    it("will succeed even if path does not exist", () => {
      const outputFilePath = getOutputFilePath(
        "fake-template-folder",
        "templates/fake-template-folder/fake-file.txt",
        testDir,
      );
      expect(outputFilePath).toEqual(`${testDir}/fake-file.txt`);
    });
  });

  describe("writeTemplateToFile()", () => {
    it("writes file to outputFilePath", () => {
      const nunjucksEnvironment = loadNunjucksEnvironment();
      const template = nunjucksEnvironment.getTemplate("templates/ts-library/package.json");
      const outputFilePath = `${testDir}/package.json`;

      writeTemplateToFile(template, outputFilePath, testConfig);

      expect(fs.pathExistsSync(outputFilePath)).toEqual(true);
    });

    it("output file contains nunjucks-rendered version of template file", () => {
      const nunjucksEnvironment = loadNunjucksEnvironment();
      const template = nunjucksEnvironment.getTemplate("templates/ts-library/package.json");
      const outputFilePath = `${testDir}/package.json`;

      writeTemplateToFile(template, outputFilePath, testConfig);

      const templateFileContents = fs.readFileSync("templates/ts-library/package.json", {
        encoding: "utf-8",
      });
      const outputFileContents = fs.readFileSync(`${testDir}/package.json`, { encoding: "utf-8" });

      expect(templateFileContents).toContain('"name": "{{ packageName }}"');
      expect(outputFileContents).toContain('"name": "my-new-package"');
    });
  });
});
