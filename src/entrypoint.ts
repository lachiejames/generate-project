import { setupCli } from "./cli";
import { getTemplateName } from "./cli/getConfigFromCli";
import { defaultGPTemplates } from "./constants";
import {  GPTemplateName } from "./models";
import { runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const cli = setupCli();
  const templateName = (cli.args[0] as GPTemplateName) || (await getTemplateName());
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
