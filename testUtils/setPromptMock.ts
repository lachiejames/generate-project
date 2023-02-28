import inquirer from "inquirer";

import testConfig from "./testConfig";

function setPromptMock(): void {
  inquirer.prompt = jest.fn((_) => Promise.resolve(testConfig)) as unknown as never;
}

export default setPromptMock;
