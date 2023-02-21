import { Environment, FileSystemLoader } from "nunjucks";

import rootDir from "../constants/rootDir";

function loadNunjucksEnvironment(): Environment {
  const fileLoader = new FileSystemLoader(rootDir);
  return new Environment(fileLoader);
}

export default loadNunjucksEnvironment;
