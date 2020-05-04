"use strict";

import { Definition } from "occam-parsers";

import { ruleNamePartFromRuleName } from "../utilities/part";

export default class RuleNameDefinition extends Definition {
  static fromRuleName(ruleName) {
    const ruleNamePart = ruleNamePartFromRuleName(ruleName),
          parts = [
            ruleNamePart
          ],
          ruleNameDefinition = new RuleNameDefinition(parts);

    return ruleNameDefinition;
  }
}
