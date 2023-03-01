import glob from "glob";
import path from "path";

import { rootDir } from ".";

function getTemplateFilePaths(template: string): string[] {
  const templateFilePathsGlob = path.join(rootDir, "templates", template, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) throw Error(`template not found: ${template}`);
  return templateFilePaths;
}

export default getTemplateFilePaths;
