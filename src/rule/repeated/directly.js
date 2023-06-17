"use strict";

import { Rule } from "occam-parsers";

import DirectlyRepeatedNode from "../../node/repeated/directly";
import DirectlyRepeatedDefinition from "../../definition/repeated/directly"

import { rewriteDirectlyRepeatedNodes } from "../../rewriteNodes";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

export default class DirectlyRepeatedRule extends Rule {
  parse(state, callback) {
    const ruleNode = super.parse(state, callback);

    if (ruleNode !== null) {
      const node = ruleNode,  ///
            recursively = false;

      rewriteDirectlyRepeatedNodes(node, recursively);
    }

    return ruleNode;
  }

  static fromRuleAndCycles(rule, cycles) {
    const ruleName = rule.getName(),
          definitions = [];

    cycles.map((cycle) => {
      const directlyRepeatedDefinition = DirectlyRepeatedDefinition.fromRuleAndCycle(rule, cycle);

      if (directlyRepeatedDefinition !== null) {
        const definition = directlyRepeatedDefinition;  ///

        definitions.push(definition);
      }
    });

    const directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          name = directlyRepeatedRuleName, ///
          ambiguous = false,
          NonTerminalNode = DirectlyRepeatedNode,  ///
          directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return directlyRepeatedRule;
  }
}
