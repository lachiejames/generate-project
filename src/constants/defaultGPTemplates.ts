import { GPTemplate } from "../models";
import { setupGit, setupYarn } from "../scaffold";

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
    runPostScaffoldSteps: (gpConfig) => {
      setupGit(gpConfig.projectDir);
      setupYarn(gpConfig.projectDir);
    },
  },
  // TODO: add this library
  // {
  //   name: "TypeScript Node library (with Docker)",
  //   description: `
  //     A Node library written in TypeScript.
  //     This template is a good starting point for building a library that can be published to NPM.
  //     It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.

  //     ✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ✅ Docker ✅ GitHub Actions ✅ Semantic Release
  // `,
  //   value: "ts-node-docker",
  //   runPostScaffoldSteps: (gpConfig) => {
  //     setupGit(gpConfig.projectDir);
  //     setupYarn(gpConfig.projectDir);
  //   },
  // },
];

export default defaultGPTemplates;
