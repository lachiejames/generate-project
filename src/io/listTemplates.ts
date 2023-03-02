import { templates } from "../constants";

function listTemplates(): string[] {
  return templates.map((template) => template.value);
}

export default listTemplates;
