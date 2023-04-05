"use strict";

import { isDefinitionLeftRecursive } from "../utilities/definition";

export function findLeftRecursiveDefinitions(rule, callback) {
  const definitions = rule.getDefinitions(),
        leftRecursiveDefinitions = definitions.filter((definition) => {  ///
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

          if (definitionLeftRecursive) {
            const leftRecursiveDefinition = definition,
                  found = callback(leftRecursiveDefinition);

            if (found) {
              return true;
            }
          }
        });

  return leftRecursiveDefinitions;
}
