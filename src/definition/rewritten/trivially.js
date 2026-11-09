"use strict";

import { Definition } from "occam-parsers";

import { rewriteRuleNameParts } from "../../utilities/rewrite";

export default class TriviallyRewrittenDefinition extends Definition {
  static fromDefinition(definition, context) {
    const ruleNames = context.getRuleNames();

    let parts;

    parts = definition.getParts();

    parts = rewriteRuleNameParts(parts, ruleNames); ///

    const precedence = definition.getPrecedence(),
          triviallyRewrittenDefinition = new TriviallyRewrittenDefinition(parts, precedence);

    return triviallyRewrittenDefinition;
  }
}
