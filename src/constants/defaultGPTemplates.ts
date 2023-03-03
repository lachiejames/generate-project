import { GPConfig, GPTemplate, GPTemplateName } from "../models";
import { promptProjectAuthor, promptProjectDescription, promptProjectName, setupGit, setupYarn } from "../scaffold";
import defaultGPConfig from "./defaultGPConfig";

const defaultGPTemplates: Record<GPTemplateName, GPTemplate> = {
  [GPTemplateName.TS_LIBRARY]: {
    displayName: "TypeScript Node library",
    description: `A Node library written in TypeScript.
This template is a good starting point for building a library that can be published to NPM.
It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.  

✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ❌ Docker ✅ GitHub Actions ✅ Semantic Release
`,
    runPreScaffoldSteps: async (cliArgs) => {
      const gpConfig: GPConfig = JSON.parse(JSON.stringify(defaultGPConfig));

      gpConfig.projectName = cliArgs.projectName || (await promptProjectName());
      gpConfig.projectDescription = cliArgs.projectDescription || (await promptProjectDescription());
      gpConfig.projectAuthor = cliArgs.projectAuthor || (await promptProjectAuthor());
      gpConfig.projectDir = cliArgs.projectDir || process.cwd();

      return gpConfig;
    },
    runPostScaffoldSteps: async (gpConfig) => {
      setupGit(gpConfig.projectDir);
      setupYarn(gpConfig.projectDir);
    },
  },
  [GPTemplateName.TS_DOCKER]: {
    displayName: "TypeScript Node library (with Docker)",
    description: `A Node library written in TypeScript.
This template is a good starting point for building a library that can be published to NPM.
It includes a build script that compiles your TypeScript to JavaScript, and a test script that runs your tests with Jest.

✅ ESLint ✅ Prettier ✅ Jest ✅ TypeScript ✅ Docker ✅ GitHub Actions ✅ Semantic Release
`,
    runPreScaffoldSteps: async (cliArgs) => {
      const gpConfig: GPConfig = JSON.parse(JSON.stringify(defaultGPConfig));

      gpConfig.projectName = cliArgs.projectName || (await promptProjectName());
      gpConfig.projectDescription = cliArgs.projectDescription || (await promptProjectDescription());
      gpConfig.projectAuthor = cliArgs.projectAuthor || (await promptProjectAuthor());
      gpConfig.projectDir = cliArgs.projectDir || process.cwd();

      return gpConfig;
    },
    runPostScaffoldSteps: async (gpConfig) => {
      setupGit(gpConfig.projectDir);
      setupYarn(gpConfig.projectDir);
    },
  },
};

export default defaultGPTemplates;
