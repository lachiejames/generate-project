import { getOutputFilePath, getTemplateFilePaths, loadNunjucksEnvironment, showPrompts, writeTemplateToFile } from "..";

async function runScaffold(projectDirectory: string): Promise<void> {
  const answers = await showPrompts();

  const templateEnvironment = loadNunjucksEnvironment();
  const templateFilePaths = getTemplateFilePaths(answers.selectedTemplate);

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath = getOutputFilePath(answers.selectedTemplate, templateFilePath, projectDirectory);
    writeTemplateToFile(template, outputFilePath, answers);
  }
}

export default runScaffold;
