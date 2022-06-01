"use strict";

import { Parts, partTypes } from "occam-parsers";

const { RuleNamePartType, ChoiceOfPartsPartType, SequenceOfPartsPartType } = partTypes,
      { OptionalPartPart, RuleNamePart, OneOrMorePartsPart, SequenceOfPartsPart } = Parts;

export function isPartComplex(part) {
  const partType = part.getType(),
        partTypeChoiceOfPartsType = (partType === ChoiceOfPartsPartType),
        partTypeSequenceOfPartsType = (partType === SequenceOfPartsPartType),
        partTypeComplexPartType = partTypeChoiceOfPartsType || partTypeSequenceOfPartsType,
        partComplex = partTypeComplexPartType;  ///

  return partComplex;
}

export function isPartLookAhead(part) {
  let partLookAhead = false;

  const partType = part.getType(),
        partTypeRuleNamePartType = (partType === RuleNamePartType),
        partRuleNamePart = partTypeRuleNamePartType;  ///

  if (partRuleNamePart) {
    const ruleNamePart = part; ///

    partLookAhead = ruleNamePart.isLookAhead();
  }

  return partLookAhead;
}

export function sequenceOfPartsPartFromParts(parts) {
  const sequenceOfPartsPart = new SequenceOfPartsPart(parts);

  return sequenceOfPartsPart;
}

export function optionalOneOrMorePartsPartFromPart(part) {
  const oneOrMorePartsPart = new OneOrMorePartsPart(part),
        optionalOneOrMorePartsPart = new OptionalPartPart(oneOrMorePartsPart);

  return optionalOneOrMorePartsPart;
}

export function ruleNamePartFromRuleNameAndLookAhead(ruleName, lookAhead) {
  const ruleNamePart = new RuleNamePart(ruleName, lookAhead);

  return ruleNamePart;
}
