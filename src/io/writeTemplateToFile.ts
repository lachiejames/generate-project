import fs from "fs-extra";
import nunjucks from "nunjucks";

import { GPConfig } from "../models";

function writeTemplateToFile(nunjucksTemplate: nunjucks.Template, outputFilePath: string, gpConfig: GPConfig): void {
  const outputString = nunjucksTemplate.render(gpConfig);
  fs.outputFileSync(outputFilePath, outputString);
}

export default writeTemplateToFile;
