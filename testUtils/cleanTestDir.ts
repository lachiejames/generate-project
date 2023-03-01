import fs from "fs-extra";

import testDir from "./testDir";

function cleanTestDir(): void {
  fs.rmSync(testDir, { recursive: true, force: true });
}

export default cleanTestDir;
