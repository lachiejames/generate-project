import { Environment, Template } from "nunjucks";

import { getOutputFilePath, writeTemplateToFile } from "./fileHandler";
import { getTemplateFilePaths } from "./getTemplateFilePaths";
import { loadNunjucksEnvironment } from "./loadNunjucksEnvironment";
import Config from "./models/prompts";
import { showPrompts } from "./showPrompts";

export const runScaffold = async (projectDirectory: string): Promise<void> => {
  const answers: Config = await showPrompts();

  const templateEnvironment: Environment = loadNunjucksEnvironment();
  const templateFilePaths: string[] = getTemplateFilePaths(answers.selectedTemplate);

  for (const templateFilePath of templateFilePaths) {
    const template: Template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath: string = getOutputFilePath(answers.selectedTemplate, templateFilePath, projectDirectory);
    writeTemplateToFile(template, outputFilePath, answers);
  }
};
