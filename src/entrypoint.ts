import { Command } from "commander";

import { getConfigFromCli, runPostScaffoldSteps, runScaffold } from ".";

async function run(): Promise<void> {
  const program = new Command("generate-project");
  program
    .option("-t, --selectedTemplate <string>", "Selected template")
    .option("-n, --packageName <string>", "Project name")
    .option("-d, --packageDescription <string>", "Project description")
    .option("-a, --author <string>", "Project author")
    .parse(process.argv);
  const options = program.opts();

  const config = await getConfigFromCli(options);

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

run();
