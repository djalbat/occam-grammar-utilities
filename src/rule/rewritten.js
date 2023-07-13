"use strict";

import { Rule } from "occam-parsers";

import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/path";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/nodes";

export default class RewrittenRule extends Rule {
  rewriteNonTerminalNode(nonTerminalNode) {
    rewriteDirectlyRepeatedNodes(nonTerminalNode);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode);

    nonTerminalNode = parentNode; ///

    rewriteReducedNodes(nonTerminalNode);
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
          ambiguous = rule.isAmbiguous(),
          NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}
