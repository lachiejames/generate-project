import path from "path";

import { getConfigFromCli, rootDir, runPostScaffoldSteps, runScaffold, setupCli } from ".";

async function run(): Promise<void> {
  const options = setupCli();
  const config = await getConfigFromCli(options);
  const projectDir = path.join(rootDir, config.packageName);

  await runScaffold(config, projectDir);
  runPostScaffoldSteps(projectDir);
}

run();
