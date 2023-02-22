import path from "path";

import { rootDir } from ".";

function getOutputFilePath(
  selectedTemplate: string,
  templateFilePathFromTemplate: string,
  projectDirectory: string,
): string {
  const templateFilePathFromRoot = path.join(rootDir, "templates", selectedTemplate);
  const relativeTemplateFilePath = path.relative(templateFilePathFromRoot, templateFilePathFromTemplate);
  return path.join(projectDirectory, relativeTemplateFilePath);
}

export default getOutputFilePath;
