import { GPConfig } from "../models";

const defaultGPConfig: GPConfig = {
  template: "ts-library",
  name: "my-new-package",
  description: "Hot new JS framework",
  author: "Open Sourcerer",
  projectDir: process.cwd(),
};

export default defaultGPConfig;
