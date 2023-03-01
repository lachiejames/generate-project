import { getConfigFromCli, runPostScaffoldSteps, runScaffold, setupCli } from ".";

async function run(): Promise<void> {
  const options = setupCli();
  const config = await getConfigFromCli(options);

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

try {
  run();
} catch (e) {
  console.error("😭 Failed to generate project 😭",e);
}
