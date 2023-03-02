import fs from "fs-extra";
import glob from "glob";
import nunjucks from "nunjucks";
import path from "path";

import { templates } from "../constants";
import { rootDir } from "../io";
import { Config } from "../models";

async function runScaffold(config: Config): Promise<void> {
  const fileLoader = new nunjucks.FileSystemLoader(rootDir);
  const templateEnvironment = new nunjucks.Environment(fileLoader);

  const templateFilePathsGlob = path.join(rootDir, "templates", config.template, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });
  const templateNames = templates.map((template) => template.value);
  if (templateFilePaths.length === 0) {
    throw Error(`template not found: ${config.template}.  Must be one of: ${templateNames}`);
  }

  for (const templateFilePath of templateFilePaths) {
    const template = templateEnvironment.getTemplate(templateFilePath);

    const templateFilePathFromRoot = path.join(rootDir, "templates", config.template);
    const relativeTemplateFilePath = path.relative(templateFilePathFromRoot, templateFilePath);
    const outputFilePath = path.join(config.projectDir, relativeTemplateFilePath);

    const outputString = template.render(config);
    fs.outputFileSync(outputFilePath, outputString);
  }
}

export default runScaffold;
