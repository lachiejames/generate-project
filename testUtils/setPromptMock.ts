import prompts from "prompts";

import testConfig from "./testConfig";

function setPromptMock(): void {
  prompts.inject([
    testConfig.projectDir,
    testConfig.selectedTemplate,
    testConfig.packageName,
    testConfig.packageDescription,
    testConfig.author,
  ]);
}

export default setPromptMock;
