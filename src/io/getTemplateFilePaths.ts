import glob from "glob";
import path from "path";

import { rootDir } from ".";

function getTemplateFilePaths(selectedTemplate: string): string[] {
  const templateFilePathsGlob = path.join(rootDir, "templates", selectedTemplate, "**");
  const templateFilePaths = glob.sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) throw Error(`selectedTemplate not found: ${selectedTemplate}`);
  return templateFilePaths;
}

export default getTemplateFilePaths;
