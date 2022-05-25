"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { cloneParts } from "../utilities/parts";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { isPartLookAhead, ruleNamePartFromRuleName, sequenceOfPartsPartFromParts, optionalOneOrMorePartsPartFromPart } from "../utilities/part";

const { first } = arrayUtilities;

export default class RewrittenDefinition extends Definition {
  static fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
    let parts;

    parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName),
          optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);

    parts = [
      reducedLeftRecursiveRuleNamePart,
      optionalOneOrMorePartOrSequenceOfParts
    ];

    const rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;
  }

  // static fromDefinitionLeftRecursiveRuleNameAndImplicitlyLeftRecursiveDefinition(definition, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
  //   const definitionLookAhead = isDefinitionLookAhead(definition),
  //         lookAhead = definitionLookAhead,  ///
  //         rewrittenDefinition = rewrittenDefinitionFromDefinitionAndLeftRecursiveRuleName(lookAhead, leftRecursiveRuleName);
  //
  //   return rewrittenDefinition;
  // }
}

function optionalOneOrMorePartOrSequenceOfPartsFromParts(parts) {
  let optionalOneOrMorePartOrSequenceOfParts;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          optionalOneOrMorePartsPart = optionalOneOrMorePartsPartFromPart(part);

    optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartsPart;  ///
  } else {
    const sequenceOfPartsPart = sequenceOfPartsPartFromParts(parts),
          optionalOneOrMoreSequenceOfPartsPart = optionalOneOrMorePartsPartFromPart(sequenceOfPartsPart);

    optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMoreSequenceOfPartsPart;  ///
  }

  return optionalOneOrMorePartOrSequenceOfParts;
}

function reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName) {
  const partLookAhead = isPartLookAhead(part),
        lookAhead = partLookAhead,  ///
        reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
        reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead);

  return reducedLeftRecursiveRuleNamePart;
}
