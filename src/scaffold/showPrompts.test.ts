import cleanTestDir from "../../testUtils/cleanTestDir";
import setPromptMock from "../../testUtils/setPromptMock";
import defaultAnswers from "../constants/defaultAnswers";
import showPrompts from "./showPrompts";

describe("showPrompts", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDir();
  });

  it("showPrompts() does stuff", async () => {
    const results = await showPrompts();
    expect(results).toEqual(defaultAnswers);
  });
});
