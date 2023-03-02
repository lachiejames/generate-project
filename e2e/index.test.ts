/**
 * IMPORTANT: This test suite should only be run after executing `bash ./e2e/preTest.sh`, which installs the local
 * project as a global npm package and executes `generate-project` in a test directory.  This is the most comprehensive
 * way to verify that everything works before publishing to NPM.
 *
 * Ideally I would use TS to write those parts and just `execSync(<insert bash commands here>)`,
 * but that doesn't seem to work with the interactive CLI.  It just skips over the prompts.  So I'm using bash instead.
 */

import childProcess from "child_process";
import fs from "fs-extra";
import glob from "glob";
import shelljs from "shelljs";

import { defaultGPConfig, GPConfig, GPTemplateName } from "../src";
import { testConfig, testDir } from "../testUtils";

function executeCLI(gpConfig: GPConfig) {
  // Using shelljs.exec instead of childProcess.execSync here because I already use childProcess.execSync during
  // runPostScaffoldSteps(), and nested childProcess.execSync is not allowed.
  // Apparently a childProcess.execSync nested inside a shelljs.exec is allowed though (not sure why, but whatever it's just a test)
  shelljs.exec(
    `generate-project \
    --templateName "${gpConfig.templateName}" \
    --projectName "${gpConfig.projectName}" \
    --projectDescription "${gpConfig.projectDescription}" \
    --projectAuthor "${gpConfig.projectAuthor}" \
    --projectDir "${gpConfig.projectDir}"`,
  );
}

describe("ts-library", () => {
  beforeAll(() => {
    executeCLI({ ...testConfig, templateName: GPTemplateName.TS_LIBRARY });
  });

  afterAll(() => {
    // Clean up after ourselves
    childProcess.execSync(`rm -rf ${testDir}`);
    childProcess.execSync(`rm -rf *.tgz`);
  });

  it("produces the expected files", () => {
    const outputFilePaths: string[] = glob.sync(`${testDir}/**`, { dot: true, nodir: true });

    // Ensure src files were copied over
    expect(outputFilePaths).toContain(`${testDir}/package.json`);
    expect(outputFilePaths).toContain(`${testDir}/src/index.ts`);

    // Ensure `yarn install` was successful
    expect(outputFilePaths).toContain(`${testDir}/node_modules/typescript/package.json`);

    // Ensure `yarn build` was successful
    expect(outputFilePaths).toContain(`${testDir}/dist/index.js`);

    // Ensure .gitignore is copied over (as a post-scaffold step)
    expect(outputFilePaths).toContain(`${testDir}/.gitignore`);
  });

  it("files contain expected content", () => {
    const packageJsonContents = fs.readFileSync(`${testDir}/package.json`, "utf8");

    expect(packageJsonContents).toContain(`"name": "${defaultGPConfig.projectName}"`);
    expect(packageJsonContents).toContain(`"description": "${defaultGPConfig.projectDescription}"`);
    expect(packageJsonContents).toContain(`"author": "${defaultGPConfig.projectAuthor}"`);
  });
});

describe("ts-docker", () => {
  beforeAll(() => {
    executeCLI({ ...testConfig, templateName: GPTemplateName.TS_DOCKER });
  });

  afterAll(() => {
    // Clean up after ourselves
    childProcess.execSync(`rm -rf ${testDir}`);
    childProcess.execSync(`rm -rf *.tgz`);
  });

  it("produces the expected files", () => {
    const outputFilePaths: string[] = glob.sync(`${testDir}/**`, { dot: true, nodir: true });

    // Ensure src files were copied over
    expect(outputFilePaths).toContain(`${testDir}/package.json`);
    expect(outputFilePaths).toContain(`${testDir}/src/index.ts`);
    expect(outputFilePaths).toContain(`${testDir}/Dockerfile`);

    // Ensure `yarn install` was successful
    expect(outputFilePaths).toContain(`${testDir}/node_modules/typescript/package.json`);

    // Ensure `yarn build` was successful
    expect(outputFilePaths).toContain(`${testDir}/dist/index.js`);

    // Ensure .gitignore is copied over (as a post-scaffold step)
    expect(outputFilePaths).toContain(`${testDir}/.gitignore`);
  });

  it("files contain expected content", () => {
    const packageJsonContents = fs.readFileSync(`${testDir}/package.json`, "utf8");

    expect(packageJsonContents).toContain(`"name": "${defaultGPConfig.projectName}"`);
    expect(packageJsonContents).toContain(`"description": "${defaultGPConfig.projectDescription}"`);
    expect(packageJsonContents).toContain(`"author": "${defaultGPConfig.projectAuthor}"`);
  });
});
