import prompts from "prompts";

import { Config, defaultConfig, listTemplates } from "..";

async function getSelectedTemplate(): Promise<string> {
  const promptData = await prompts({
    name: "selectedTemplate",
    type: "list",
    message: "Select a template: ",
    choices: listTemplates().map((template) => ({ title: template, value: template })),
    initial: defaultConfig.selectedTemplate,
  });

  return promptData.selectedTemplate;
}

async function getPackageName(): Promise<string> {
  const promptData = await prompts({
    name: "packageName",
    type: "text",
    message: "Project name: ",
    initial: defaultConfig.packageName,
    validate: (packageName) => packageName.length > 0,
  });

  return promptData.packageName;
}

async function getProjectDescription(): Promise<string> {
  const promptData = await prompts({
    name: "packageDescription",
    type: "text",
    message: "Project description: ",
    initial: defaultConfig.packageDescription,
    validate: (packageDescription) => packageDescription.length > 0,
  });

  return promptData.packageDescription;
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

async function getConfigFromCli(args: Record<string, string>): Promise<Config> {
  console.log(args);
  const config: Config = JSON.parse(JSON.stringify(defaultConfig));

  config.selectedTemplate = args.selectedTemplate ?? (await getSelectedTemplate());
  config.packageName = args.packageName ?? (await getPackageName());
  config.packageDescription = args.packageDescription ?? (await getProjectDescription());
  config.author = args.author ?? (await getProjectAuthor());

  return config;
}

export default getConfigFromCli;
