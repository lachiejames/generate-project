import prompts from "prompts";

import { defaultGPConfig } from "../src";
import testDir from "./testDir";

function setPromptMock(): void {
  prompts.inject([
    defaultGPConfig.templateName,
    defaultGPConfig.name,
    defaultGPConfig.description,
    defaultGPConfig.author,
    testDir,
  ]);
}

export default setPromptMock;
