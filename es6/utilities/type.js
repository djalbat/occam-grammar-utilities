'use strict';

function typeFromPart(Part) {
  const { type } = Part;

  return type;
}

function typesFromParts(Parts) {
  const types = Parts.map(function(Part) {
    const type = typeFromPart(Part);

    return type;
  });

  return types;
}

module.exports = {
  typeFromPart,
  typesFromParts
};
