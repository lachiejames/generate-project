import glob from "glob";
import path from "path";

import { defaultGPTemplates } from "../constants";
import rootDir from "./rootDir";

function getTemplateFilePaths(templateName: string): string[] {
  const templateFilePathsGlob = path.join(rootDir, "templates", templateName, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) {
    const templateNames = defaultGPTemplates.map((template) => template.name);
    throw Error(`template not found: ${templateName}.  Must be one of: ${templateNames}`);
  }

  return templateFilePaths;
}

export default getTemplateFilePaths;
