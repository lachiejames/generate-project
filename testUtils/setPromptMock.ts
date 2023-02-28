import prompts from "prompts";

import { defaultConfig } from "../src";

function setPromptMock(): void {
  prompts.inject([
    defaultConfig.selectedTemplate,
    defaultConfig.packageName,
    defaultConfig.packageDescription,
    defaultConfig.author,
  ]);
}

export default setPromptMock;
