import GPConfig from "./GPConfig";

interface GPTemplate {
  name: string;
  description: string;
  value: string;
  postScaffoldSteps: (config: GPConfig) => void;
}

export default GPTemplate;
