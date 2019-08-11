'use strict';

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities,
      { isPartRuleNamePart } = partUtilities;

function isDefinitionLeftRecursive(definition, ruleName) {
  let definitionLeftRecursive = false;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

  if (firstPartRuleNamePart) {
    const ruleNamePart = firstPart, ///
          ruleNamePartRuleName = ruleNamePart.getRuleName(),
          ruleNamePartRuleNameRuleName = (ruleNamePartRuleName === ruleName);

    definitionLeftRecursive = ruleNamePartRuleNameRuleName; ///
  }

  return definitionLeftRecursive;
}

module.exports = {
  isDefinitionLeftRecursive
};
