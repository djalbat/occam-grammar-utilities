"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/path";

export default class RewrittenRule extends Rule {
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
          ambiguous = rule.isAmbiguous(),
          NonTerminalNode = RewrittenNode,
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
