import path from "path";

import rootDir from "./rootDir";

function getOutputFilePath(
  templateName: string,
  templateFilePathFromTemplate: string,
  projectDirectory: string,
): string {
  const templateFilePathFromRoot = path.join(rootDir, "templates", templateName);
  const relativeTemplateFilePath = path.relative(templateFilePathFromRoot, templateFilePathFromTemplate);
  return path.join(projectDirectory, relativeTemplateFilePath);
}

export default getOutputFilePath;
