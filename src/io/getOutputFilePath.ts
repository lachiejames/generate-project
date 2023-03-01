import path from "path";

import rootDir from "./rootDir";

function getOutputFilePath(template: string, templateFilePathFromTemplate: string, projectDirectory: string): string {
  const templateFilePathFromRoot = path.join(rootDir, "templates", template);
  const relativeTemplateFilePath = path.relative(templateFilePathFromRoot, templateFilePathFromTemplate);
  return path.join(projectDirectory, relativeTemplateFilePath);
}

export default getOutputFilePath;
