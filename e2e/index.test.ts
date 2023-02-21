import { execSync } from "child_process";
import { sync } from "glob";
import { setPromptMock, cleanTestDirectory, TEST_DIRECTORY } from "../testUtils/helpers";

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
    uninstallPackageGlobally(); // In case it wasn't already uninstalled
    installPackageGlobally();
  });

  afterAll(() => {
    uninstallPackageGlobally();
  });

  beforeEach(() => {
    cleanTestDirectory(); // In case it wasn't already empty
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  it("install package globally then generate a ts-library", () => {
    runCommand(`mkdir ${TEST_DIRECTORY}`);
    runCommand(`cd ${TEST_DIRECTORY}`);
    runCommand(`generate-project`);

    const templateFilePaths: string[] = sync(TEST_DIRECTORY, {
      dot: true,
      nodir: true,
    });

    console.log(templateFilePaths);

    expect(templateFilePaths).toContain(`${TEST_DIRECTORY}/.package.json`);
  });
});
