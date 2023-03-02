import GPTemplateName from "./gpTemplateName";

interface GPConfig {
  templateName: GPTemplateName;
  projectName: string;
  projectDescription: string;
  projectAuthor: string;
  projectDir: string;
}

export default GPConfig;
