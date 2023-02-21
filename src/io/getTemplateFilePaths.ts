import { sync } from "glob";

import { ROOT_DIRECTORY } from "../constants/rootDirectory";

export const getTemplateFilePaths = (selectedTemplate: string): string[] => {
  const templateFilePathsGlob = `${ROOT_DIRECTORY}/templates/${selectedTemplate}/**`;
  const templateFilePaths: string[] = sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) {
    throw Error(`selectedTemplate not found: ${selectedTemplate}`);
  }

  return templateFilePaths;
};
