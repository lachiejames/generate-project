import { readdirSync } from "fs-extra";
import prompts from "prompts";
import { ROOT_DIRECTORY } from "./fileHandler";
import Config from "./models/prompts";

export const getTemplateNames = (): string[] => {
  return readdirSync(`${ROOT_DIRECTORY}/templates`);
};

const getEmptyConfig = (): Config => {
  return {
    selectedTemplate: "",
    packageName: "",
    packageDescription: "",
    author: "",
  };
};

const getSelectedTemplate = async (): Promise<string> => {
  const promptData = await prompts({
    name: "selectedTemplate",
    type: "select",
    message: "Project name: ",
    choices: getTemplateNames().map((templateName) => ({
      title: templateName,
      value: templateName,
    })),
  });

  return promptData.selectedTemplate;
};

const getPackageName = async (): Promise<string> => {
  const promptData = await prompts({
    name: "packageName",
    type: "text",
    message: "Project name: ",
  });

  return promptData.packageName;
};

const getPackageDescription = async (): Promise<string> => {
  const promptData = await prompts({
    name: "packageDescription",
    type: "text",
    message: "Project description: ",
  });

  return promptData.packageDescription;
};

const getAuthor = async (): Promise<string> => {
  const promptData = await prompts({
    name: "author",
    type: "text",
    message: "Project author: ",
  });

  return promptData.author;
};

export const showPrompts = async (): Promise<Config> => {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  const config: Config = getEmptyConfig();

  // prompts will halt execution between each of these
  config.selectedTemplate = await getSelectedTemplate();
  config.packageName = await getPackageName();
  config.packageDescription = await getPackageDescription();
  config.author = await getAuthor();

  return config;
};
