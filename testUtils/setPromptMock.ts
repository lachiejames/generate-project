import inquirer from "inquirer";

import DEFAULT_ANSWERS from "../src/constants/defaultAnswers";

function setPromptMock(): void {
  inquirer.prompt = jest.fn((_) => Promise.resolve(DEFAULT_ANSWERS)) as unknown as never;
}

export default setPromptMock;
