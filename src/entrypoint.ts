import { runPostScaffoldSteps, runScaffold } from "./scaffold";

async function run(): Promise<void> {
  const projectDir = process.cwd();

  await runScaffold(projectDir);
  runPostScaffoldSteps(projectDir);
}

run();
