import { readdirSync } from "fs-extra";

import { cleanTestDirectory, setPromptMock, TEST_DIRECTORY } from "../../testUtils/helpers";
import { runScaffold } from "./runScaffold";

describe("runScaffold", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  describe("runScaffold()", () => {
    it("creates files for the provided template", async () => {
      expect(() => readdirSync(TEST_DIRECTORY)).toThrowError(
        `ENOENT: no such file or directory, scandir '${TEST_DIRECTORY}'`,
      );

      await runScaffold(TEST_DIRECTORY);

      expect(readdirSync(TEST_DIRECTORY)).toContain("package.json");
    });
  });
});
