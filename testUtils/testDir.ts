import path from "path";

import rootDir from "../src/constants/rootDir";

// WARNING: this directory will be deleted on every test run, so don't put anything important in here
const testDir = path.join(rootDir, "tempTestDir");

export default testDir;
