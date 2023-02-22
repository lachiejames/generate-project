import { runPostScaffoldSteps, runScaffold } from "./scaffold";

const projectDir = process.cwd();

runScaffold(projectDir).then(() => runPostScaffoldSteps(projectDir));
