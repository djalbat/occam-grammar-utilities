"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { isDefinitionComplex } from "../../../utilities/definition";

const { last, first, backwardsFind, backwardsEvery } = arrayUtilities;

export default class ImplicitlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
    super(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveDefinition() {
    return this.leftRecursiveDefinition;
  }

  static fromRecursiveDefinitions(recursiveDefinitions) {
    let implicitlyLeftRecursiveDefinition = null;

    const leftRecursiveDefinition = findLeftRecursiveDefinition(recursiveDefinitions);

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

function findLeftRecursiveDefinition(recursiveDefinitions) {
  let leftRecursiveDefinition = null,
      leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);

  const leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength > 1) {
    const lastLeftRecursiveDefinition = last(leftRecursiveDefinitions),
          leftRecursiveRuleNames = lastLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          lLeftRecursiveRuleName = firstLeftRecursiveRuleName; ///

    leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
      const ruleName = leftRecursiveDefinition.getRuleName();

      if (ruleName === lLeftRecursiveRuleName) {
        return true;
      }
    }) || null;

    if (leftRecursiveDefinition !== null) {
      truncateLeftRecursiveDefinitions(leftRecursiveDefinitions);

      const ruleNames = ruleNamesFromLeftRecursiveDefinitions(leftRecursiveDefinitions),
            leftRecursiveRuleNamesIncludesRuleNames = leftRecursiveDefinitions.every((leftRecursiveDefinition, index) => {
              const ruleName = ruleNames[index],
                    leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
                    leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

              if (leftRecursiveRuleNamesIncludesRuleName) {
                return true;
              }
            });

      if (!leftRecursiveRuleNamesIncludesRuleNames) {
        leftRecursiveDefinition = null;
      }
    }
  }

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

function truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition) {
  const index = leftRecursiveDefinitions.indexOf(leftRecursiveDefinition),
        start = 0,
        deleteCount = index;  ///

  leftRecursiveDefinitions.splice(start, deleteCount);
}

function ruleNamesFromLeftRecursiveDefinitions(leftRecursiveDefinitions) {
  const ruleNames = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
          const ruleName = leftRecursiveDefinition.getRuleName();

          return ruleName;
        }),
        ruleName = ruleNames.shift();

  ruleNames.push(ruleName);

  return ruleNames;
}
