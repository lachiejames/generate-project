import { cleanTestDirectory, setPromptMock } from "../testUtils/helpers";
import { MOCK_ANSWERS } from "../testUtils/mockAnswers";
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
    expect(results).toEqual(MOCK_ANSWERS);
  });
});
