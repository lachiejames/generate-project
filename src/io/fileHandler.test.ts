import { pathExistsSync, readFileSync } from "fs-extra";
import { Environment, Template } from "nunjucks";

import cleanTestDir from "../../testUtils/cleanTestDir";
import setPromptMock from "../../testUtils/setPromptMock";
import testDir from "../../testUtils/testDir";
import DEFAULT_ANSWERS from "../constants/defaultAnswers";
import loadNunjucksEnvironment from "../scaffold/loadNunjucksEnvironment";
import getOutputFilePath from "./getOutputFilePath";
import getTemplateFilePaths from "./getTemplateFilePaths";
import { writeTemplateToFile } from "./writeTemplateToFile";

describe("fileHandler", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  describe("loadNunjucksEnvironment()", () => {
    it("getTemplate() will succeed for existing templates", () => {
      const nunjucksEnvironment: Environment = loadNunjucksEnvironment();
      expect(nunjucksEnvironment.getTemplate("templates/ts-library/package.json")).toBeDefined();
    });

    it("getTemplate() will throw error for non-existing templates", () => {
      const nunjucksEnvironment: Environment = loadNunjucksEnvironment();
      expect(() => nunjucksEnvironment.getTemplate("templates/ts-library/fake-file.txt")).toThrowError(
        "template not found: templates/ts-library/fake-file.txt",
      );
    });
  });

  describe("getTemplateFilePaths()", () => {
    it("returns file paths under selectedTemplate", () => {
      const filePaths: string[] = getTemplateFilePaths("ts-library");
      expect(filePaths.length).toBeGreaterThan(0);
    });

    it("does not return folder paths under selectedTemplate", () => {
      const filePaths: string[] = getTemplateFilePaths("ts-library");
      expect(filePaths).not.toContain("templates/ts-library/src");
    });

    it("throws error when selectedTemplate does not exist", () => {
      expect(() => getTemplateFilePaths("fake-template-folder")).toThrowError(
        "selectedTemplate not found: fake-template-folder",
      );
    });
  });

  describe("getOutputFilePath()", () => {
    it("returns relative template file path mapped onto the projectDirectory", () => {
      const outputFilePath: string = getOutputFilePath("ts-library", "templates/ts-library/package.json", testDir);
      expect(outputFilePath).toEqual(`${testDir}/package.json`);
    });

    it("will succeed even if path does not exist", () => {
      const outputFilePath: string = getOutputFilePath(
        "fake-template-folder",
        "templates/fake-template-folder/fake-file.txt",
        testDir,
      );
      expect(outputFilePath).toEqual(`${testDir}/fake-file.txt`);
    });
  });

  describe("writeTemplateToFile()", () => {
    it("writes file to outputFilePath", () => {
      const nunjucksEnvironment: Environment = loadNunjucksEnvironment();
      const template: Template = nunjucksEnvironment.getTemplate("templates/ts-library/package.json");
      const outputFilePath = `${testDir}/package.json`;

      writeTemplateToFile(template, outputFilePath, DEFAULT_ANSWERS);

      expect(pathExistsSync(outputFilePath)).toEqual(true);
    });

    it("output file contains nunjucks-rendered version of template file", () => {
      const nunjucksEnvironment: Environment = loadNunjucksEnvironment();
      const template: Template = nunjucksEnvironment.getTemplate("templates/ts-library/package.json");
      const outputFilePath = `${testDir}/package.json`;

      writeTemplateToFile(template, outputFilePath, DEFAULT_ANSWERS);

      const templateFileContents: string = readFileSync("templates/ts-library/package.json", {
        encoding: "utf-8",
      });
      const outputFileContents = readFileSync(`${testDir}/package.json`, { encoding: "utf-8" });

      expect(templateFileContents).toContain('"name": "{{ packageName }}"');
      expect(outputFileContents).toContain('"name": "my-new-package"');
    });
  });
});
