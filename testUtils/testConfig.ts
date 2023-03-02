import { defaultGPConfig, GPConfig } from "../src";
import testDir from "./testDir";

const testConfig: GPConfig = {
  ...defaultGPConfig,
  projectDir: testDir,
};

export default testConfig;
