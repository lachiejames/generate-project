import { outputFileSync } from "fs-extra";
import { Template } from "nunjucks";
import path from "path";

import Config from "../models/prompts";

export const ROOT_DIRECTORY = path.normalize(path.join(__dirname, "..", ".."));

export const getOutputFilePath = (
  selectedTemplate: string,
  templateFilePath: string,
  projectDirectory: string,
): string => {
  const relativeTemplateFilePath: string = path.relative(
    `${ROOT_DIRECTORY}/templates/${selectedTemplate}`,
    templateFilePath,
  );
  return `${projectDirectory}/${relativeTemplateFilePath}`;
};

export const writeTemplateToFile = (template: Template, outputFilePath: string, answers: Config): void => {
  const outputString: string = template.render(answers);

  outputFileSync(outputFilePath, outputString);
};
