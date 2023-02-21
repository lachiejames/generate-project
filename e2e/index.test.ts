import { execSync } from "child_process";
import { setPromptMock, cleanTestDirectory, TEST_DIRECTORY } from "../testUtils/helpers";

export default function runCommand(command: string) {
  execSync(command, { stdio: "inherit" });
}

describe("e2e", () => {
  beforeEach(() => {
    cleanTestDirectory();
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  it("generating a ts-library", () => {
    runCommand(`mkdir ${TEST_DIRECTORY}`);
    runCommand(`npm pack --pack-destination ${TEST_DIRECTORY}`);
  });
});
