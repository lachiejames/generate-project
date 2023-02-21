import { cleanTestDirectory, setPromptMock } from "../testUtils/helpers";
import { DEFAULT_ANSWERS } from "./constants/defaultAnswers";
import { showPrompts } from "./showPrompts";

describe("showPrompts", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  it("showPrompts() does stuff", async () => {
    const results = await showPrompts();
    expect(results).toEqual(DEFAULT_ANSWERS);
  });
});
