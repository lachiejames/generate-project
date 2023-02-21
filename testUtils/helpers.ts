import { rmSync } from "fs-extra";
import inquirer from "inquirer";

import { MOCK_ANSWERS } from "./mockAnswers";

export const TEST_DIRECTORY = "tempTestDir";

export const setPromptMock = (): void => {
  inquirer.prompt = jest.fn((_) => Promise.resolve(MOCK_ANSWERS)) as unknown as never;
};

export const cleanTestDirectory = (): void => {
  rmSync(TEST_DIRECTORY, { recursive: true, force: true });
};
