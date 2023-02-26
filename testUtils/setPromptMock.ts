import inquirer from "inquirer";

import { defaultConfig } from "../src";

function setPromptMock(): void {
  inquirer.prompt = jest.fn((_) => Promise.resolve(defaultConfig)) as unknown as never;
}

export default setPromptMock;
