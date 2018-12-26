'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class ImplicitlyLeftRecursiveDefinition extends Definition {
  static fromDefinitionAndPreviousRule(definition, previousRule) {
    const previousRuleName = previousRule.getName(),
          implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinitionFromDefinition(definition, function(ruleName) {
            if (previousRuleName === ruleName) {
              return true;
            }
          });

    return implicitlyLeftRecursiveDefinition;
  }
  
  static fromDefinitionAndPreviousRules(definition, previousRules) {
    const previousRuleNames = previousRules.map(function(previousRule) {
            const previousRuleName = previousRule.getName();
  
            return previousRuleName;
          }),
          implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinitionFromDefinition(definition, function(ruleName) {
            const previousRuleNamesIncludesRuleName = previousRuleNames.includes(ruleName);

            if (previousRuleNamesIncludesRuleName) {
              return true;
            }
          });

    return implicitlyLeftRecursiveDefinition;
  }
}

module.exports = ImplicitlyLeftRecursiveDefinition;

function implicitlyLeftRecursiveDefinitionFromDefinition(definition, callback) {
  let implicitlyLeftRecursiveDefinition = null;

  const firstPartRuleNamePart = definition.isFirstPartRuleNamePart();

  if (firstPartRuleNamePart) {
    const firstPart = definition.getFirstPart(),
          firstRuleNamePart = firstPart,  ///
          firstRuleNamePartRuleName = firstRuleNamePart.getRuleName(),
          ruleName = firstRuleNamePartRuleName, ///
          definitionImplicitlyLeftRecursive = callback(ruleName);

    if (definitionImplicitlyLeftRecursive) {
      const parts = definition.getParts();

      implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts);
    }
  }

  return implicitlyLeftRecursiveDefinition;
}
