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
    postScaffoldSteps: (config) => {
      insertGitIgnore(config.projectDir);

      runStep(config, "git init", "Initialising git with `git init`");
      runStep(config, "yarn install", "Installing dependencies with `yarn install`");
      runStep(config, "yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`");
      runStep(config, "yarn format", "Making files pretty with `yarn format`");
      runStep(config, "yarn build", "Compiling TS->JS with `yarn build`");
      runStep(config, "yarn test", "Running unit tests with `yarn test`");
      runStep(config, "yarn start", "Running JS with `yarn start`");
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
    postScaffoldSteps: (config) => {
      insertGitIgnore(config.projectDir);

      runStep(config, "git init", "Initialising git with `git init`");
      runStep(config, "yarn install", "Installing dependencies with `yarn install`");
      runStep(config, "yarn upgrade --latest", "Upgrading dependencies with `yarn upgrade --latest`");
      runStep(config, "yarn format", "Making files pretty with `yarn format`");
      runStep(config, "yarn build", "Compiling TS->JS with `yarn build`");
      runStep(config, "yarn test", "Running unit tests with `yarn test`");
      runStep(config, "yarn start", "Running JS with `yarn start`");

      runStep(config, `docker build -t ${config.name} .`, "Building docker image with `docker build`");
      runStep(config, `docker run ${config.name}`, "Building docker image with `docker build`");
    },
  },
];

export default defaultGPTemplates;
