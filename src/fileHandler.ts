import path from "path";
import { outputFileSync } from "fs-extra";
import { sync } from "glob";
import { Environment, FileSystemLoader, Template } from "nunjucks";
import Config from "./models/prompts";

export const ROOT_DIRECTORY = path.normalize(path.join(__dirname, ".."));

export const loadNunjucksEnvironment = (): Environment => {
  const fileLoader = new FileSystemLoader(ROOT_DIRECTORY);
  return new Environment(fileLoader);
};

export const getTemplateFilePaths = (selectedTemplate: string): string[] => {
  const templateFilePathsGlob = `${ROOT_DIRECTORY}/templates/${selectedTemplate}/**`;
  const templateFilePaths: string[] = sync(templateFilePathsGlob, { dot: true, nodir: true });

  if (templateFilePaths.length === 0) {
    throw Error(`selectedTemplate not found: ${selectedTemplate}`);
  }

  return templateFilePaths;
};

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

export const writeTemplateToFile = (template: Template, outputFilePath: string, answers: Config): void => {
  const outputString: string = template.render(answers);

  outputFileSync(outputFilePath, outputString);
};
