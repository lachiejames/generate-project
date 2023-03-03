import GPConfig from "./gpConfig";

interface GPTemplate {
  displayName: string;
  description: string;
  runPreScaffoldSteps: (cliArgs: Partial<GPConfig>) => Promise<GPConfig>;
  runPostScaffoldSteps: (gpConfig: GPConfig) => Promise<void>;
}

export default GPTemplate;
