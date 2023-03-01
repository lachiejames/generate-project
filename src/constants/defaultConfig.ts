import { Config } from "../models";

const defaultConfig: Config = {
  template: "ts-library",
  name: "my-new-package",
  description: "Hot new JS framework",
  author: "Open Sourcerer",
  projectDir: process.cwd(),
};

export default defaultConfig;
