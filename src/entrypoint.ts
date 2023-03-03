import { setupCli } from "./cli";
import { defaultGPTemplates } from "./constants";
import { GPTemplateName } from "./models";
import { runScaffold } from "./scaffold";
import { promptTemplateName } from "./scaffold/preSteps";

async function run(): Promise<void> {
  const cli = setupCli();
  const templateName = cli.args[0] || (await promptTemplateName());
  const selectedTemplate = defaultGPTemplates[templateName as GPTemplateName];

  const gpConfig = await selectedTemplate.runPreScaffoldSteps(cli.opts());
  await runScaffold(gpConfig);
  await selectedTemplate.runPostScaffoldSteps(gpConfig);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
