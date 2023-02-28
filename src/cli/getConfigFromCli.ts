import glob from "glob";
import prompts from "prompts";

import { Config, defaultConfig, listTemplates } from "..";

async function getProjectDir(): Promise<string> {
  const promptData = await prompts({
    name: "projectDir",
    type: "text",
    message: "Project directory: ",
    initial: defaultConfig.projectDir,
    validate: (projectDir: string) => {
      const projectDirFiles = glob.sync(`${projectDir}/**`, { dot: true, nodir: true });
      if (projectDirFiles.length > 0) return `Directory already exists and is not empty: '${projectDir}'`;
      return true;
    },
  });

  return promptData.projectDir;
}

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

async function getConfigFromCli(args: { [key: string]: any }): Promise<Config> {
  console.log(args)
  const config: Config = JSON.parse(JSON.stringify(defaultConfig));

  config.projectDir = await getProjectDir();
  config.selectedTemplate = await getSelectedTemplate();
  config.packageName = await getPackageName();
  config.packageDescription = await getProjectDescription();
  config.author = await getProjectAuthor();

  return config;
}

export default getConfigFromCli;
