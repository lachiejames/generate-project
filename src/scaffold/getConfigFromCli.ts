import inquirer from "inquirer";

import { Config, defaultConfig, listTemplates } from "..";

async function getConfigFromCli(): Promise<Config> {
  console.clear();
  console.log("👷‍♂️ Oi Oi!  Building a new project are we?");

  return inquirer.prompt([
    {
      type: "list",
      name: "selectedTemplate",
      message: "Select a template: ",
      choices: listTemplates(),
      default: defaultConfig.selectedTemplate,
    },
    {
      type: "input",
      name: "packageName",
      message: "Project name: ",
      default: defaultConfig.packageName,
    },
    {
      type: "input",
      name: "packageDescription",
      message: "Project description: ",
      default: defaultConfig.packageDescription,
    },
    {
      type: "input",
      name: "author",
      message: "Project author: ",
      default: defaultConfig.author,
    },
  ]);
}

export default getConfigFromCli;
