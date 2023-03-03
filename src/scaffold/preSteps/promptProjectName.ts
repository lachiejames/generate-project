import prompts from "prompts";

import { defaultGPConfig } from "../../constants";

async function promptProjectName(): Promise<string> {
  const promptData = await prompts({
    name: "projectName",
    type: "text",
    message: "Project name: ",
    initial: defaultGPConfig.projectName,
    validate: (projectName) => projectName.length > 0,
  });

  return promptData.projectName;
}

export default promptProjectName;
