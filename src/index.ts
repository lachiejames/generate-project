import runPostScaffoldSteps from "./scaffold/runPostScaffoldSteps";
import runScaffold from "./scaffold/runScaffold";

runScaffold(process.cwd()).then(() => runPostScaffoldSteps());
