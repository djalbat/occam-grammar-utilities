"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/cycle";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode;

    return NonTerminalNode;
  }

  static fromRuleAndCycles(rule, cycles, ruleMap) {
    const ruleName = rule.getName(),
          definitions = [],
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

    if (rewrittenDefinition !== null) {
      const definition = rewrittenDefinition; ///

      definitions.push(definition);
    }

    const paths = pathsFromRuleNameAndCycles(ruleName, cycles);

    paths.forEach((path) => {
      const rewrittenDefinition = RewrittenDefinition.fromPath(path, ruleMap);

      if (rewrittenDefinition !== null) {
        const definition = rewrittenDefinition; ///

        definitions.push(definition);
      }
    });

    const name = ruleName,  ///
          opacity = rule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
