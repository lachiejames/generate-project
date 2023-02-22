import path from "path";

import rootDir from "./rootDir";

function getOutputFilePath(selectedTemplate: string, templateFilePath: string, projectDirectory: string): string {
  const relativeTemplateFilePath = path.relative(`${rootDir}/templates/${selectedTemplate}`, templateFilePath);
  return `${projectDirectory}/${relativeTemplateFilePath}`;
}

export default getOutputFilePath;
