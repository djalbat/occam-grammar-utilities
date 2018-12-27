'use strict';

const partUtilities = require('../utilities/part');

const { isPartRuleNamePart } = partUtilities;

function isFirstPartRuleNamePart(rule) {
  const firstPart = rule.getFirstPart(),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  return firstPartRuleNamePart;
}

module.exports = {
  isFirstPartRuleNamePart
};
