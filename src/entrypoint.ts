import { getConfigFromCli, setupCli } from "./cli";
import { defaultGPTemplates } from "./constants";
import { runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const options = setupCli();
  const gpConfig = await getConfigFromCli(options);
  const selectedTemplate = defaultGPTemplates.find((template) => template.value === gpConfig.templateName);
  if (!selectedTemplate) throw Error(`Unknown template selected: ${gpConfig.templateName}`);

  await runScaffold(gpConfig);

  selectedTemplate.runPostScaffoldSteps(gpConfig);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
