import inquirer from "inquirer";

import DEFAULT_ANSWERS from "../constants/defaultAnswers";
import getTemplateNames from "../io/getTemplateNames";
import Config from "../models/config";

async function showPrompts(): Promise<Config> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  return inquirer.prompt([
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
}

export default showPrompts;
