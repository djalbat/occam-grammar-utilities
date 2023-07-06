"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import DirectlyRepeatedNode from "../../node/repeated/directly";
import DirectlyRepeatedDefinition from "../../definition/repeated/directly"

import { rewriteDirectlyRepeatedNodes } from "../../utilities/nodes";
import { directlyRepeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { first } = arrayUtilities;

export default class DirectlyRepeatedRule extends Rule {
  parse(nodes, state, callback) {
    const parsed = super.parse(nodes, state, callback);

    if (parsed) {
      const firstNode = first(nodes),
            nonTerminalNode = firstNode;  ///

      rewriteDirectlyRepeatedNodes(nonTerminalNode);
    }

    return parsed;
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
