import { readdirSync } from "fs-extra";

import rootDir from "../constants/rootDir";

function getTemplateNames(): string[] {
  return readdirSync(`${rootDir}/templates`);
}

export default getTemplateNames;
