import { readdirSync } from "fs-extra";
import inquirer from "inquirer";
import { DEFAULT_ANSWERS } from "./defaultAnswers";
import { ROOT_DIRECTORY } from "./fileHandler";
import Prompts from "./models/prompts";

export const getTemplateNames = (): string[] => {
  return readdirSync(`${ROOT_DIRECTORY}/templates`);
};

export const showPrompts = async (): Promise<Prompts> => {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  return inquirer.prompt<Prompts>([
    {
      type: "list",
      name: "selectedTemplate",
      message: "Select a template: ",
      choices: getTemplateNames(),
      default: DEFAULT_ANSWERS.selectedTemplate,
    },
    {
      type: "input",
      name: "packageName",
      message: "Project name: ",
      default: DEFAULT_ANSWERS.packageName,
    },
    {
      type: "input",
      name: "packageDescription",
      message: "Project description: ",
      default: DEFAULT_ANSWERS.packageDescription,
    },
    {
      type: "input",
      name: "author",
      message: "Project author: ",
      default: DEFAULT_ANSWERS.author,
    },
  ]);
};
