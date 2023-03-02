import GPConfig from "./GPConfig";

interface GPTemplate {
  name: string;
  displayName: string;
  description: string;
  runPostScaffoldSteps: (gpConfig: GPConfig) => void;
}

export default GPTemplate;
