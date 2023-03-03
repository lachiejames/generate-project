import glob from "glob";
import path from "path";

import { GPTemplateName } from "../models";
import rootDir from "./rootDir";

function getTemplateFilePaths(templateName: string): string[] {
  const templateFilePathsGlob = path.join(rootDir, "templates", templateName, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) {
    const templateNames = Object.values(GPTemplateName);
    throw Error(`template not found: ${templateName}.  Must be one of: ${templateNames}`);
  }

  return templateFilePaths;
}

export default getTemplateFilePaths;
