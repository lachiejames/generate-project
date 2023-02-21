import path from "path";

import { ROOT_DIRECTORY } from "../constants/rootDirectory";

export const getOutputFilePath = (
  selectedTemplate: string,
  templateFilePath: string,
  projectDirectory: string,
): string => {
  const relativeTemplateFilePath: string = path.relative(
    `${ROOT_DIRECTORY}/templates/${selectedTemplate}`,
    templateFilePath,
  );
  return `${projectDirectory}/${relativeTemplateFilePath}`;
};
