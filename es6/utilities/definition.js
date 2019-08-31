'use strict';

const partUtilities = require('../utilities/part'),
      ruleUtilities = require('../utilities/rule'),
      arrayUtilities = require('../utilities/array');

const { first } = arrayUtilities,
      { findRuleByName } = ruleUtilities,
      { ruleNameFromPart } = partUtilities;

function ruleFromDefinition(definition, rules) {
  let rule = null;

  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleName = ruleNameFromPart(firstPart);

  if (firstPartRuleName !== null) {
    const name = firstPartRuleName;

    rule = findRuleByName(name, rules);
  }

  return rule;
}

function isDDefinitionImmediateLeftRecursiveDefinition(definition, ruleName) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        firstPartRuleName = ruleNameFromPart(firstPart),
        definitionImmediatelyLeftRecursiveDefinition = (firstPartRuleName === ruleName);

  return definitionImmediatelyLeftRecursiveDefinition;

}

module.exports = {
  ruleFromDefinition,
  isDDefinitionImmediateLeftRecursiveDefinition
};
