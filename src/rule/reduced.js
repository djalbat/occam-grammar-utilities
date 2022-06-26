"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";

import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { find } = arrayUtilities;

export default class ReducedRule extends Rule {
  static fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule) {
    const rule = directlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const ruleName = directlyLeftRecursiveRule.getRuleName(),
            definition = directlyLeftRecursiveRule, ///
            definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
    }

    rule.removeDefinitions(definitions);

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

    return reducedRule;
  }

  static fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
    let reducedRule = null;

    const rule = indirectlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

      if (!definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength !== 0) {
      reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

      const leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
            definition = leftRecursiveDefinition; ///

      rule.removeDefinitions(definitions);

      rule.addDefinition(definition);
    }

    return reducedRule;
  }
}

function reducedRuleFromRuleAndDefinitions(rule, definitions) {
  const ruleName = rule.getName(),
        reducedRuleName = reducedRuleNameFromRuleName(ruleName);

  const name = reducedRuleName, ///
        ambiguous = false,
        NonTerminalNode = ReducedNode,  ///
        reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

  return reducedRule;
}
