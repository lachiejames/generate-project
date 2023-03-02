import GPConfig from "./gpConfig";
import GPTemplateName from "./gpTemplateName";

interface GPTemplate {
  name: GPTemplateName;
  displayName: string;
  description: string;
  runPostScaffoldSteps: (gpConfig: GPConfig) => void;
}

export default GPTemplate;
