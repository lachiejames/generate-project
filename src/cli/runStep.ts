import childProcess from "child_process";

import { GPConfig } from "../models";

function runStep(config: GPConfig, script: string, terminalText: string): void {
  console.log(`\n🔨 ${terminalText} 🔨`);
  childProcess.execSync(script, { stdio: "inherit", cwd: config.projectDir });
}

export default runStep;
