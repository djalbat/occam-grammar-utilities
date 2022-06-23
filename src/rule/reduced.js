"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";

import { isInstanceOf } from "../utilities/class";
import { ruleNamePartFromRuleName } from "../utilities/part";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { find } = arrayUtilities;

export default class ReducedRule extends Rule {
  static fromDirectlyLeftRecursiveRule(directlyLeftRecursiveRule) {
    const rule = directlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      debugger
    }

    rule.removeDefinitions(definitions);

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

    return reducedRule;
  }

  static fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
    const rule = indirectlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, IndirectlyLeftRecursiveDefinition);

      if (!definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      debugger
    }

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions),
          leftRecursiveDefinition = LeftRecursiveDefinition.fromReducedRule(reducedRule),
          definition = leftRecursiveDefinition; ///

    rule.addDefinition(definition);

    rule.removeDefinitions(definitions);

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
