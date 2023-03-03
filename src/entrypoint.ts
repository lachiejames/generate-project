import { setupCli } from "./cli";
import { defaultGPTemplates } from "./constants";
import { GPTemplateName } from "./models";
import { runScaffold } from "./scaffold";
import { promptTemplateName } from "./scaffold/preSteps";

async function getTemplateName(cliArgs: string[]): Promise<GPTemplateName> {
  if (cliArgs.length === 0) return promptTemplateName();
  return cliArgs[0] as GPTemplateName;
}

async function run(): Promise<void> {
  const cli = setupCli();
  const templateName = await getTemplateName(cli.args);
  const selectedTemplate = defaultGPTemplates[templateName];

  const gpConfig = await selectedTemplate.runPreScaffoldSteps(cli.opts());
  await runScaffold(gpConfig);
  await selectedTemplate.runPostScaffoldSteps(gpConfig);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
