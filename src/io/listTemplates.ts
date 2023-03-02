import { defaultGPTemplates } from "../constants";

function listTemplates(): string[] {
  return defaultGPTemplates.map((template) => template.value);
}

export default listTemplates;
