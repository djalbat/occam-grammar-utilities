"use strict";

export function cloneParts(parts) {
  parts = parts.map((part) => part.clone());

  return parts;
}
