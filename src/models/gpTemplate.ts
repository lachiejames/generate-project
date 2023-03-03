import GPConfig from "./gpConfig";
import GPTemplateName from "./gpTemplateName";

interface GPTemplate {
  name: GPTemplateName;
  displayName: string;
  description: string;
  runPreScaffoldSteps: (cliArgs: Partial<GPConfig>) => Promise<GPConfig>;
  runPostScaffoldSteps: (gpConfig: GPConfig) => Promise<void>;
}

export default GPTemplate;
