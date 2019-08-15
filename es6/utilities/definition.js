'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function leftRecursiveRuleNameFromLeftRecursiveDefinition(leftRecursiveDefinition) {
  const parts = leftRecursiveDefinition.getParts(),
        firstPart = first(parts),
        ruleNamePart = firstPart,
        ruleName = ruleNamePart.getRuleName(),
        leftRecursiveRuleName = ruleName; ///

  return leftRecursiveRuleName;
}

module.exports = {
  leftRecursiveRuleNameFromLeftRecursiveDefinition
};
