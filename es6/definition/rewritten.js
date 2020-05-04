"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";
import { isDefinitionLookAhead } from "../utilities/definition";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleName, zeroOrMoreRuleNamePartPartFromRuleName } from "../utilities/part";

class RewrittenDefinition extends Definition {
  static fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();  ///

    const definitionLookAhead = isDefinitionLookAhead(definition),
          lookAhead = definitionLookAhead,  ///
          repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
          reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
          zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
          reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
          rewrittenDefinition = new RewrittenDefinition(parts);

    parts.unshift(reducedLeftRecursiveRuleNamePart);

    parts.push(zeroOrMoreRepeatedRuleNamePart);

    return rewrittenDefinition;
  }
}

module.exports = RewrittenDefinition;
