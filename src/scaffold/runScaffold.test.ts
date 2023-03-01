import fs from "fs-extra";

import { cleanTestDir, setPromptMock, testConfig, testDir } from "../../testUtils";
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

      await runScaffold(testConfig);

      expect(fs.readdirSync(testDir)).toContain("package.json");
    });
  });
});
