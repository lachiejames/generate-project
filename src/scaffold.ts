import { execSync } from "child_process";
import { Environment, Template } from "nunjucks";
import { getOutputFilePath, getTemplateFilePaths, loadNunjucksEnvironment, writeTemplateToFile } from "./fileHandler";
import Prompts from "./models/prompts";
import { showPrompts } from "./prompts";

const runStep = (script: string, terminalText: string): void => {
  console.log(`\n🐛 ${terminalText} 🐛`);
  execSync(script);
};

export const runPostScaffoldSteps = (): void => {
  runStep("yarn install", "Installing dependencies with `yarn install`");
  runStep("yarn format", "Making files pretty with `yarn format`");
  runStep("yarn build", "Compiling TS->JS with `yarn build`");
  runStep("yarn test", "Running unit tests with `yarn test`");
  runStep("yarn start", "Running JS with `yarn start`");
};

export const runScaffold = async (projectDirectory: string): Promise<void> => {
  const answers: Prompts = await showPrompts();

  const templateEnvironment: Environment = loadNunjucksEnvironment();
  const templateFilePaths: string[] = getTemplateFilePaths(answers.selectedTemplate);

  for (const templateFilePath of templateFilePaths) {
    const template: Template = templateEnvironment.getTemplate(templateFilePath);
    const outputFilePath: string = getOutputFilePath(answers.selectedTemplate, templateFilePath, projectDirectory);
    writeTemplateToFile(template, outputFilePath, answers);
  }
};
