import { Environment, FileSystemLoader } from "nunjucks";
import { ROOT_DIRECTORY } from "./fileHandler";

export const loadNunjucksEnvironment = (): Environment => {
  const fileLoader = new FileSystemLoader(ROOT_DIRECTORY);
  return new Environment(fileLoader);
};
