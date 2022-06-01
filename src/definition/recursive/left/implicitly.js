"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { IMPLICITLY_LEFT_RECURSIVE_TYPE } from "../../../types";

const { backwardsFind, backwardsEvery } = arrayUtilities;

export default class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      const parts = null, ///
            type = IMPLICITLY_LEFT_RECURSIVE_TYPE,
            ruleName = leftRecursiveDefinition.getRuleName(),
            definition = leftRecursiveDefinition.getDefinition(),
            recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return implicitlyLeftRecursiveDefinition;
  }
}

function findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
  const leftRecursiveDefinitions = leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions),
        leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const ruleName = leftRecursiveDefinition.getRuleName();

          if (ruleName === leftRecursiveRuleName) {
            return true;
          }
        }) || null;

  return leftRecursiveDefinition;
}

function leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions) {
  const leftRecursiveDefinitions = [];

  backwardsEvery(recursiveDefinitions, (recursiveDefinition) => {
    const recursiveDefinitionLeftRecursiveDefinition = recursiveDefinition.isLeftRecursiveDefinition();

    if (recursiveDefinitionLeftRecursiveDefinition) {
      const leftRecursiveDefinition = recursiveDefinition;  ///

      leftRecursiveDefinitions.unshift(leftRecursiveDefinition);

      return true;
    }
  });

  return leftRecursiveDefinitions;
}
