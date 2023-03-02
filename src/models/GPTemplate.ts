import GPConfig from "./GPConfig";

interface GPTemplate {
  name: string;
  description: string;
  value: string;
  runPostScaffoldSteps: (gpConfig: GPConfig) => void;
}

export default GPTemplate;
