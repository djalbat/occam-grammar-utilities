"use strict";

import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { cloneParts } from "../utilities/parts";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { isPartLookAhead,
         sequenceOfPartsPartFromParts,
         optionalOneOrMorePartsPartFromPart,
         ruleNamePartFromRuleNameAndLookAhead } from "../utilities/part";

const { first } = arrayUtilities;

export default class RewrittenDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          leftRecursiveRuleName = ruleName,  ///
          reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName),
          optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);

    parts = [
      reducedLeftRecursiveRuleNamePart,
      optionalOneOrMorePartOrSequenceOfParts
    ];

    const rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;

  }

  static fromDefinitionAndImplicitlyLeftRecursiveDefinition(definition, implicitlyLeftRecursiveDefinition) {
    const implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();

    let parts = definition.getParts(),
        implicitParts = implicitlyLeftRecursiveDefinitionParts; ///

    parts = cloneParts(parts);  ///

    implicitParts = cloneParts(implicitParts);  ///

    implicitParts.shift();

    const part = parts.shift(),
          implicitlyLeftRecursiveDefinitionRuleName = implicitlyLeftRecursiveDefinition.getRuleName(),
          leftRecursiveRuleName = implicitlyLeftRecursiveDefinitionRuleName,  ///
          reducedLeftRecursiveRuleNamePart = reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName),
          optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts);

    parts = [
      reducedLeftRecursiveRuleNamePart,
      optionalOneOrMorePartOrSequenceOfParts
    ];

    const rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;
  }
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

function optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts) {
  parts = [ ///
      ...parts,
      ...implicitParts
  ];

  const optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);

  return optionalOneOrMorePartOrSequenceOfParts;
}

function reducedLeftRecursiveRuleNamePartFromPartAndLeftRecursiveRuleName(part, leftRecursiveRuleName) {
  const partLookAhead = isPartLookAhead(part),
        lookAhead = partLookAhead,  ///
        reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
        reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleNameAndLookAhead(reducedLeftRecursiveRuleName, lookAhead);

  return reducedLeftRecursiveRuleNamePart;
}
