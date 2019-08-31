'use strict';

function cloneParts(parts) {
  parts = parts.map((part) => {
    part = part.clone();

    return part;
  });

  return parts;
}

module.exports = {
  cloneParts
};
