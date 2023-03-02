import Config from "./config";

interface Template {
  name: string;
  description: string;
  value: string;
  postScaffoldSteps: (config: Config) => void;
}

export default Template;
