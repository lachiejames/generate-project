import { runStep } from "../cli";
import { insertGitIgnore } from "../io";
import { GPConfig } from "../models";

function runPostScaffoldSteps(config: GPConfig): void {
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
