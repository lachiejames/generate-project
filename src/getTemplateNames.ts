import { readdirSync } from "fs-extra";

import { ROOT_DIRECTORY } from "./fileHandler";

export const getTemplateNames = (): string[] => {
  return readdirSync(`${ROOT_DIRECTORY}/templates`);
};
