/**
 * IMPORTANT: This test suite should only be run after executing `bash ./e2e/preTest.sh`, which installs the local
 * project as a global npm package and executes `generate-project` in a test directory.  This is the most comprehensive
 * way to verify that everything works before publishing to NPM.
 *
 * Ideally I would use TS to write those parts and just `execSync(<insert bash commands here>)`,
 * but that doesn't seem to work with the interactive CLI.  It just skips over the prompts.  So I'm using bash instead.
 */

import { readFileSync } from "fs-extra";
import { sync } from "glob";
import { TEST_DIRECTORY } from "../testUtils/helpers";
import { MOCK_ANSWERS } from "../testUtils/mockAnswers";
import path from "path";

describe("e2e", () => {
  it("produces the expected files", () => {
    const templateFilePathsGlob = path.join(TEST_DIRECTORY, "**");
    const templateFilePaths: string[] = sync(templateFilePathsGlob, { dot: true, nodir: true });

    console.log(templateFilePaths);

    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/package.json`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/yarn.lock`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/src/index.ts`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/dist/index.js`);
  });

  it("files contain expected content", () => {
    const packageJson = readFileSync(`${TEST_DIRECTORY}/package.json`, "utf8");

    expect(packageJson).toContain(`"name": "${MOCK_ANSWERS.packageName}"`);
    expect(packageJson).toContain(`"author": "${MOCK_ANSWERS.author}"`);
    expect(packageJson).toContain(`"description": "${MOCK_ANSWERS.packageDescription}"`);
  });
});
