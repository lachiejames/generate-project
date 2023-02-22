import inquirer from "inquirer";

import { defaultAnswers } from "../src";

function setPromptMock(): void {
  inquirer.prompt = jest.fn((_) => Promise.resolve(defaultAnswers)) as unknown as never;
}

export default setPromptMock;
