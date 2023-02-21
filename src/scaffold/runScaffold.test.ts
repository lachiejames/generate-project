import fs from "fs-extra";

import cleanTestDir from "../../testUtils/cleanTestDir";
import setPromptMock from "../../testUtils/setPromptMock";
import testDir from "../../testUtils/testDir";
import runScaffold from "./runScaffold";

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

      await runScaffold(testDir);

      expect(fs.readdirSync(testDir)).toContain("package.json");
    });
  });
});
