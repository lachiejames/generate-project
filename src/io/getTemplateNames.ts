import { readdirSync } from "fs-extra";

import { ROOT_DIRECTORY } from "../constants/rootDirectory";

export const getTemplateNames = (): string[] => {
  return readdirSync(`${ROOT_DIRECTORY}/templates`);
};
