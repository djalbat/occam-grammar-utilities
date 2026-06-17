"use strict";

const { rulesUtilities } = require("occam-parsers");

const { rulesAsString } = rulesUtilities;

function adjustedBNFFromRules(rules) {
  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        adjustedBNF = rulesString;  ///

  return adjustedBNF;
}

module.exports = {
  adjustedBNFFromRules
};
