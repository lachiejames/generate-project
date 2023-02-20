import { findTemplates } from "./prompts";

describe("prompts", () => {
  it("findTemplates() returns a list of templates", () => {
    const templates: string[] = findTemplates();
    expect(templates.length).toBeGreaterThan(0);
  });
});
