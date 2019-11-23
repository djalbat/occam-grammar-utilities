'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      RecursiveDefinition = require('./definition/recursive'),
      DirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/directly'),
      IndirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/indirectly');

const { findRule } = ruleUtilities,
      { first, forEachWithReplace } = arrayUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        replacementDefinitions = [];

  replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules);

  replacementDefinitions.forEach((replacementDefinition) => replacementDefinition.rewrite(rules));
}

module.exports = eliminateLeftRecursion;

function replaceDefinition(ruleName, definition, recursiveDefinitions, replacementDefinitions) {
  let replacementDefinition = null;

  const definitionRecursiveDefinition = (definition instanceof RecursiveDefinition);

  if (!definitionRecursiveDefinition) {
    if (replacementDefinition === null) {
      const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

      if (directlyLeftRecursiveDefinition !== null) {
        replacementDefinition = directlyLeftRecursiveDefinition;  ///
      }
    }

    if (replacementDefinition === null) {
      const indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions);

      if (indirectlyLeftRecursiveDefinition !== null) {
        replacementDefinition = indirectlyLeftRecursiveDefinition;  ///
      }
    }

    if (replacementDefinition === null) {
      const recursiveDefinition = RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

      if (recursiveDefinition !== null) {
        replacementDefinition = recursiveDefinition;  ///
      }
    }
  }

  if (replacementDefinition !== null) {
    replacementDefinitions.push(replacementDefinition);
  }

  return replacementDefinition;
}

function replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithReplace(definitions, (definition) => {
    const replacementDefinition = replaceDefinition(ruleName, definition, recursiveDefinitions, replacementDefinitions);

    let recursiveDefinition = replacementDefinition;  ///

    if (recursiveDefinition === null) {
      const definitionRecursiveDefinition = (definition instanceof RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        recursiveDefinition = definition; ///
      }
    }

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = recursiveDefinitions;  ///

      recursiveDefinitions = [ ...previousRecursiveDefinitions, recursiveDefinition ];

      recursiveDefinitions.forEach((recursiveDefinition) => {
        const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
              recursiveRuleName = recursiveDefinitionRuleName,  ///
              recursiveRuleNames = recursiveDefinitions.map((recursiveDefinition) => {
                const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
                      recursiveRuleName = recursiveDefinitionRuleName;  ///

                return recursiveRuleName;
              }),
              recursiveRuleNamesIncludesRecursiveRuleName = recursiveRuleNames.includes(recursiveRuleName);

        if (!recursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules);
          }
        }
      });
    }

    return replacementDefinition;
  });
}
