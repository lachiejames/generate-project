import { defaultConfig, GPConfig } from "../src";
import testDir from "./testDir";

const testConfig: GPConfig = {
  ...defaultConfig,
  projectDir: testDir,
};

export default testConfig;
