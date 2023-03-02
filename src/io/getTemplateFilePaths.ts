import glob from "glob";
import path from "path";

import listTemplates from "./listTemplates";
import rootDir from "./rootDir";

function getTemplateFilePaths(templateName: string): string[] {
  const templateFilePathsGlob = path.join(rootDir, "templates", templateName, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0)
    throw Error(`template not found: ${templateName}.  Must be one of: ${listTemplates()}`);
  return templateFilePaths;
}

export default getTemplateFilePaths;
