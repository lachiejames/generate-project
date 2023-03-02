import { GPTemplate, GPTemplateName } from "../models";
import { setupDocker, setupGit, setupYarn } from "../scaffold";

const defaultGPTemplates: GPTemplate[] = [
  {
    name: GPTemplateName.TS_LIBRARY,
    displayName: "TypeScript Node library",
    description: `
    A Node library written in TypeScript.
    This template is a good starting point for building a library that can be published to NPM.
    It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.  

    ✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ❌ Docker ✅ GitHub Actions ✅ Semantic Release
`,
    runPostScaffoldSteps: (gpConfig) => {
      setupGit(gpConfig.projectDir);
      setupYarn(gpConfig.projectDir);
    },
  },
  {
    name: GPTemplateName.TS_DOCKER,
    displayName: "TypeScript Node library (with Docker)",
    description: `
      A Node library written in TypeScript.
      This template is a good starting point for building a library that can be published to NPM.
      It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.

      ✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ✅ Docker ✅ GitHub Actions ✅ Semantic Release
  `,
    runPostScaffoldSteps: (gpConfig) => {
      setupGit(gpConfig.projectDir);
      setupYarn(gpConfig.projectDir);
      setupDocker(gpConfig.name, gpConfig.projectDir);
    },
  },
];

export default defaultGPTemplates;
