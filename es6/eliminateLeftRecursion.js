'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      RecursiveDefinition = require('./definition/recursive'),
      LeftRecursiveDefinition = require('./definition/leftRecursive'),
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
      const leftRecursiveDefinition = LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

      if (leftRecursiveDefinition !== null) {
        replacementDefinition = leftRecursiveDefinition;  ///
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

    let recursiveDefinition;

    if (replacementDefinition !== null) {
      recursiveDefinition = replacementDefinition;  ///
    } else {
      const definitionRecursiveDefinition = (definition instanceof RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        recursiveDefinition = definition; ///
      }
    }

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = [ ...recursiveDefinitions ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => recursiveRuleNameFromRecursiveDefinition(previousRecursiveDefinition)),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules),
                recursiveDefinitions = [ ...previousRecursiveDefinitions, recursiveDefinition ];

          if (rule !== null) {
            replaceDefinitions(rule, recursiveDefinitions, replacementDefinitions, rules);
          }
        }
      });
    }

    return replacementDefinition;
  });
}

function recursiveRuleNameFromRecursiveDefinition(recursiveDefinition) {
  const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveRuleName = recursiveDefinitionRuleName;  ///

  return recursiveRuleName;

}
