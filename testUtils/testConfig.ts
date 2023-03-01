import { Config, defaultConfig } from "../src";
import testDir from "./testDir";

const testConfig: Config = {
  ...defaultConfig,
  projectDir: testDir,
};

export default testConfig;
