import prompts from "prompts";

import { defaultGPConfig, defaultGPTemplates } from "../constants";
import { GPConfig } from "../models";

async function getSelectedTemplate(): Promise<string> {
  const promptData = await prompts({
    name: "templateName",
    type: "select",
    message: "Select a template: ",
    choices: defaultGPTemplates.map((template) => ({
      title: template.name,
      value: template.value,
      description: template.description,
    })),
  });

  return promptData.templateName;
}

async function getPackageName(): Promise<string> {
  const promptData = await prompts({
    name: "name",
    type: "text",
    message: "Project name: ",
    initial: defaultGPConfig.name,
    validate: (name) => name.length > 0,
  });

  return promptData.name;
}

async function getProjectDescription(): Promise<string> {
  const promptData = await prompts({
    name: "description",
    type: "text",
    message: "Project description: ",
    initial: defaultGPConfig.description,
    validate: (description) => description.length > 0,
  });

  return promptData.description;
}

async function getProjectAuthor(): Promise<string> {
  const promptData = await prompts({
    name: "author",
    type: "text",
    message: "Project author: ",
    initial: defaultGPConfig.author,
    validate: (author) => author.length > 0,
  });

  return promptData.author;
}

async function getConfigFromCli(args: Record<string, string | undefined>): Promise<GPConfig> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  const gpConfig: GPConfig = JSON.parse(JSON.stringify(defaultGPConfig));

  gpConfig.templateName = args.templateName || (await getSelectedTemplate());
  gpConfig.name = args.name || (await getPackageName());
  gpConfig.description = args.description || (await getProjectDescription());
  gpConfig.author = args.author || (await getProjectAuthor());
  gpConfig.projectDir = args.projectDir || process.cwd();

  return gpConfig;
}

export default getConfigFromCli;
