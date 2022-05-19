"use strict";

import { Definition } from "occam-parsers";

import { isDefinitionLookAhead } from "../utilities/definition";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleName, oneOrMoreRuleNamePartPartFromRuleName } from "../utilities/part";

export default class RewrittenDefinition extends Definition {
  static fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
    const definitionLookAhead = isDefinitionLookAhead(definition),
          lookAhead = definitionLookAhead,  ///
          rewrittenDefinition = rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName);

    return rewrittenDefinition;
  }

  static fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
    const definitionLookAhead = isDefinitionLookAhead(definition),
          lookAhead = definitionLookAhead,  ///
          rewrittenDefinition = rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName);

    return rewrittenDefinition;
  }
}

function rewrittenDefinitionFromLookAheadAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName) {
  const repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
        reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
        oneOrMoreRepeatedRuleNamePart = oneOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
        reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
        parts = [
          reducedLeftRecursiveRuleNamePart,
          oneOrMoreRepeatedRuleNamePart
        ],
        rewrittenDefinition = new RewrittenDefinition(parts);

  return rewrittenDefinition;
}