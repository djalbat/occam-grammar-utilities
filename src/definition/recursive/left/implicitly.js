"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { isInstanceOf } from "../../../utilities/class";
import { IMPLICITLY_LEFT_RECURSIVE_TYPE } from "../../../types";

const { backwardsFind, backwardsEvery } = arrayUtilities;

export default class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  static fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      const type = IMPLICITLY_LEFT_RECURSIVE_TYPE,
            parts = leftRecursiveDefinition.getParts(),
            ruleName = leftRecursiveDefinition.getRuleName(),
            recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, type, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
    }

    return implicitlyLeftRecursiveDefinition;
  }
}

function findLeftRecursiveDefinition(leftRecursiveRuleName, recursiveDefinitions) {
  const leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions),
        leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const ruleName = leftRecursiveDefinition.getRuleName();

          if (ruleName === leftRecursiveRuleName) {
            return true;
          }
        }) || null;

  return leftRecursiveDefinition;
}

function findLeftRecursiveDefinitions(recursiveDefinitions) {
  const leftRecursiveDefinitions = [];

  backwardsEvery(recursiveDefinitions, (recursiveDefinition) => {
    const recursiveDefinitionLeftRecursiveDefinition = isInstanceOf(recursiveDefinition, LeftRecursiveDefinition);

    if (recursiveDefinitionLeftRecursiveDefinition) {
      const leftRecursiveDefinition = recursiveDefinition;  ///

      leftRecursiveDefinitions.unshift(leftRecursiveDefinition);

      return true;
    }
  });

  return leftRecursiveDefinitions;
}
