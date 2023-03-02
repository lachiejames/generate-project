import prompts from "prompts";

import { defaultGPConfig } from "../src";
import testDir from "./testDir";

function setPromptMock(): void {
  prompts.inject([
    defaultGPConfig.template,
    defaultGPConfig.name,
    defaultGPConfig.description,
    defaultGPConfig.author,
    testDir,
  ]);
}

export default setPromptMock;
