import fs from "fs-extra";

import { cleanTestDir, testDir } from "../../testUtils";
import insertGitIgnore from "./insertGitIgnore";

describe("insertGitIgnore", () => {
  afterEach(() => {
    cleanTestDir();
  });

  it("creates files for the provided template", async () => {
    expect(() => fs.readdirSync(testDir)).toThrowError(`ENOENT: no such file or directory, scandir '${testDir}'`);

    insertGitIgnore(testDir);

    expect(fs.readdirSync(testDir)).toContain(".gitignore");
  });
});
