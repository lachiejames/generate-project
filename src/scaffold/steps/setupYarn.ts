import runStep from "./runStep";

function setupYarn(projectDir: string) {
  runStep("yarn install", "Installing dependencies with `yarn install`", projectDir);
  runStep("yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`", projectDir);
  runStep("yarn format", "Making files pretty with `yarn format`", projectDir);
  runStep("yarn build", "Compiling TS->JS with `yarn build`", projectDir);
  runStep("yarn test", "Running unit tests with `yarn test`", projectDir);
  runStep("yarn start", "Running JS with `yarn start`", projectDir);
}

export default setupYarn;
