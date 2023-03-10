import { getOutputFilePath, getTemplateFilePaths, writeTemplateToFile } from "../io";
import { GPConfig } from "../models";
import loadNunjucksEnvironment from "./loadNunjucksEnvironment";

async function runScaffold(gpConfig: GPConfig): Promise<void> {
  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(gpConfig.templateName);

  for (const templateFilePath of templateFilePaths) {
    const nunjucksTemplate = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(gpConfig.templateName, templateFilePath, gpConfig.projectDir);
    writeTemplateToFile(nunjucksTemplate, outputFilePath, gpConfig);
  }
}

export default runScaffold;
