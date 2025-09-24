"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { pathsFromRuleNameAndCycles } from "../utilities/cycle";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/leftRecursive";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode;

    return NonTerminalNode;
  }

  static fromRuleAndCycles(rule, cycles, ruleMap) {
    let definitions;

    const ruleName = rule.getName(),
          paths = pathsFromRuleNameAndCycles(ruleName, cycles);

    const rewrittenDefinitions = [];

    definitions = rule.getDefinitions();

    definitions.forEach((definition) => {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition, ruleName);

      paths.forEach((path) => {
        const rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveRuleNamesAndPath(leftRecursiveRuleNames, path, ruleMap);

        if (rewrittenDefinition !== null) {
          rewrittenDefinitions.push(rewrittenDefinition);
        }
      });
    });

    const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

    if (rewrittenDefinition !== null) {
      rewrittenDefinitions.push(rewrittenDefinition);
    }

    definitions = rewrittenDefinitions; ///

    const name = ruleName,  ///
          opacity = rule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
