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

import DEFAULT_ANSWERS from "../src/constants/defaultAnswers";
import testDir from "../testUtils/testDir";

describe("ts-library", () => {
  afterAll(() => {
    // Clean up after ourselves
    childProcess.execSync(`rm -rf ${testDir}`);
    childProcess.execSync(`rm -rf *.tgz`);
  });

  it("produces the expected files", () => {
    const templateFilePaths: string[] = glob.sync(`${testDir}/**`, { dot: true, nodir: true });

    expect(templateFilePaths).toContain(`${testDir}/package.json`);
    expect(templateFilePaths).toContain(`${testDir}/yarn.lock`);
    expect(templateFilePaths).toContain(`${testDir}/src/index.ts`);
    expect(templateFilePaths).toContain(`${testDir}/dist/index.js`);
  });

  it("files contain expected content", () => {
    const packageJsonContents = fs.readFileSync(`${testDir}/package.json`, "utf8");

    expect(packageJsonContents).toContain(`"name": "${DEFAULT_ANSWERS.packageName}"`);
    expect(packageJsonContents).toContain(`"description": "${DEFAULT_ANSWERS.packageDescription}"`);
    expect(packageJsonContents).toContain(`"author": "${DEFAULT_ANSWERS.author}"`);
  });
});
