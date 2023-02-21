import { execSync } from "child_process";

const runStep = (script: string, terminalText: string): void => {
  console.log(`\n🔨 ${terminalText} 🔨`);
  execSync(script, { stdio: "inherit" });
};

export const runPostScaffoldSteps = (): void => {
  runStep("git init", "Initialising git with `git init`");
  runStep("yarn install", "Installing dependencies with `yarn install`");
  runStep("yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`");
  runStep("yarn format", "Making files pretty with `yarn format`");
  runStep("yarn build", "Compiling TS->JS with `yarn build`");
  runStep("yarn test", "Running unit tests with `yarn test`");
  runStep("yarn start", "Running JS with `yarn start`");
};
