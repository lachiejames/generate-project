import prompts from "prompts";

import { defaultGPConfig } from "../src";
import testDir from "./testDir";

function setPromptMock(): void {
  prompts.inject([
    defaultGPConfig.templateName,
    defaultGPConfig.projectName,
    defaultGPConfig.projectDescription,
    defaultGPConfig.projectAuthor,
    testDir,
  ]);
}

export default setPromptMock;
