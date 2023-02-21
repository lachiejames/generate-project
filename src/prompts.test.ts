import { cleanTestDirectory, setPromptMock } from "../testUtils/helpers";
import { DEFAULT_ANSWERS } from "./defaultAnswers";
import { getTemplateNames, showPrompts } from "./prompts";

describe("prompts", () => {
  beforeEach(() => {
    setPromptMock();
  });

  afterEach(() => {
    cleanTestDirectory();
  });

  it("getTemplateNames() returns a list of templates", () => {
    const templates: string[] = getTemplateNames();
    expect(templates.length).toBeGreaterThan(0);
  });

  it("showPrompts() does stuff", async () => {
    const results = await showPrompts();
    expect(results).toEqual(DEFAULT_ANSWERS);
  });
});
