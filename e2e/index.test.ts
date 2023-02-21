/**
 * IMPORTANT: This test suite should only be run after executing `bash ./e2e/preTest.sh`, which installs the local
 * project as a global npm package and executes `generate-project` in a test directory.  This is the most comprehensive
 * way to verify that everything works before publishing to NPM.
 *
 * Ideally I would use TS to write those parts and just `execSync(<insert bash commands here>)`,
 * but that doesn't seem to work with the interactive CLI.  It just skips over the prompts.  So I'm using bash instead.
 */

import { execSync } from "child_process";
import { readFileSync } from "fs-extra";
import { sync } from "glob";

import { DEFAULT_ANSWERS } from "../src/constants/defaultAnswers";
import { TEST_DIRECTORY } from "../testUtils/helpers";

describe("ts-library", () => {
  afterAll(() => {
    // Clean up after ourselves
    execSync(`rm -rf ${TEST_DIRECTORY}`);
    execSync(`rm -rf *.tgz`);
  });

  it("produces the expected files", () => {
    const templateFilePaths: string[] = sync(`${TEST_DIRECTORY}/**`, { dot: true, nodir: true });

    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/package.json`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/yarn.lock`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/src/index.ts`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/dist/index.js`);
  });

  it("files contain expected content", () => {
    const packageJsonContents = readFileSync(`${TEST_DIRECTORY}/package.json`, "utf8");

    expect(packageJsonContents).toContain(`"name": "${DEFAULT_ANSWERS.packageName}"`);
    expect(packageJsonContents).toContain(`"description": "${DEFAULT_ANSWERS.packageDescription}"`);
    expect(packageJsonContents).toContain(`"author": "${DEFAULT_ANSWERS.author}"`);
  });
});
