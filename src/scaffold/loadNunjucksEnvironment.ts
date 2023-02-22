import nunjucks from "nunjucks";

import { rootDir } from "..";

function loadNunjucksEnvironment(): nunjucks.Environment {
  const fileLoader = new nunjucks.FileSystemLoader(rootDir);
  return new nunjucks.Environment(fileLoader);
}

export default loadNunjucksEnvironment;
