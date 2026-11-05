"use strict";

import { Definition } from "occam-parsers";

import { isDefinitionSingular } from "../utilities/definition";
import { ruleNamePartFromRuleName, oneOrMorePartsPartFromPart, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";

export default class RewrittenDefinition extends Definition {
  static fromRuleName(ruleName, singular, context) {
    if (context === undefined) {
      context = singular; ///

      singular = false;
    }

    const parts = [],
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName);

    parts.push(reducedRuleNamePart);

    if (!singular) {
      const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
            repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
            zeroOrMoreRepeatedRuleNamePartPart = zeroOrMorePartsPartFromPart(repeatedRuleNamePart);

      parts.push(zeroOrMoreRepeatedRuleNamePartPart);
    }

    const precedence = null,
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }

  static fromDefiniiton(definition, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          oneOrMoreIndirectlyRepeatedRuleNamePartPart = oneOrMorePartsPartFromPart(indirectlyRepeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            oneOrMoreIndirectlyRepeatedRuleNamePartPart
          ],
          precedence = definition.getPrecedence(),
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }

  static fromSingularDefinition(singularDefinition, context) {
    const ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromIndirectRuleName(indirectRuleName),
          indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName),
          oneOrMoreIndirectlyRepeatedRuleNamePartPart = oneOrMorePartsPartFromPart(indirectlyRepeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            oneOrMoreIndirectlyRepeatedRuleNamePartPart
          ],
          precedence = singularDefinition.getPrecedence(),
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }
}

export function rewrittenDefinitionsFromDefinitionsAndRuleName(definitions, ruleName, context) {
  const rewrittenDefinitions = definitions.reduce((rewrittenDefinitions, definition) => {
    const definitionSingular = isDefinitionSingular(definition, ruleName, context);

    if (definitionSingular) {
      const singularDefinition = definition,  ///
            rewrittenDefinition = RewrittenDefinition.fromSingularDefinition(singularDefinition, context);

      rewrittenDefinitions.push(rewrittenDefinition);
    }

    return rewrittenDefinitions;
  }, []);

  return rewrittenDefinitions;
}
