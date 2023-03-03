import { setupCli } from "./cli";
import { getTemplateName } from "./cli/getConfigFromCli";
import { defaultGPTemplates } from "./constants";
import { runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const cliArgs = setupCli();
  const templateName = cliArgs.templateName || (await getTemplateName());
  const selectedTemplate = defaultGPTemplates[templateName];

  const gpConfig = await selectedTemplate.runPreScaffoldSteps(cliArgs);
  await runScaffold(gpConfig);
  await selectedTemplate.runPostScaffoldSteps(gpConfig);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
