import listTemplates from "./listTemplates";

describe("getConfigFromCli", () => {
  it("listTemplates() returns a list of templates", () => {
    const templates = listTemplates();
    expect(templates.length).toBeGreaterThan(0);
  });
});
