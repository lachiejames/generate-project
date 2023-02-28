import { Config, getOutputFilePath, getTemplateFilePaths, loadNunjucksEnvironment, writeTemplateToFile } from "..";

async function runScaffold(config: Config, projectDir: string): Promise<void> {
  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(config.selectedTemplate);

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(config.selectedTemplate, templateFilePath, projectDir);
    writeTemplateToFile(template, outputFilePath, config);
  }
}

export default runScaffold;
