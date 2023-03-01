import childProcess from "child_process";

import { insertGitIgnore } from "../io";
import { Config } from "../models";

function runStep(config: Config, script: string, terminalText: string): void {
  console.log(`\n🔨 ${terminalText} 🔨`);
  childProcess.execSync(script, { stdio: "inherit", cwd: config.projectDir });
}

function runPostScaffoldSteps(config: Config): void {
  insertGitIgnore(config.projectDir);

  runStep(config, "git init", "Initialising git with `git init`");
  runStep(config, "yarn install", "Installing dependencies with `yarn install`");
  runStep(config, "yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`");
  runStep(config, "yarn format", "Making files pretty with `yarn format`");
  runStep(config, "yarn build", "Compiling TS->JS with `yarn build`");
  runStep(config, "yarn test", "Running unit tests with `yarn test`");
  runStep(config, "yarn start", "Running JS with `yarn start`");
}

export default runPostScaffoldSteps;
