import { execSync } from "child_process";
import { setPromptMock, cleanTestDirectory, TEST_DIRECTORY } from "../testUtils/helpers";

function runCommand(command: string) {
  execSync(command, { stdio: "inherit" });
}

function uninstallPackageGlobally() {
  runCommand(`npm uninstall -g @lachiejames/generate-project`);
}

function installPackageGlobally() {
  runCommand(`mkdir ${TEST_DIRECTORY}`);
  runCommand(`npm pack --pack-destination ${TEST_DIRECTORY}`);
  runCommand(`npm install -g ${TEST_DIRECTORY}/*.tgz`);
  runCommand(`rm -rf ${TEST_DIRECTORY}/*.tgz`);
}

describe("e2e", () => {
  beforeAll(() => {
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
    runCommand(`npm pack --pack-destination ${TEST_DIRECTORY}`);
    runCommand(`npm pack --pack-destination ${TEST_DIRECTORY}`);
  });
});
