'use strict';

function cloneParts(parts) {
  parts = parts.map((part) => part.clone());

  return parts;
}

module.exports = {
  cloneParts
};
