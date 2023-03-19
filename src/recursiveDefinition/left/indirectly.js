"use strict";

import LeftRecursiveDefinition from "../../recursiveDefinition/left";

import { last, front, first, backwardsFind, backwardsEvery } from "../../utilities/array";
import { isDefinitionComplex,
         isDefinitionLeftRecursive,
         isDefinitionEffectivelyUnary,
         recursiveRuleNamesFromDefinition,
         leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

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

  getDefinitions() {
    const definitions = this.leftRecursiveDefinitions.map((leftRecursiveDefinitions) => {
      const definition = leftRecursiveDefinitions.getDefinition();

      return definition;
    });

    definitions.push(this.definition);

    return definitions;
  }

  getDepth() {
    const leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length,
          depth = leftRecursiveDefinitionsLength;  ///

    return depth;
  }

  isLeast() {
    const depth = this.getDepth(),
          least = (depth === 1);

    return least;
  }

  isGreaterThan(indirectlyLeftRecursiveDefinition) {
    const depth = this.getDepth(),
          indirectlyLeftRecursiveDefinitionDepth = indirectlyLeftRecursiveDefinition.getDepth(),
          greaterThanIndirectlyLeftRecursiveDefinition = (depth > indirectlyLeftRecursiveDefinitionDepth);

    return greaterThanIndirectlyLeftRecursiveDefinition;
  }

  isEquivalentTo(indirectlyLeftRecursiveDefinition) {
    const definitions = this.getDefinitions(),
          indirectlyLeftRecursiveDefinitionDefinitions = indirectlyLeftRecursiveDefinition.getDefinitions(),
          equivalentTo = compareDefinitions(definitions, indirectlyLeftRecursiveDefinitionDefinitions); ///

    return equivalentTo;
  }

  static fromRuleDefinitionAndRecursiveDefinitions(rule, definition, recursiveDefinitions, context) {
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
          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore it cannot be rewritten.`);
          }

          const definitionEffectivelyUnary = isDefinitionEffectivelyUnary(definition, context);

          if (definitionEffectivelyUnary) {
            const leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every((leftRecursiveDefinition) => {
              const definition = leftRecursiveDefinition.getDefinition(),
                    definitionEffectivelyUnary = isDefinitionEffectivelyUnary(definition, context);

              if (definitionEffectivelyUnary) {
                return true;
              }
            });

            if (leftRecursiveDefinitionsUnary) {
              const definitionString = definition.asString();

              throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule and all of its intermediate definitions are effectively unary and therefore it cannot be rewritten.`);
            }
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

  static fromDefinitionAndLeftRecursiveDefinitions(definition, leftRecursiveDefinitions) {
    const lastLeftRecursiveDefinition = last(leftRecursiveDefinitions),
          leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);

    const rule = lastLeftRecursiveDefinition.getRule();

    leftRecursiveDefinitions = leftRecursiveDefinitionsFront;  ///

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);  ///

    return indirectlyLeftRecursiveDefinition;
  }

  static fromRuleDefinitionAndLeftRecursiveDefinitions(rule, definition, leftRecursiveDefinitions) {
    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(rule, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);  ///

    return indirectlyLeftRecursiveDefinition;
  }
}

function compareDefinitions(definitionsA, definitionsB) {
  let equalTo = false;

  const definitionsALength = definitionsA.length,
        definitionsBLength = definitionsB.length;

  if (definitionsALength === definitionsBLength) {
    const firstDefinitionB = first(definitionsB),
          offset = definitionsA.indexOf(firstDefinitionB);

    if (offset > -1) {
      const length = definitionsALength;  ///

      equalTo = definitionsA.every((definitionA, index) => {
        index = (length + index - offset) % length;

        const definitionB = definitionsB[index];

        if (definitionA === definitionB) {
          return true;
        }
      });
    }
  }

  return equalTo;
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
