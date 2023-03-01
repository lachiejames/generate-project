import { getConfigFromCli, setupCli } from "./cli";
import { runPostScaffoldSteps, runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const options = setupCli();
  const config = await getConfigFromCli(options);

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭", e);
}
