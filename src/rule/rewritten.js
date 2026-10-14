"use strict";

import { Rule } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode;  ///

    return NonTerminalNode;
  }

  static fromRule(rule) {
    const rewrittenDefinition = RewrittenDefinition.fromRule(rule),
          definition = rewrittenDefinition, ///
          name = rule.getName(),
          opacity = null,
          definitions = [
            definition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}
