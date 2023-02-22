import fs from "fs-extra";
import path from "path";

import rootDir from "./rootDir";

function getTemplateNames(): string[] {
  const pathToTemplate = path.join(rootDir, "templates");
  return fs.readdirSync(pathToTemplate);
}

export default getTemplateNames;
