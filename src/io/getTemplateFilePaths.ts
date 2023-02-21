import { sync } from "glob";

import rootDir from "../constants/rootDir";

function getTemplateFilePaths(selectedTemplate: string): string[] {
  const templateFilePathsGlob = `${rootDir}/templates/${selectedTemplate}/**`;
  const templateFilePaths: string[] = sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) {
    throw Error(`selectedTemplate not found: ${selectedTemplate}`);
  }

  return templateFilePaths;
}

export default getTemplateFilePaths;
