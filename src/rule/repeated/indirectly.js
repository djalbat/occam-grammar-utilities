"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import IndirectlyRepeatedNode from "../../node/repeated/indirectly";

import { arePartsEqual } from "../../utilities/parts";
import { removeEpsilonNodes } from "../../utilities/nodes";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";
import { isDefinitionComplex, isDefinitionLookAhead, isDefinitionQualified, isDefinitionLeftRecursive, leftRecursiveRuleNamesFromDefinition } from "../../utilities/definition";

const { first } = arrayUtilities,
      { EpsilonPart } = Parts;

export default class IndirectlyRepeatedRule extends Rule {
  parse(state, callback, precedence, parentRuleName) {
    const ruleNode = super.parse(state, callback, precedence, parentRuleName);

    if (ruleNode !== null) {
      // const nonTerminalNode = ruleNode; ///
      //
      // removeEpsilonNodes(nonTerminalNode);
    }

    return ruleNode;
  }

  static fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
    let definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

      if (definitionLeftRecursive) {
        const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
              firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

        if (firstLeftRecursiveRuleName === leftRecursiveRuleName) {
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

          return true;
        }
      }
    });

    definitions = definitions.filter((definition) => {
      const parts = definition.getParts(),
            partsLength = parts.length;

      if (partsLength > 1) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const epsilonDefinitions = epsilonDefinitionsFromNothing();

      definitions = epsilonDefinitions; ///
    } else {
      const firstPartsEqual = areFirstPartsEqual(definitions);

      if (!firstPartsEqual) {
        const ruleName = rule.getName();

        throw new Error(`The first parts of the '${leftRecursiveRuleName}' left recursive definitions in the '${ruleName}' rule are not equal.`);
      }

      const indirectlyRepeatedDefinitions = indirectlyRepeatedDefinitionsFromDefinitions(definitions);

      definitions = indirectlyRepeatedDefinitions;  ///
    }

    const ruleName = rule.getName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = indirectlyRepeatedRuleName,  ///
          ambiguous = false,
          NonTerminalNode = IndirectlyRepeatedNode,  ///
          indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return indirectlyRepeatedRule;
  }
}

function areFirstPartsEqual(definitions) {
  const firstParts = definitions.map((definition) => {
          const parts = definition.getParts(),
                firstPart = first(parts);

          return firstPart;
        }),
        firstPartsEqual = arePartsEqual(firstParts);

  return firstPartsEqual;
}

function epsilonDefinitionsFromNothing() {
  const epsilonPart = EpsilonPart.fromNothing(),
        parts = [
          epsilonPart
        ],
        definition = Definition.fromParts(parts),
        epsilonDefinition = definition, ///
        epsilonDefinitions = [
          epsilonDefinition
        ];

  return epsilonDefinitions;
}

function indirectlyRepeatedDefinitionsFromDefinitions(definitions) {
  const indirectlyRepeatedDefinitions = definitions.map((definition) => { ///
    let parts = definition.getParts();

    parts = [ ///
      ...parts
    ]

    parts.shift();

    definition = Definition.fromParts(parts);

    const indirectlyRepeatedDefinition = definition;  ///

    return indirectlyRepeatedDefinition;
  });

  return indirectlyRepeatedDefinitions;
}
