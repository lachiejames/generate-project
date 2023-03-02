import { getOutputFilePath, getTemplateFilePaths, writeTemplateToFile } from "../io";
import { GPConfig } from "../models";
import loadNunjucksEnvironment from "./loadNunjucksEnvironment";

async function runScaffold(gpConfig: GPConfig): Promise<void> {
  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(gpConfig.template);

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(gpConfig.template, templateFilePath, gpConfig.projectDir);
    writeTemplateToFile(template, outputFilePath, gpConfig);
  }
}

export default runScaffold;
