import { getOutputFilePath, getTemplateFilePaths, writeTemplateToFile } from "../io";
import { GPConfig } from "../models";
import loadNunjucksEnvironment from "./loadNunjucksEnvironment";

async function runScaffold(config: GPConfig): Promise<void> {
  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(config.template);

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(config.template, templateFilePath, config.projectDir);
    writeTemplateToFile(template, outputFilePath, config);
  }
}

export default runScaffold;
