"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { reducedDefinitionFromRuleName } from "../utilities/definition";

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

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

    return reducedRule;
  }

  static fromNonDirectlyLeftRecursiveRule(nonDirectlyLeftRecursiveRule) {
    const rule = nonDirectlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionLeftRecursiveDefinition = isInstanceOf(definition, LeftRecursiveDefinition);

      if (!definitionLeftRecursiveDefinition) {
        return true;
      }
    });

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

    return reducedRule;
  }
}

function reducedRuleFromRuleAndDefinitions(rule, definitions) {
  let reducedRule = null;

  const definitionsLength = definitions.length;

  if (definitionsLength > 0) {
    const ruleName = rule.getName(),  ///
          reducedDefinition = reducedDefinitionFromRuleName(ruleName),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          definition = reducedDefinition; ///

    definitions.forEach((definition) => {
      rule.removeDefinition(definition);
    });

    rule.addDefinition(definition);

    const name = reducedRuleName, ///
          ambiguous = false,
          NonTerminalNode = ReducedNode;  ///

    reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
  }

  return reducedRule;
}
