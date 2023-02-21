import { rmSync } from "fs-extra";

import testDir from "./testDir";

function cleanTestDir(): void {
  rmSync(testDir, { recursive: true, force: true });
}

export default cleanTestDir;
