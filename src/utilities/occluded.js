"use strict";

import { arrayUtilities } from "necessary";
import {isPartNonConsuming} from "./nonConsuming";

const { first } = arrayUtilities;

export function isDefinitionOccluded(definition, ruleMap, ruleNames = []) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartNonConsuming = isPartNonConsuming(firstPart, ruleMap, ruleNames),
        definitionOccluded = firstPartNonConsuming;  ///

  return definitionOccluded;
}
