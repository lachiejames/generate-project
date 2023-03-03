import prompts from "prompts";

import { defaultGPConfig } from "../../constants";

async function promptProjectDescription(): Promise<string> {
  const promptData = await prompts({
    name: "projectDescription",
    type: "text",
    message: "Project description: ",
    initial: defaultGPConfig.projectDescription,
    validate: (projectDescription) => projectDescription.length > 0,
  });

  return promptData.projectDescription;
}

export default promptProjectDescription;
