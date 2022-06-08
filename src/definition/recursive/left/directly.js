"use strict";

import { Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";

import { reducedPartFromPart } from "../../../utilities/part";
import { reducedRuleNameFromRuleName } from "../../../utilities/ruleName";
import { DIRECTLY_LEFT_RECURSIVE_TYPE } from "../../../types";
import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { first } = arrayUtilities,
      { RuleNamePart, ZeroOrMorePartsPart, SequenceOfPartsPart } = Parts;

export default class DirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  isIsolated(ruleMap) {
    const ruleName = this.getRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRule = ruleMap[reducedRuleName] || null,
          isolated = (reducedRule === null);

    return isolated;
  }

  rewrite(ruleMap) {
    const unary = this.isUnary(),
          complex = this.isComplex(),
          isolated = this.isIsolated(ruleMap);

    if (unary) {
      const definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    if (complex) {
      const ruleName = this.getRuleName(),
            definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
    }

    if (isolated) {
      const ruleName = this.getRuleName(),
            definitionString = this.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
    }

    let parts = this.getParts();

    parts.shift();

    parts = parts.splice(0);  ///

    const ruleName = this.getRuleName(),
          reducedPart = reducedPartFromRuleName(ruleName),
          repeatedPart = repeatedPartFromParts(parts);

    this.addPart(reducedPart);

    this.addPart(repeatedPart);
  }

  static fromRuleNameAndDefinition(ruleName, definition) {
    let directlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition);

      leftRecursiveRuleNames.some((leftRecursiveRuleName) => {
        const ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

        if (ruleNameLeftRecursiveRuleName) {
          const type = DIRECTLY_LEFT_RECURSIVE_TYPE,
                parts = definition.getParts(),
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          directlyLeftRecursiveDefinition = new DirectlyLeftRecursiveDefinition(parts, type, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);

          return true;
        }
      });
    }

    return directlyLeftRecursiveDefinition;
  }
}

function repeatedPartFromParts(parts) {
  let repeatedPart;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

    repeatedPart = zeroOrMorePartsPart;  ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts),
          zeroOrMoreSequenceOfPartsPart = new ZeroOrMorePartsPart(sequenceOfPartsPart);

    repeatedPart = zeroOrMoreSequenceOfPartsPart;  ///
  }

  return repeatedPart;
}

function reducedPartFromRuleName(ruleName) {
  const ruleNamePart = new RuleNamePart(ruleName),
        part = ruleNamePart,  ///
        reducedPart = reducedPartFromPart(part);

  return reducedPart;
}
