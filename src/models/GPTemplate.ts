import GPConfig from "./GPConfig";

interface GPTemplate {
  name: string;
  description: string;
  value: string;
  runPostScaffoldSteps: (config: GPConfig) => void;
}

export default GPTemplate;
