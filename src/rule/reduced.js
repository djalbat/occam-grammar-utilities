"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import LeftRecursiveDefinition from "../definition/recursive/left";
import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";

import { isInstanceOf } from "../utilities/class";
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

    const reducedRule = reducedRuleFromRuleAndDefinitions(rule, definitions);

    return reducedRule;
  }

  static fromImplicitlyLeftRecursiveRule(implicitlyLeftRecursiveRule) {
    const rule = implicitlyLeftRecursiveRule;  ///

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

  static fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
    const rule = indirectlyLeftRecursiveRule;  ///

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
          reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    rule.removeDefinitions(definitions);

    const name = reducedRuleName, ///
          ambiguous = false,
          NonTerminalNode = ReducedNode;  ///

    reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);
  }

  return reducedRule;
}
