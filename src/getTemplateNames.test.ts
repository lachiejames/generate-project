import { getTemplateNames } from "./getTemplateNames";

describe("showPrompts", () => {
  it("getTemplateNames() returns a list of templates", () => {
    const templates: string[] = getTemplateNames();
    expect(templates.length).toBeGreaterThan(0);
  });
});
