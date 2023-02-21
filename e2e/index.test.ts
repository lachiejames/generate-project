import { execSync } from "child_process";
import { readFileSync } from "fs-extra";
import { sync } from "glob";
import { injectPromptAnswers as injectPromptAnswers, cleanTestDirectory, TEST_DIRECTORY } from "../testUtils/helpers";
import { MOCK_ANSWERS } from "../testUtils/mockAnswers";

function runCommand(command: string) {
  execSync(command, { stdio: "inherit" });
}

function buildProject() {
  runCommand("yarn install");
  runCommand("yarn build");
}

function uninstallPackageGlobally() {
  runCommand(`rm -rf *.tgz`);
  runCommand(`npm uninstall -g @lachiejames/generate-project`);
}

function installPackageGlobally() {
  runCommand(`npm pack`);
  runCommand(`npm install -g *.tgz`);
}

describe("e2e", () => {
  beforeAll(() => {
    buildProject();

    cleanTestDirectory(); // In case it wasn't already empty
    uninstallPackageGlobally(); // In case it wasn't already uninstalled

    installPackageGlobally();
  });

  beforeEach(() => {
    injectPromptAnswers();
  });

  afterAll(() => {
    uninstallPackageGlobally();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  it("produces the expected files", () => {
    runCommand(`mkdir ${TEST_DIRECTORY}`);
    runCommand(`cd ${TEST_DIRECTORY}`);
    runCommand(`generate-project`);

    const templateFilePaths: string[] = sync(TEST_DIRECTORY, {
      dot: true,
      nodir: true,
    });

    console.log(templateFilePaths);

    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/package.json`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/yarn.lock`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/src/index.ts`);
    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/dist/index.js`);
  });

  it.skip("files contain expected content", () => {
    runCommand(`mkdir ${TEST_DIRECTORY}`);
    runCommand(`cd ${TEST_DIRECTORY}`);
    runCommand(`generate-project`);

    const packageJson = readFileSync(`${TEST_DIRECTORY}/package.json`, "utf8");

    expect(packageJson).toContain(`"name": "${MOCK_ANSWERS.packageName}"`);
    expect(packageJson).toContain(`"author": "${MOCK_ANSWERS.author}"`);
    expect(packageJson).toContain(`"description": "${MOCK_ANSWERS.packageDescription}"`);
  });
});
