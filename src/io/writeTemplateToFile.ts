import fs from "fs-extra";
import nunjucks from "nunjucks";

import { Config } from "..";

function writeTemplateToFile(template: nunjucks.Template, outputFilePath: string, answers: Config): void {
  const outputString = template.render(answers);
  fs.outputFileSync(outputFilePath, outputString);
}

export default writeTemplateToFile;
