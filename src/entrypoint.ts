import { Command } from "commander";

import { getConfigFromCli, runPostScaffoldSteps, runScaffold } from ".";

async function run(): Promise<void> {
  const program = new Command();
  program.option("--projectDir", "Project directory").parse(process.argv);
  program.option("--template", "Selected template").parse(process.argv);
  program.option("--packageName", "Project name").parse(process.argv);
  program.option("--packageDescription", "Project description").parse(process.argv);
  program.option("--author", "Project author").parse(process.argv);
  const options = program.opts();

  const config = await getConfigFromCli(options);

  await runScaffold(config);
  runPostScaffoldSteps(config);
}

run();
