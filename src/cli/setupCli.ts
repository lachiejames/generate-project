import commander from "commander";

function setupCli(): Record<string, string | undefined> {
  const program = new commander.Command("generate-project");
  program
    .option("-t, --template <string>", "Selected template")
    .option("-n, --name <string>", "Project name")
    .option("-d, --description <string>", "Project description")
    .option("-a, --author <string>", "Project author")
    .option("-p, --projectDir <string>", "Project location, defaults to $(pwd)")
    .parse(process.argv);

  return program.opts();
}

export default setupCli;
