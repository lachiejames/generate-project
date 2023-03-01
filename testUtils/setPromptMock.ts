import prompts from "prompts";

import { defaultConfig } from "../src";
import testDir from "./testDir";

function setPromptMock(): void {
  prompts.inject([
    defaultConfig.selectedTemplate,
    defaultConfig.packageName,
    defaultConfig.packageDescription,
    defaultConfig.author,
    testDir,
  ]);
}

export default setPromptMock;
