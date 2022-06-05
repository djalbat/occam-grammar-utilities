"use strict";

import { Parts } from "occam-parsers";
import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { cloneParts } from "../utilities/parts";
import { reducedPartFromPart } from "../utilities/part";

const { first } = arrayUtilities,
      { RuleNamePart, OptionalPartPart, OneOrMorePartsPart, SequenceOfPartsPart } = Parts;

export default class RewrittenDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();

    const reducedPart = reducedPartFromRuleName(ruleName),
          repeatedPart = repeatedPartFromParts(parts);

    parts = [
      reducedPart,
      repeatedPart
    ];

    const rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;

  }

  static fromDefinitionRuleNameAndImplicitlyLeftRecursiveDefinition(definition, ruleName, implicitlyLeftRecursiveDefinition) {
    const implicitlyLeftRecursiveDefinitionParts = implicitlyLeftRecursiveDefinition.getParts();

    let parts = definition.getParts(),
        implicitParts = implicitlyLeftRecursiveDefinitionParts; ///

    implicitParts = cloneParts(implicitParts);  ///

    implicitParts.shift();

    parts = cloneParts(parts);  ///

    parts.shift();

    parts = [ ///
      ...implicitParts,
      ...parts
    ];

    const reducedPart = reducedPartFromRuleName(ruleName),
          repeatedPart = repeatedPartFromParts(parts);

    parts = [
      reducedPart,
      repeatedPart
    ];

    const rewrittenDefinition = new RewrittenDefinition(parts);

    return rewrittenDefinition;
  }
}

function repeatedPartFromParts(parts) {
  let repeatedPart;

  const partsLength = parts.length;

  if (partsLength === 1) {
    const firstPart = first(parts),
          part = firstPart, ///
          oneOrMorePartsPart = new OneOrMorePartsPart(part),
          optionalOneOrMorePartsPart = new OptionalPartPart(oneOrMorePartsPart);

    repeatedPart = optionalOneOrMorePartsPart;  ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts),
          neOrMoreSequenceOfPartsPart = new OneOrMorePartsPart(sequenceOfPartsPart),
          optionalOneOrMoreSequenceOfPartsPart = new OptionalPartPart(neOrMoreSequenceOfPartsPart);

    repeatedPart = optionalOneOrMoreSequenceOfPartsPart;  ///
  }

  return repeatedPart;
}

function reducedPartFromRuleName(ruleName) {
  const ruleNamePart = new RuleNamePart(ruleName),
        part = ruleNamePart,  ///
        reducedPart = reducedPartFromPart(part);

  return reducedPart;
}
