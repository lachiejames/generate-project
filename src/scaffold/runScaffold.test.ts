import fs from "fs-extra";

import { cleanTestDir, setPromptMock, testDir } from "../../testUtils";
import { defaultConfig } from "..";
import { runScaffold } from ".";

describe("runScaffold", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  describe("runScaffold()", () => {
    it("creates files for the provided template", async () => {
      expect(() => fs.readdirSync(testDir)).toThrowError(`ENOENT: no such file or directory, scandir '${testDir}'`);

      await runScaffold(defaultConfig);

      expect(fs.readdirSync(testDir)).toContain("package.json");
    });
  });
});
