import childProcess from "child_process";

function runStep(script: string, terminalText: string, projectDir: string): void {
  console.log(`\n🔨 ${terminalText} 🔨`);
  childProcess.execSync(script, { stdio: "inherit", cwd: projectDir });
}

export default runStep;
