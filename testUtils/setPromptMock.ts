import prompts from "prompts";

import { defaultConfig } from "../src";
import testDir from "./testDir";

function setPromptMock(): void {
  prompts.inject([
    defaultConfig.template,
    defaultConfig.name,
    defaultConfig.description,
    defaultConfig.author,
    testDir,
  ]);
}

export default setPromptMock;
