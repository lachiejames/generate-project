import fs from "fs-extra";

import rootDir from "./rootDir";

function getTemplateNames(): string[] {
  return fs.readdirSync(`${rootDir}/templates`);
}

export default getTemplateNames;
