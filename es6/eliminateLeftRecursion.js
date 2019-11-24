'use strict';

const necessary = require('necessary');

const ruleUtilities = require('./utilities/rule'),
      RecursiveDefinition = require('./definition/recursive'),
      LeftRecursiveDefinition = require('./definition/leftRecursive'),
      DirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/directly'),
      IndirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/indirectly');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { findRule } = ruleUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        replacementDefinitions = [];

  replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules);

  rewriteReplacementDefinitions(replacementDefinitions, rules);
}

module.exports = eliminateLeftRecursion;

function replaceDefinition(ruleName, definition, recursiveDefinitions, replacementDefinitions, rules) {
  const recursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) ||
                              DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                              LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                              RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

  if (recursiveDefinition !== null) {
    recursiveDefinition.replace(rules);

    const recursiveDefinitionIndirectlyLeftRecursiveDefinition = (recursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

    if (recursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = recursiveDefinition,  ///
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

      implicitlyLeftRecursiveDefinition.replace(rules);
    }

    const replacementDefinition = recursiveDefinition;  ///

    if (replacementDefinition !== null) {
      replacementDefinitions.push(replacementDefinition);
    }
  }

  return recursiveDefinition;
}

function replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionRecursiveDefinition = (definition instanceof RecursiveDefinition),
          recursiveDefinition = definitionRecursiveDefinition ?
                                  definition :  ///
                                    replaceDefinition(ruleName, definition, recursiveDefinitions, replacementDefinitions, rules);

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => recursiveRuleNameFromRecursiveDefinition(previousRecursiveDefinition)),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteReplacementDefinitions(replacementDefinitions, rules) {
  replacementDefinitions.forEach((replacementDefinition) => replacementDefinition.rewrite(rules));
}

function recursiveRuleNameFromRecursiveDefinition(recursiveDefinition) {
  const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveRuleName = recursiveDefinitionRuleName;  ///

  return recursiveRuleName;

}
