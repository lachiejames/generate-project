import inquirer from "inquirer";

import defaultAnswers from "../constants/defaultAnswers";
import listTemplates from "../io/listTemplates";
import Config from "../models/config";

async function showPrompts(): Promise<Config> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  return inquirer.prompt([
    {
      type: "list",
      name: "selectedTemplate",
      message: "Select a template: ",
      choices: listTemplates(),
      default: defaultAnswers.selectedTemplate,
    },
    {
      type: "input",
      name: "packageName",
      message: "Project name: ",
      default: defaultAnswers.packageName,
    },
    {
      type: "input",
      name: "packageDescription",
      message: "Project description: ",
      default: defaultAnswers.packageDescription,
    },
    {
      type: "input",
      name: "author",
      message: "Project author: ",
      default: defaultAnswers.author,
    },
  ]);
}

export default showPrompts;
