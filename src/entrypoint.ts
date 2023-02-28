import { getConfigFromCli, runPostScaffoldSteps, runScaffold } from ".";

async function run(): Promise<void> {
  const config = await getConfigFromCli();

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

run();
