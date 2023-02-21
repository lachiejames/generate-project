import { outputFileSync } from "fs-extra";
import { Template } from "nunjucks";

import Config from "../models/prompts";

export const writeTemplateToFile = (template: Template, outputFilePath: string, answers: Config): void => {
  const outputString: string = template.render(answers);

  outputFileSync(outputFilePath, outputString);
};
