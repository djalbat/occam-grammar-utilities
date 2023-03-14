"use strict";

import { cloneDefinition } from "../utilities/definition";

export function cloneDefinitions(definitions) {
  definitions = definitions.map((definition) => {
    definition = cloneDefinition(definition); ///

    return definition;
  });

  return definitions;
}
