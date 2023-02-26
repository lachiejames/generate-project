import { Config } from "../models";

const defaultConfig: Config = {
  projectDir: process.cwd(),
  selectedTemplate: "ts-library",
  packageName: "my-new-package",
  packageDescription: "Hot new JS framework",
  author: "Open Sourcerer",
};

export default defaultConfig;
