"use strict";

import { Rule } from "occam-parsers";

import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/path";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../rewriteNodes";

export default class RewrittenRule extends Rule {
  parse(state, callback) {
    const ruleNode = super.parse(state, callback);

    if (ruleNode !== null) {
      const node = ruleNode,  ///
            recursively = false;

      rewriteDirectlyRepeatedNodes(node, recursively);

      const parentNode = rewriteIndirectlyRepeatedNodes(node, recursively);

      rewriteReducedNodes(parentNode, recursively);
    }

    return ruleNode;
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
