"use strict";

import { Parts } from "occam-parsers";
import { Definition } from "occam-parsers";
import { arrayUtilities } from "necessary";

import { cloneParts } from "../utilities/parts";
import { reducedPartFromPart, optionalOneOrMorePartsPartFromPart } from "../utilities/part";

const { first } = arrayUtilities,
      { OptionalPartPart, OneOrMorePartsPart, SequenceOfPartsPart } = Parts;

export default class RewrittenDefinition extends Definition {
  static fromDefinition(definition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const part = parts.shift(),
          reducedPart = reducedPartFromPart(part),
          optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromParts(parts);

    parts = [
      reducedPart,
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
          reducedPart = reducedPartFromPart(part),
          optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartOrSequenceOfPartsFromPartsAndImplicitParts(parts, implicitParts);

    parts = [
      reducedPart,
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
          oneOrMorePartsPart = new OneOrMorePartsPart(part),
          optionalOneOrMorePartsPart = new OptionalPartPart(oneOrMorePartsPart);

    optionalOneOrMorePartOrSequenceOfParts = optionalOneOrMorePartsPart;  ///
  } else {
    const sequenceOfPartsPart = new SequenceOfPartsPart(parts),
          optionalOneOrMoreSequenceOfPartsPart = new OptionalPartPart(sequenceOfPartsPart);

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
