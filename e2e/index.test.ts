/**
 * IMPORTANT: This test suite should only be run after executing `bash ./e2e/preTest.sh`, which installs the local
 * project as a global npm package and executes `generate-project` in a test directory.  This is the most comprehensive
 * way to verify that everything works before publishing to NPM.
 *
 * Ideally I would use TS to write those parts and just `execSync(<insert bash commands here>)`,
 * but that doesn't seem to work with the interactive CLI.  It just skips over the prompts.  So I'm using bash instead.
 */

import childProcess from "child_process";
import shelljs from "shelljs";
import glob from "glob";

import { testConfig, testDir } from "../testUtils";

it("produces the expected files", () => {
  console.log("start CLI");

  const x = shelljs.exec(
    `generate-project \
    --selectedTemplate "ts-library" \
    --packageName "my-new-package" \
    --packageDescription "Hot new JS framework" \
    --author "Open Sourcerer" \
    --projectDir ${testDir} \
    `,
  );

  console.log("end CLI", x);

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
