import prompts from "prompts";

import { defaultGPTemplates } from "../../constants";
import { GPTemplateName } from "../../models";

async function promptTemplateName(): Promise<GPTemplateName> {
  const promptData = await prompts({
    name: "templateName",
    type: "select",
    message: "Select a template: ",
    choices: Object.entries(defaultGPTemplates).map(([templateName, template]) => ({
      value: templateName,
      title: template.displayName,
      description: template.description,
    })),
  });

  return promptData.templateName;
}

export default promptTemplateName;
