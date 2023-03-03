import commander from "commander";

import { GPConfig, GPTemplateName } from "../models";

function setupCli(): Partial<GPConfig> {
  const program = new commander.Command("generate-project");
  const templateNames = Object.values(GPTemplateName);

  program
    .addArgument(new commander.Argument("template", "Selected template").choices(templateNames).argOptional())
    .addOption(new commander.Option("-n, --projectName <string>", "Project name"))
    .addOption(new commander.Option("-d, --projectDescription <string>", "Project description"))
    .addOption(new commander.Option("-a, --projectAuthor <string>", "Project author"))
    .addOption(new commander.Option("-p, --projectDir <string>", "Project location, defaults to $(pwd)"));

  program.parse(process.argv);

  return program.opts();
}

console.log(setupCli());

export default setupCli;
