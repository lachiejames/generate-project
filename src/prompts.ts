import { readdirSync } from "fs-extra";
import { prompt } from "inquirer";

import { ROOT_DIRECTORY } from "./fileHandler";
import ScaffoldPrompts from "./models/scaffoldPrompts";

export const findTemplates = (): string[] => {
  return readdirSync(`${ROOT_DIRECTORY}/templates`);
};

export const showPrompts = async (): Promise<ScaffoldPrompts> => {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  return prompt<ScaffoldPrompts>([
    {
      type: "list",
      name: "selectedTemplate",
      message: "Select a template: ",
      choices: findTemplates(),
    },
    {
      type: "input",
      name: "packageName",
      message: "Project name: ",
    },
    {
      type: "input",
      name: "packageDescription",
      message: "Project description: ",
    },
    {
      type: "input",
      name: "author",
      message: "Project author: ",
    },
  ]);
};
