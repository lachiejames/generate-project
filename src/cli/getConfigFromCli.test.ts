import { cleanTestDir, setPromptMock } from "../../testUtils";
import { defaultConfig, getConfigFromCli } from "..";

describe("getConfigFromCli", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("when CLI args provided, then returns config with those values", async () => {
    const cliArgs = {
      selectedTemplate: "a",
      packageName: "b",
      packageDescription: "c",
      author: "d",
    };
    const results = await getConfigFromCli(cliArgs);
    expect(results).toEqual(cliArgs);
  });

  it("when no CLI args provided, then returns config with default values", async () => {
    const emptyCliArgs = {};
    const results = await getConfigFromCli(emptyCliArgs);
    expect(results).toEqual(defaultConfig);
  });
});
