import { rmSync } from "fs-extra";
import prompts from "prompts";
import path from "path";

// WARNING: this directory will be deleted on every test run, so don't put anything important in here
export const TEST_DIRECTORY = path.normalize(path.join(__dirname, "..", "tempTestDir"));

export const injectPromptAnswers = (): void => {
  prompts.inject(["ts-library", "my-new-package", "Hot new JS framework", "Lachie James"]);
};

export const cleanTestDirectory = (): void => {
  rmSync(TEST_DIRECTORY, { recursive: true, force: true });
};
