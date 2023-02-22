import inquirer from "inquirer";

import defaultAnswers from "../src/constants/defaultAnswers";

function setPromptMock(): void {
  inquirer.prompt = jest.fn((_) => Promise.resolve(defaultAnswers)) as unknown as never;
}

export default setPromptMock;
