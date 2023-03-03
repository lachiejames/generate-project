import prompts from "prompts";

import { defaultGPConfig, defaultGPTemplates } from "../constants";
import { GPConfig, GPTemplateName } from "../models";

export async function getTemplateName(): Promise<GPTemplateName> {
  const promptData = await prompts({
    name: "templateName",
    type: "select",
    message: "Select a template: ",
    choices: defaultGPTemplates.map((template) => ({
      value: template.name,
      title: template.displayName,
      description: template.description,
    })),
  });

  return promptData.templateName;
}

export async function getPackageName(): Promise<string> {
  const promptData = await prompts({
    name: "projectName",
    type: "text",
    message: "Project projectName: ",
    initial: defaultGPConfig.projectName,
    validate: (projectName) => projectName.length > 0,
  });

  return promptData.projectName;
}

export async function getProjectDescription(): Promise<string> {
  const promptData = await prompts({
    name: "projectDescription",
    type: "text",
    message: "Project description: ",
    initial: defaultGPConfig.projectDescription,
    validate: (projectDescription) => projectDescription.length > 0,
  });

  return promptData.projectDescription;
}

export async function getProjectAuthor(): Promise<string> {
  const promptData = await prompts({
    name: "projectAuthor",
    type: "text",
    message: "Project author: ",
    initial: defaultGPConfig.projectAuthor,
    validate: (projectAuthor) => projectAuthor.length > 0,
  });

  return promptData.projectAuthor;
}

async function getConfigFromCli(args: Partial<GPConfig>): Promise<GPConfig> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  const gpConfig: GPConfig = JSON.parse(JSON.stringify(defaultGPConfig));

  gpConfig.templateName = args.templateName || (await getTemplateName());
  gpConfig.projectName = args.projectName || (await getPackageName());
  gpConfig.projectDescription = args.projectDescription || (await getProjectDescription());
  gpConfig.projectAuthor = args.projectAuthor || (await getProjectAuthor());
  gpConfig.projectDir = args.projectDir || process.cwd();

  return gpConfig;
}

export default getConfigFromCli;
