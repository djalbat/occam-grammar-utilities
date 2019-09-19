'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition'),
      NonRecursiveRuleNameDefinition = require('./definition/nonRecursiveRuleName'),
      NonRecursiveAndRightRecursiveRuleNamesDefinition = require('./definition/nonRecursiveAndRightRecursiveRuleNames');

const { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { addToArrayMap, forEachKeyWithRemove } = objectUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitionsMap = {};

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);

  rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      const recursiveDefinitionStrictlyLeftRecursive = recursiveDefinition.isStrictlyLeftRecursive();

      if (recursiveDefinitionStrictlyLeftRecursive) {
        const strictlyLeftRecursiveDefinition = recursiveDefinition,  ///
              immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

        addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

        return true;
      }

      const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

      if (recursiveDefinitionLeftRecursive) {
        const leftRecursiveDefinition = recursiveDefinition,  ///
              indirectlyLeftRecursiveDefinition = findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

        if (indirectlyLeftRecursiveDefinition !== null) {
          const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

          immediatelyLeftRecursiveDefinition.setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

          addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

          return true;
        }
      }

      recursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ];

      const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            recursiveDefinitionRuleNames = recursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = recursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const name = recursiveRuleName,  ///
                rule = findRuleByName(name, rules);

          if (rule !== null) {
            removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);
          }
        }
      });
    }
  });
}

function rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  forEachKeyWithRemove(immediatelyLeftRecursiveDefinitionsMap, (ruleName, immediatelyLeftRecursiveDefinitions) => {
    const name = ruleName,  ///
          rule = findRuleByName(name, rules),
          nonRecursiveRule = NonRecursiveRule.fromRule(rule),
          rightRecursiveRule = RightRecursiveRule.fromRuleNameAndImmediatelyLeftRecursiveRecursiveDefinitions(ruleName, immediatelyLeftRecursiveDefinitions);

    rules.push(nonRecursiveRule);

    rules.push(rightRecursiveRule);

    const firstImmediatelyLeftRecursiveDefinition = first(immediatelyLeftRecursiveDefinitions),
          immediatelyLeftRecursiveDefinition = firstImmediatelyLeftRecursiveDefinition, ///
          nonRecursiveRuleNameDefinition = NonRecursiveRuleNameDefinition.fromRuleName(ruleName),
          nonRecursiveAndRightRecursiveRuleNamesDefinition = NonRecursiveAndRightRecursiveRuleNamesDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition),
          definitions = [
            nonRecursiveAndRightRecursiveRuleNamesDefinition,
            nonRecursiveRuleNameDefinition
          ];

    rule.setDefinitions(definitions);
  });
}
