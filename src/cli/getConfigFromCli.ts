import prompts from "prompts";

import { defaultConfig, templates } from "../constants";
import { GPConfig } from "../models";

async function getSelectedTemplate(): Promise<string> {
  const promptData = await prompts({
    name: "template",
    type: "select",
    message: "Select a template: ",
    choices: templates.map((template) => ({
      title: template.name,
      value: template.value,
      description: template.description,
    })),
  });

  return promptData.template;
}

async function getPackageName(): Promise<string> {
  const promptData = await prompts({
    name: "name",
    type: "text",
    message: "Project name: ",
    initial: defaultConfig.name,
    validate: (name) => name.length > 0,
  });

  return promptData.name;
}

async function getProjectDescription(): Promise<string> {
  const promptData = await prompts({
    name: "description",
    type: "text",
    message: "Project description: ",
    initial: defaultConfig.description,
    validate: (description) => description.length > 0,
  });

  return promptData.description;
}

async function getProjectAuthor(): Promise<string> {
  const promptData = await prompts({
    name: "author",
    type: "text",
    message: "Project author: ",
    initial: defaultConfig.author,
    validate: (author) => author.length > 0,
  });

  return promptData.author;
}

async function getConfigFromCli(args: Record<string, string | undefined>): Promise<GPConfig> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  const config: GPConfig = JSON.parse(JSON.stringify(defaultConfig));

  config.template = args.template || (await getSelectedTemplate());
  config.name = args.name || (await getPackageName());
  config.description = args.description || (await getProjectDescription());
  config.author = args.author || (await getProjectAuthor());
  config.projectDir = args.projectDir || process.cwd();

  return config;
}

export default getConfigFromCli;
