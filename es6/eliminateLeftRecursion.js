'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      definitionUtilities = require('./utilities/definition'),
      LeftRecursiveDefinition = require('./definition/leftRecursive'),
      DirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/directly'),
      IndirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/indirectly');

const { findRule } = ruleUtilities,
      { first, forEachWithReplace } = arrayUtilities,
      { recursiveRuleNamesFromDefinition } = definitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveRuleNames = [],
        replacementDefinitions = [];

  replaceDefinitions(rule, recursiveRuleNames, replacementDefinitions, rules);

  replacementDefinitions.forEach((replacementDefinition) => replacementDefinition.rewrite(rules));
}

module.exports = eliminateLeftRecursion;

function replaceDefinitions(rule, recursiveRuleNames, replacementDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithReplace(definitions, (definition) => {
    let replacementDefinition = null;

    const definitionLeftRecursiveDefinition = (definition instanceof LeftRecursiveDefinition);

    if (!definitionLeftRecursiveDefinition) {
      if (replacementDefinition === null) {
        const directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

        if (directlyLeftRecursiveDefinition !== null) {
          replacementDefinition = directlyLeftRecursiveDefinition;  ///
        }
      }

      if (replacementDefinition === null) {
        const indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveRuleNames(ruleName, definition, recursiveRuleNames);

        if (indirectlyLeftRecursiveDefinition !== null) {
          replacementDefinition = indirectlyLeftRecursiveDefinition;  ///
        }
      }
    }

    if (replacementDefinition !== null) {
      replacementDefinitions.push(replacementDefinition);
    }

    const previousRecursiveRuleNames = recursiveRuleNames;  ///

    recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

    const recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = (recursiveRuleNamesLength > 0);

    if (definitionRecursive) {
      const recursiveRuleName = ruleName; ///

      recursiveRuleNames = [ ...previousRecursiveRuleNames, recursiveRuleName ];

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveRuleNamesIncludesRecursiveRuleName = recursiveRuleNames.includes(recursiveRuleName);

        if (!recursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            replaceDefinitions(rule, recursiveRuleNames, replacementDefinitions, rules);
          }
        }
      });
    }

    return replacementDefinition;
  });
}
