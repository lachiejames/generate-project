import { runPostScaffoldSteps, runScaffold } from "./scaffold";

runScaffold(process.cwd()).then(() => runPostScaffoldSteps());