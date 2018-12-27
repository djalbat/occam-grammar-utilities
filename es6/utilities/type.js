'use strict';

function typesFromParts(Parts) {
  const types = Parts.map(function(Part) {
    const { type } = Part;

    return type;
  });

  return types;
}

module.exports = {
  typesFromParts
};
