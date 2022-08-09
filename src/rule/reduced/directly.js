"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import DirectlyReducedNode from "../../node/reduced/directly";
import DirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class DirectlyReducedRule extends Rule {
  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated = true) {
    let directlyReducedRule = null;

    const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    let definitions = rule.getDefinitions();

    definitions = definitions.slice(0);  ///

    directlyLeftRecursiveDefinitions.forEach((directlyLeftRecursiveDefinition) => {
      const definition = directlyLeftRecursiveDefinition.getDefinition(),
            index = definitions.indexOf(definition),
            start = index,  ///
            deleteCount = 1;

      definitions.splice(start, deleteCount);
    });

    indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
      const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
            index = definitions.indexOf(definition),
            start = index,  ///
            deleteCount = 1;

      definitions.splice(start, deleteCount);
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      if (disallowIsolated) {
        const ruleName = rule.getName();

        throw new Error(`The directly left recursive definitions of the '${ruleName}' rule are isolated and therefore cannot be rewritten.`);
      }
    }

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
            name = directlyReducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = DirectlyReducedNode;  ///

      directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return directlyReducedRule;
  }
}

function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}
