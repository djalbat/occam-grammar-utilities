"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { removeEpsilonNodes } from "../../rewriteNodes";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionComplex, isDefinitionLookAhead, isDefinitionQualified, isDefinitionLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { first } = arrayUtilities,
      { EpsilonPart } = Parts;

export default class IndirectlyRepeatedRule extends Rule {
  parse(state, callback) {
    const ruleNode = super.parse(state, callback);

    if (ruleNode !== null) {
      const node = ruleNode,  ///
            recursively = false;

      removeEpsilonNodes(node, recursively);
    }

    return ruleNode;
  }

  static fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
    let definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

      if (definitionLeftRecursive) {
        const definitionComplex = isDefinitionComplex(definition);

        if (definitionComplex) {
          const ruleName = rule.getName(),
                definitionString = definition.asString();

          throw new Error(`The '${definitionString}' definition of the '${ruleName}' rule is complex.`);
        }

        const definitionLookAhead = isDefinitionLookAhead(definition);

        if (definitionLookAhead) {
          const ruleName = rule.getName(),
                definitionString = definition.asString();

          throw new Error(`The first part of the '${definitionString}' definition of the '${ruleName}' rule is look-ahead.`);
        }

        const definitionQualified = isDefinitionQualified(definition);

        if (definitionQualified) {
          const ruleName = rule.getName(),
                definitionString = definition.asString();

          throw new Error(`The first part of the '${definitionString}' definition of the '${ruleName}' rule is qualified.`);
        }

        const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
              firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
          return true;
        }
      }
    });

    const firstParts = [];

    definitions = definitions.filter((definition) => {
      const parts = definition.getParts(),
            partsLength = parts.length;

      if (partsLength > 1) {
        const firstPart = parts.shift();

        firstParts.push(firstPart);

        return true;
      }
    });

    const ruleName = rule.getName(),
          definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const epsilonPart = new EpsilonPart(),
            parts = [
              epsilonPart
            ],
            definition = new Definition(parts);

      definitions.push(definition);
    } else {
      const firstPartsEqual = arePartsEqual(firstParts);

      if (!firstPartsEqual) {
        throw new Error(`The first parts of the '${leftRecursiveRuleName}' left recursive definitions in the '${ruleName}' rule are not equal.`);
      }
    }

    const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }
}
