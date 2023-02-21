import { cleanTestDirectory } from "../../testUtils/cleanTestDirectory";
import { setPromptMock } from "../../testUtils/setPromptMock";
import { DEFAULT_ANSWERS } from "../constants/defaultAnswers";
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
