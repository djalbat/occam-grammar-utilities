"use strict";

import { Definition } from "occam-parsers";

import { cloneParts } from "../utilities/parts";
import { isDefinitionUnary, isDefinitionLookAhead } from "../utilities/definition";
import { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { ruleNamePartFromRuleName, zeroOrMoreRuleNamePartPartFromRuleName } from "../utilities/part";

export default class RewrittenDefinition extends Definition {
  static fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
    const definitionLookAhead = isDefinitionLookAhead(definition),
          parts = definition.getParts(),
          lookAhead = definitionLookAhead,  ///
          rewrittenDefinition = repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName);

    return rewrittenDefinition;
  }

  static fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
    const definitionLookAhead = isDefinitionLookAhead(definition),
          parts = implicitlyLeftRecursiveDefinition.getParts(),
          lookAhead = definitionLookAhead,  ///
          rewrittenDefinition = repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName);

    return rewrittenDefinition;
  }
}

function repeatedDefinitionFromPartsLookAheadAndLeftRecursiveRuleName(parts, lookAhead, leftRecursiveRuleName) {
  parts = cloneParts(parts);  ///

  parts.shift();  ///

  const repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
        reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
        zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
        reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
        rewrittenDefinition = new RewrittenDefinition(parts);

  parts.unshift(reducedLeftRecursiveRuleNamePart);

  parts.push(zeroOrMoreRepeatedRuleNamePart);

  return rewrittenDefinition;
}