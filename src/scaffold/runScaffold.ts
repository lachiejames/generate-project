import {
  getConfigFromCli,
  getOutputFilePath,
  getTemplateFilePaths,
  loadNunjucksEnvironment,
  writeTemplateToFile,
} from "..";

async function runScaffold(projectDirectory: string): Promise<void> {
  const config = await getConfigFromCli();

  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(config.selectedTemplate);

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(config.selectedTemplate, templateFilePath, projectDirectory);
    writeTemplateToFile(template, outputFilePath, config);
  }
}

export default runScaffold;
