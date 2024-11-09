"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function arePartsEqual(parts) {
  const firstPart = first(parts),
        firstPartString = firstPart.asString(),
        partsEqual = parts.every((part) => {
          const partString = part.asString(),
                partStringFirstPartString = (partString === firstPartString);

          if (partStringFirstPartString) {
            return true;
          }
        });

  return partsEqual;
}
