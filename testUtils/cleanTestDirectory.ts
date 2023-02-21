import { rmSync } from "fs-extra";

import { TEST_DIRECTORY } from "./testDirectory";

export const cleanTestDirectory = (): void => {
  rmSync(TEST_DIRECTORY, { recursive: true, force: true });
};
