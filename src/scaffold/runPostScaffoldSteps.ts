import childProcess from "child_process";

import { insertGitIgnore } from "..";

function runStep(script: string, terminalText: string): void {
  console.log(`\n🔨 ${terminalText} 🔨`);
  childProcess.execSync(script, { stdio: "inherit" });
}

function runPostScaffoldSteps(projectDir: string): void {
  insertGitIgnore(projectDir);

  runStep("git init", "Initialising git with `git init`");
  runStep("yarn install", "Installing dependencies with `yarn install`");
  runStep("yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`");
  runStep("yarn format", "Making files pretty with `yarn format`");
  runStep("yarn build", "Compiling TS->JS with `yarn build`");
  runStep("yarn test", "Running unit tests with `yarn test`");
  runStep("yarn start", "Running JS with `yarn start`");
}

export default runPostScaffoldSteps;
