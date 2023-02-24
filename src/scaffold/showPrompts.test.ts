import { cleanTestDir, setPromptMock } from "../../testUtils";
import { defaultConfig, showPrompts } from "..";

describe("showPrompts", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("showPrompts() does stuff", async () => {
    const results = await showPrompts();
    expect(results).toEqual(defaultConfig);
  });
});
