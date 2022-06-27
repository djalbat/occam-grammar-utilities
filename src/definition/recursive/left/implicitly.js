"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { isDefinitionComplex } from "../../../utilities/definition";

const { backwardsFind, backwardsEvery } = arrayUtilities;

export default class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
    super(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveDefinition() {
    return this.leftRecursiveDefinition;
  }

  static fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      const leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof ImplicitlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition) {
        implicitlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///
      } else {
        const definition = leftRecursiveDefinition, ///
              definitionComplex = isDefinitionComplex(definition);

        if (definitionComplex) {
          const definitionString = definition.asString();

          throw new Error(`The '${definitionString}' implicitly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
        }

        const parts = leftRecursiveDefinition.getParts(),
              ruleName = leftRecursiveDefinition.getRuleName(),
              recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
              leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
      }
    }

    return implicitlyLeftRecursiveDefinition;
  }
}

function findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
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
    const recursiveDefinitionLeftRecursiveDefinition = (recursiveDefinition instanceof LeftRecursiveDefinition);

    if (recursiveDefinitionLeftRecursiveDefinition) {
      const leftRecursiveDefinition = recursiveDefinition;  ///

      leftRecursiveDefinitions.unshift(leftRecursiveDefinition);

      return true;
    }
  });

  return leftRecursiveDefinitions;
}
