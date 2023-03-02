import { GPConfig, GPTemplateName } from "../models";

const defaultGPConfig: GPConfig = {
  templateName: GPTemplateName.TS_LIBRARY,
  projectName: "my-new-package",
  projectDescription: "Hot new JS framework",
  projectAuthor: "Open Sourcerer",
  projectDir: process.cwd(),
};

export default defaultGPConfig;
