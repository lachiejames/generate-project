import { cleanTestDir, setPromptMock, testConfig } from "../../testUtils";
import { getConfigFromCli } from "..";

describe("getConfigFromCli", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("when CLI args provided, then returns config with those values", async () => {
    const sillyCliArgs = {
      selectedTemplate: "a",
      packageName: "b",
      packageDescription: "c",
      author: "d",
      projectDir: "e",
    };
    const results = await getConfigFromCli(sillyCliArgs);

    expect(results).toEqual(sillyCliArgs);
  });

  it("when no CLI args provided, then returns config with default values", async () => {
    const emptyCliArgs = {};
    const results = await getConfigFromCli(emptyCliArgs);

    expect(results).toEqual(testConfig);
  });
});
