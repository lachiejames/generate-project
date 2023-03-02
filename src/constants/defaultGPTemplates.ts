import { runStep } from "../cli";
import { insertGitIgnore } from "../io";
import { GPTemplate } from "../models";

const defaultGPTemplates: GPTemplate[] = [
  {
    name: "TypeScript Node library",
    description: `
    A Node library written in TypeScript.
    This template is a good starting point for building a library that can be published to NPM.
    It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.  

    ✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ❌ Docker ✅ GitHub Actions ✅ Semantic Release
`,
    value: "ts-library",
    runPostScaffoldSteps: (config) => {
      insertGitIgnore(config.projectDir);

      runStep("git init", "Initialising git with `git init`", config.projectDir);
      runStep("yarn install", "Installing dependencies with `yarn install`", config.projectDir);
      runStep("yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`", config.projectDir);
      runStep("yarn format", "Making files pretty with `yarn format`", config.projectDir);
      runStep("yarn build", "Compiling TS->JS with `yarn build`", config.projectDir);
      runStep("yarn test", "Running unit tests with `yarn test`", config.projectDir);
      runStep("yarn start", "Running JS with `yarn start`", config.projectDir);
    },
  },
  {
    name: "TypeScript Node library (with Docker)",
    description: `
    A Node library written in TypeScript.
    This template is a good starting point for building a library that can be published to NPM.
    It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.  

    ✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ✅ Docker ✅ GitHub Actions ✅ Semantic Release
`,
    value: "ts-node-docker",
    runPostScaffoldSteps: (config) => {
      insertGitIgnore(config.projectDir);

      runStep("git init", "Initialising git with `git init`", config.projectDir);
      runStep("yarn install", "Installing dependencies with `yarn install`", config.projectDir);
      runStep("yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`", config.projectDir);
      runStep("yarn format", "Making files pretty with `yarn format`", config.projectDir);
      runStep("yarn build", "Compiling TS->JS with `yarn build`", config.projectDir);
      runStep("yarn test", "Running unit tests with `yarn test`", config.projectDir);
      runStep("yarn start", "Running JS with `yarn start`", config.projectDir);

      runStep(`docker build -t ${config.name} .`, "Building docker image with `docker build`", config.projectDir);
      runStep(`docker run ${config.name}`, "Building docker image with `docker build`", config.projectDir);
    },
  },
];

export default defaultGPTemplates;
