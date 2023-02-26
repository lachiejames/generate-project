import { cleanTestDir, setPromptMock } from "../../testUtils";
import { defaultConfig, getConfigFromCli } from "..";

describe("getConfigFromCli", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("getConfigFromCli() does stuff", async () => {
    const results = await getConfigFromCli();
    expect(results).toEqual(defaultConfig);
  });
});
