"use strict";

import { arrayUtilities } from "necessary";
import { Parts, partTypes, PartChoice, Definition } from "occam-parsers";

import { rewriteRuleNameParts } from "../utilities/rewrite";
import { isDefinitionSingular } from "../utilities/definition";
import { ruleNamePartFromRuleName, oneOrMorePartsPartFromPart, zeroOrMorePartsPartFromPart } from "../utilities/part";
import { reducedRuleNameFromRuleName, repeatedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromIndirectRuleName } from "../utilities/ruleName";

const { ChoiceOfPartsPart } = Parts,
      { push, first, second } = arrayUtilities,
      { ChoiceOfPartsPartType } = partTypes;

export default class RewrittenDefinition extends Definition {
  mergedWith(rewrittenDefinition) {
    const rewrittenDefintionA = this,  ///
          rewrittenDefintionB = rewrittenDefinition, ///
          definitions = [
            rewrittenDefintionA,
            rewrittenDefintionB
          ],
          choiceOfPartsPart = choideOrPartsPartFromDefinitions(definitions),
          zeroOrMoreChoicesOfPartsParts = zeroOrMorePartsPartFromPart(choiceOfPartsPart);

    let parts;

    parts = this.getParts();

    const firstPart = first(parts),
          secondPart = zeroOrMoreChoicesOfPartsParts; ///

    parts = [ ///
      firstPart,
      secondPart
    ];

    const precedence = null;

    rewrittenDefinition = new RewrittenDefinition(parts, precedence); ///

    return rewrittenDefinition;
  }

  static fromRuleName(ruleName, context) {
    const reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          zeroOrMoreRepeatedRuleNamePartPart = zeroOrMorePartsPartFromPart(repeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            zeroOrMoreRepeatedRuleNamePartPart
          ],
          precedence = null,
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
          zeroOrMoreIndirectlyRepeatedRuleNamePartPart = zeroOrMorePartsPartFromPart(indirectlyRepeatedRuleNamePart),
          parts = [
            reducedRuleNamePart,
            zeroOrMoreIndirectlyRepeatedRuleNamePartPart
          ],
          precedence = singularDefinition.getPrecedence(),
          rewrittenDefinition = new RewrittenDefinition(parts, precedence);

    return rewrittenDefinition;
  }

  static fromDefinitionAndRuleNames(definition, ruleNames, context) {
    let parts;

    parts = definition.getParts();

    parts = rewriteRuleNameParts(parts, ruleNames); ///

    const precedence = definition.getPrecedence(),
          rewritenDefinition = new RewrittenDefinition(parts, precedence);

    return rewritenDefinition;
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

function choideOrPartsPartFromDefinitions(definitions) {
  const partChoices = definitions.reduce((partChoices, definition) => {
          partChoicesFromDefinition(definition, partChoices);

          return partChoices;
        }, []),
        choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices);

  return choiceOfPartsPart;
}

function partChoicesFromDefinition(definition, partChoices) {
  const parts = definition.getParts(),
        secondPart = second(parts),
        secondPartType = secondPart.getType(),
        secondPartTypechoiceOfPartsPartType = (secondPartType === ChoiceOfPartsPartType);

  if (secondPartTypechoiceOfPartsPartType) {
    const choiceOfPartsPart = secondPart, ///
          choiceOfPartsPartPartChoices = choiceOfPartsPart.getPartChoices();

    push(partChoices, choiceOfPartsPartPartChoices);
  } else {
    const zeroOrMorePartsPart = secondPart,  ///
          part = zeroOrMorePartsPart.getPart(),
          precedence = definition.getPrecedence(),
          partChoice = PartChoice.fromPartAndPrecedence(part, precedence);

    partChoices.push(partChoice);
  }
}