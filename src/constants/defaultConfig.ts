import { Config } from "../models";

const defaultConfig: Config = {
  selectedTemplate: "ts-library",
  packageName: "my-new-package",
  packageDescription: "Hot new JS framework",
  author: "Open Sourcerer",
  projectDir: process.cwd(),
};

export default defaultConfig;
