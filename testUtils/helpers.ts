import { rmSync } from "fs-extra";
import inquirer from "inquirer";
import path from "path";

import { DEFAULT_ANSWERS } from "../src/constants/defaultAnswers";

// WARNING: this directory will be deleted on every test run, so don't put anything important in here
export const TEST_DIRECTORY = path.normalize(path.join(__dirname, "..", "tempTestDir"));

export const setPromptMock = (): void => {
  inquirer.prompt = jest.fn((_) => Promise.resolve(DEFAULT_ANSWERS)) as unknown as never;
};

export const cleanTestDirectory = (): void => {
  rmSync(TEST_DIRECTORY, { recursive: true, force: true });
};
