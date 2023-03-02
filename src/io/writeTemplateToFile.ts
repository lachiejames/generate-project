import fs from "fs-extra";
import nunjucks from "nunjucks";

import { GPConfig } from "../models";

function writeTemplateToFile(template: nunjucks.Template, outputFilePath: string, config: GPConfig): void {
  const outputString = template.render(config);
  fs.outputFileSync(outputFilePath, outputString);
}

export default writeTemplateToFile;
