import fs from "fs-extra";
import nunjucks from "nunjucks";

import { GPConfig } from "../models";

function writeTemplateToFile(template: nunjucks.Template, outputFilePath: string, gpConfig: GPConfig): void {
  const outputString = template.render(gpConfig);
  fs.outputFileSync(outputFilePath, outputString);
}

export default writeTemplateToFile;
