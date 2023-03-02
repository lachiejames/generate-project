import { getConfigFromCli, setupCli } from "./cli";
import { defaultGPTemplates } from "./constants";
import { runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const options = setupCli();
  const config = await getConfigFromCli(options);
  const selectedTemplate = defaultGPTemplates.find((template) => template.value === config.template);
  if (!selectedTemplate) throw Error(`Unknown template selected: ${config.template}`);

  await runScaffold(config);

  selectedTemplate.runPostScaffoldSteps(config);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
