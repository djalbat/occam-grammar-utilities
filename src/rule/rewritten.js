"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/path";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode;

    return NonTerminalNode;
  }

  static fromRuleAndCycles(rule, cycles, ruleMap) {
    const rewrittenDefinitions = [],
          ruleName = rule.getName(),
          paths = pathsFromRuleNameAndCycles(ruleName, cycles, ruleMap);

    paths.forEach((path) => {
      const rewrittenDefinition = RewrittenDefinition.fromPath(path, ruleMap);

      if (rewrittenDefinition !== null) {
        rewrittenDefinitions.push(rewrittenDefinition);
      }
    });

    const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

    if (rewrittenDefinition !== null) {
      rewrittenDefinitions.push(rewrittenDefinition);
    }

    const name = ruleName,  ///
          opacity = rule.getOpacity(),
          definitions = rewrittenDefinitions, ///
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
