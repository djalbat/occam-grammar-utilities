"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../recursiveDefinition/left";

import { ruleNamePartFromRuleName } from "../../utilities/part";
import { cloneParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../utilities/parts";
import { isDefinitionUnary, isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { ZeroOrMorePartsPart } = Parts,
      { head, tail, last, front, first, backwardsFind, backwardsEvery } = arrayUtilities;

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
    const height = this.getHeight(),
          indirectlyLeftRecursiveDefinitionHeight = indirectlyLeftRecursiveDefinition.getHeight(),
          greaterThanIndirectlyLeftRecursiveDefinition = (height > indirectlyLeftRecursiveDefinitionHeight);

    return greaterThanIndirectlyLeftRecursiveDefinition;
  }

  getHeight() {
    const leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length,
          height = leftRecursiveDefinitionsLength - 1;  ///

    return height;
  }

  isLowest() {
    const height = this.getHeight(),
          lowest = (height === 0);

    return lowest;
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
        const leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

        recursiveDefinitions = [ ...recursiveDefinitions, leftRecursiveDefinition ];  ///

        const leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);

        if (leftRecursiveDefinitions !== null) {
          const definitionUnary = isDefinitionUnary(definition),
                definitionComplex = isDefinitionComplex(definition);

          if (definitionUnary) {
            const leftRecursiveDefinitionsUnary = leftRecursiveDefinitions.every((leftRecursiveDefinition) => {
              const leftRecursiveDefinitionUnary = isDefinitionUnary(leftRecursiveDefinition);

              if (leftRecursiveDefinitionUnary) {
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
            const leftRecursiveDefinitionComplex = isDefinitionComplex(leftRecursiveDefinition);

            if (leftRecursiveDefinitionComplex) {
              const ruleName = leftRecursiveDefinition.getRuleName(),
                    definition = leftRecursiveDefinition, ///
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

  // static fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions) {
  //   const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
  //         indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
  //
  //   return indirectlyLeftRecursiveDefinition;
  // }

  // static fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, directlyRepeatedRuleName) {
  //   let parts;
  //
  //   const directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
  //         zeroOrMoreDirectlyRepeatedRuleNamePartsPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);  ///
  //
  //
  //   parts = indirectlyLeftRecursiveDefinition.getParts();
  //
  //   parts = [ ///
  //     ...parts,
  //     zeroOrMoreDirectlyRepeatedRuleNamePartsPart
  //   ];
  //
  //   parts = cloneParts(parts);  ///
  //
  //   const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
  //         recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
  //         leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
  //
  //   indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
  //
  //   return indirectlyLeftRecursiveDefinition;
  // }

  // static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndIndirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, indirectlyRepeatedRuleName) {
  //   const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
  //         leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
  //         indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
  //         indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);
  //
  //   const indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);
  //
  //   let parts = [
  //     ...indirectlyLeftRecursiveDefinitionPartsHead,
  //     indirectlyRepeatedRuleNamePart,
  //     ...leftRecursiveDefinitionPartsTail
  //   ];
  //
  //   parts = cloneParts(parts);  ///
  //
  //   const ruleName = leftRecursiveDefinition.getRuleName(),
  //         recursiveRuleNames = recursiveRuleNamesFromParts(parts),
  //         leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);
  //
  //   let leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();
  //
  //   const leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);
  //
  //   leftRecursiveDefinitions = leftRecursiveDefinitionsFront; ///
  //
  //   indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///
  //
  //   return indirectlyLeftRecursiveDefinition;
  // }
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
