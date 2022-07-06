"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { ruleNamePartFromRuleName } from "../../../utilities/part";
import { mergeParts, recursiveRuleNamesFromParts, leftRecursiveRuleNamesFromParts } from "../../../utilities/parts";
import { isDefinitionComplex, isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { head, tail, last, front, first, backwardsFind, backwardsEvery } = arrayUtilities;

export default class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions) {
    super(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    this.leftRecursiveDefinitions = leftRecursiveDefinitions;
  }

  getLeftRecursiveDefinitions() {
    return this.leftRecursiveDefinitions;
  }

  getLastLeftRecursiveDefinition() {
    const lastLeftRecursiveDefinition = last(this.leftRecursiveDefinitions);

    return lastLeftRecursiveDefinition;
  }

  getLeftRecursiveRuleName() {
    const leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName; ///

    return leftRecursiveRuleName;
  }

  isGreaterThan(indirectlyLeftRecursiveDefinition) {
    const length = this.getLength(),
          indirectlyLeftRecursiveDefinitionLength = indirectlyLeftRecursiveDefinition.getLength(),
          greaterThanIndirectlyLeftRecursiveDefinition = (length > indirectlyLeftRecursiveDefinitionLength);

    return greaterThanIndirectlyLeftRecursiveDefinition;
  }

  getLength() {
    const leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length,
          length = leftRecursiveDefinitionsLength;  ///

    return length;
  }

  isLast() {
    const leftRecursiveDefinitionsLength = this.leftRecursiveDefinitions.length,
          last = (leftRecursiveDefinitionsLength === 1);

    return last;
  }

  static fromPartsRuleNameAndLeftRecursiveDefinitions(parts, ruleName, leftRecursiveDefinitions) {
    const recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts),
          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);

    return indirectlyLeftRecursiveDefinition;
  }

  static fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

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
          const definitionComplex = isDefinitionComplex(definition);

          if (definitionComplex) {
            const definitionString = definition.asString();

            throw new Error(`The '${definitionString}' indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
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

          const parts = definition.getParts(),
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions);
        }
      }
    }

    return indirectlyLeftRecursiveDefinition;
  }

  static fromLeftRecursiveDefinitionsAndRepeatedRuleName(leftRecursiveDefinitionA, leftRecursiveDefinitionB, repeatedRuleName) {
    debugger
  }

  static fromIndirectlyLeftRecursiveDefinitionLeftRecursiveDefinitionAndRepeatedRuleName(indirectlyLeftRecursiveDefinition, leftRecursiveDefinition, repeatedRuleName) {
    const leftRecursiveDefinitionParts = leftRecursiveDefinition.getParts(),
          leftRecursiveDefinitionPartsTail = tail(leftRecursiveDefinitionParts),
          indirectlyLeftRecursiveDefinitionParts = indirectlyLeftRecursiveDefinition.getParts(),
          indirectlyLeftRecursiveDefinitionPartsHead = head(indirectlyLeftRecursiveDefinitionParts);

    if (repeatedRuleName !== null) {
      const repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName);

      indirectlyLeftRecursiveDefinitionPartsHead.push(repeatedRuleNamePart);
    }

    const parts = mergeParts(indirectlyLeftRecursiveDefinitionPartsHead, leftRecursiveDefinitionPartsTail),
          ruleName = leftRecursiveDefinition.getRuleName(),
          recursiveRuleNames = recursiveRuleNamesFromParts(parts),
          leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts);

    let leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();

    const leftRecursiveDefinitionsFront = front(leftRecursiveDefinitions);

    leftRecursiveDefinitions = leftRecursiveDefinitionsFront; ///

    indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinitions); ///

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
