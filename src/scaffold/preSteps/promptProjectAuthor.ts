import prompts from "prompts";

import { defaultGPConfig } from "../../constants";

async function promptProjectAuthor(): Promise<string> {
  const promptData = await prompts({
    name: "projectAuthor",
    type: "text",
    message: "Project author: ",
    initial: defaultGPConfig.projectAuthor,
    validate: (projectAuthor) => projectAuthor.length > 0,
  });

  return promptData.projectAuthor;
}

export default promptProjectAuthor;
