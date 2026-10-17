"use strict";

import { Rule } from "occam-parsers";

import RewrittenDefinition from "../definition/rewritten";

export default class RewrittenRule extends Rule {
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
