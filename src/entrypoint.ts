import { getConfigFromCli, runPostScaffoldSteps, runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const config = await getConfigFromCli();

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

run();
