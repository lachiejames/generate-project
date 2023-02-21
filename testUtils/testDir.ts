import path from "path";

// WARNING: this directory will be deleted on every test run, so don't put anything important in here
const testDir = path.normalize(path.join(__dirname, "..", "tempTestDir"));

export default testDir;
