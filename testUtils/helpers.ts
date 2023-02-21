import { rmSync } from "fs-extra";
import prompts from "prompts";

// WARNING: this directory will be deleted on every test run, so don't put anything important in here
export const TEST_DIRECTORY = "tempTestDir";

export const setPromptMock = (): void => {
  prompts.inject(["ts-library", "my-new-package", "Hot new JS framework", "Lachie James"]);
};

export const cleanTestDirectory = (): void => {
  rmSync(TEST_DIRECTORY, { recursive: true, force: true });
};
