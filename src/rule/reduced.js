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
      const ruleName = rule.getName(),
            definition = directlyLeftRecursiveRule, ///
            definitionString = definition.asString();

      throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule is isolated and therefore cannot be rewritten.`);
    }

    rule.removeDefinitions(definitions);

    const ruleName = rule.getName(),
          reducedRule = reducedRuleFromRuleNameAndDefinitions(ruleName, definitions);

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

    const ruleName = rule.getName(),
          definitionsLength = definitions.length;

    if (definitionsLength !== 0) {
      definitions.forEach((definition) => {
        const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

        if (definitionDirectlyLeftRecursiveDefinition) {
          const definitionString = definition.asString();

          throw new Error(`The '${definitionString}' directly left recursive definition of the '${ruleName}' rule has a sibling indirectly left recursive definition and therefore cannot be rewritten.`);
        }
      });

      reducedRule = reducedRuleFromRuleNameAndDefinitions(ruleName, definitions);

      const leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
            definition = leftRecursiveDefinition; ///

      rule.removeDefinitions(definitions);

      rule.addDefinition(definition);
    }

    return reducedRule;
  }
}

function reducedRuleFromRuleNameAndDefinitions(ruleName, definitions) {
  const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
        name = reducedRuleName, ///
        ambiguous = false,
        NonTerminalNode = ReducedNode,  ///
        reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

  return reducedRule;
}
