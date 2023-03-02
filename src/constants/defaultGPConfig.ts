import { GPConfig, GPTemplateName } from "../models";

const defaultGPConfig: GPConfig = {
  templateName: GPTemplateName.TS_LIBRARY,
  name: "my-new-package",
  description: "Hot new JS framework",
  author: "Open Sourcerer",
  projectDir: process.cwd(),
};

export default defaultGPConfig;
