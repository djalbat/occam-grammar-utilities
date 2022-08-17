"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../recursiveDefinition/left";

import { isDefinitionUnary, isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { last, front, first, backwardsFind, backwardsEvery } = arrayUtilities;

export default class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions) {
    super(rule, definition, recursiveRuleNames, leftRecursiveRuleNames);

    this.leftRecursiveDefinitions = leftRecursiveDefinitions;
  }

  getLeftRecursiveDefinitions() {
    return this.leftRecursiveDefinitions;
  }

  getLeftRecursiveDefinition() {
    const lastLeftRecursiveDefinition = last(this.leftRecursiveDefinitions),
          leftRecursiveDefinition = lastLeftRecursiveDefinition;  ///

    return leftRecursiveDefinition;
  }

  getLeftRecursiveRuleName() {
    const leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

    return leftRecursiveRuleName;
  }

  isGreaterThan(indirectlyLeftRecursiveDefinition) {
    const depth = this.getDepth(),
          indirectlyLeftRecursiveDefinitionDepth = indirectlyLeftRecursiveDefinition.getDepth(),
          greaterThanIndirectlyLeftRecursiveDefinition = (depth > indirectlyLeftRecursiveDefinitionDepth);

    return greaterThanIndirectlyLeftRecursiveDefinition;
  }

  getDepth() {
    const leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length,
          depth = leftRecursiveDefinitionsLength - 1;  ///

    return depth;
  }

  isLeast() {
    const depth = this.getDepth(),
          least = (depth === 0);

    return least;
  }

  static fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const ruleName = rule.getName(),
          definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
            ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

      if (!ruleNameLeftRecursiveRuleName) {
        const leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleAndDefinition(rule, definition);

        recursiveDefinitions = [ ...recursiveDefinitions, leftRecursiveDefinition ];  ///

        const leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);

        if (leftRecursiveDefinitions !== null) {
          const definitionUnary = isDefinitionUnary(definition),
                definitionComplex = isDefinitionComplex(definition);

          if (definitionUnary) {
            const leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every((leftRecursiveDefinition) => {
              const definition = leftRecursiveDefinition.getDefinition(),
                    definitionUnary1 = isDefinitionUnary(definition);

              if (definitionUnary1) {
                return true;
              }
            });

            if (leftRecursiveDefinitionsUnary) {
              const definitionString = definition.asString();

              throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule and all of its intermediate definitions are unary and therefore it cannot be rewritten.`);
            }
          }

          if (definitionComplex) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore it cannot be rewritten.`);
          }

          leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
            const definition = leftRecursiveDefinition.getDefinition(),
                  definitionComplex = isDefinitionComplex(definition);

            if (definitionComplex) {
              const ruleName = leftRecursiveDefinition.getRuleName(),
                    definitionString = definition.asString();

              throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
            }
          });

          const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
        }
      }
    }

    return indirectlyLeftRecursiveDefinition;
  }

  static fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition, directly = false) {
    let rule,
        leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();

    if (directly) {
      rule = indirectlyLeftRecursiveDefinition.getRule();
    } else {
      const lastLeftRecursiveDefinition = last(leftRecursiveDefinitions),
            leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);

      rule = lastLeftRecursiveDefinition.getRule();

      leftRecursiveDefinitions = leftRecursiveDefinitionsFront;  ///
    }

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

    indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);  ///

    return indirectlyLeftRecursiveDefinition;
  }
}

function findLeftRecursiveDefinition(leftRecursiveDefinitions) {
  const lastLeftRecursiveDefinition = last(leftRecursiveDefinitions),
        leftRecursiveRuleNames = lastLeftRecursiveDefinition.getLeftRecursiveRuleNames(),
        firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
        lLeftRecursiveRuleName = firstLeftRecursiveRuleName,  ///
        leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const ruleName = leftRecursiveDefinition.getRuleName();

          if (ruleName === lLeftRecursiveRuleName) {
            return true;
          }
        }) || null;

  return leftRecursiveDefinition;
}

function matchLeftRecursiveRuleNames(leftRecursiveDefinitions) {
  const ruleNames = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
          const ruleName = leftRecursiveDefinition.getRuleName();

          return ruleName;
        }),
        ruleName = ruleNames.shift();

  ruleNames.push(ruleName);

  const leftRecursiveRuleNamesMatch = leftRecursiveDefinitions.every((leftRecursiveDefinition, index) => {
    const ruleName = ruleNames[index],
          leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
          leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

    if (leftRecursiveRuleNamesIncludesRuleName) {
      return true;
    }
  });

  return leftRecursiveRuleNamesMatch;
}

function findLeftRecursiveDefinitions(recursiveDefinitions) {
  let leftRecursiveDefinitions = leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions);

  if (leftRecursiveDefinitions !== null) {
    const leftRecursiveDefinition = findLeftRecursiveDefinition(leftRecursiveDefinitions);

    if (leftRecursiveDefinition !== null) {
      truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition);

      const leftRecursiveRuleNamesMatch = matchLeftRecursiveRuleNames(leftRecursiveDefinitions);

      if (leftRecursiveRuleNamesMatch) {
        leftRecursiveDefinitions.pop();
      } else {
        leftRecursiveDefinitions = null;
      }
    } else {
      leftRecursiveDefinitions = null;
    }
  }

  return leftRecursiveDefinitions;
}

function truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition) {
  const index = leftRecursiveDefinitions.indexOf(leftRecursiveDefinition),
      start = 0,
      deleteCount = index;  ///

  leftRecursiveDefinitions.splice(start, deleteCount);
}

function leftRecursiveDefinitionsFromRecursiveDefinitions(recursiveDefinitions) {
  let leftRecursiveDefinitions = [];

  backwardsEvery(recursiveDefinitions, (recursiveDefinition) => {
    const recursiveDefinitionLeftRecursiveDefinition = (recursiveDefinition instanceof LeftRecursiveDefinition);

    if (recursiveDefinitionLeftRecursiveDefinition) {
      const leftRecursiveDefinition = recursiveDefinition;  ///

      leftRecursiveDefinitions.unshift(leftRecursiveDefinition);

      return true;
    }
  });

  const leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;

  if (leftRecursiveDefinitionsLength < 2) {
    leftRecursiveDefinitions = null;
  }

  return leftRecursiveDefinitions;
}
