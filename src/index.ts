import { runPostScaffoldSteps } from "./runPostScaffoldSteps";
import { runScaffold } from "./runScaffold";

runScaffold(process.cwd()).then(() => runPostScaffoldSteps());
