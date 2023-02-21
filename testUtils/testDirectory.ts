// WARNING: this directory will be deleted on every test run, so don't put anything important in here
import path from "path";

import { ROOT_DIRECTORY } from "../src/constants/rootDirectory";

export const TEST_DIRECTORY = path.join(ROOT_DIRECTORY, "tempTestDir");
