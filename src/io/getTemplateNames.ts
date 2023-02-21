import fs from "fs-extra";

import rootDir from "../constants/rootDir";

function getTemplateNames(): string[] {
  return fs.readdirSync(`${rootDir}/templates`);
}

export default getTemplateNames;
