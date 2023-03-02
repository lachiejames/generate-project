import GPTemplateName from "./gpTemplateName";

interface GPConfig {
  templateName: GPTemplateName;
  name: string;
  description: string;
  author: string;
  projectDir: string;
}

export default GPConfig;
