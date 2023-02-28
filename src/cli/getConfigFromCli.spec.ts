import { cleanTestDir, setPromptMock, testConfig } from "../../testUtils";
import { getConfigFromCli } from "..";

describe("getConfigFromCli", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("getConfigFromCli() does stuff", async () => {
    const results = await getConfigFromCli();
    expect(results).toEqual(testConfig);
  });
});
