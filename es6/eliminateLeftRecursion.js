'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      NonRecursiveDefinition = require('./definition/nonRecursive'),
      RightRecursiveDefinition = require('./definition/rightRecursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition');

const { addToArrayMap } = objectUtilities,
      { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitionsMap = {};

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);

  createNonRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  createRightRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition === null) {
      return true;
    }

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
  });
}

function createRightRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap);

  ruleNames.forEach((ruleName) => {
    const immediatelyLeftRecursiveDefinitionsMap = immediatelyLeftRecursiveDefinitionsMap[ruleName],
          rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitionsMap.map((immediatelyLeftRecursiveDefinition) => {
            const rightRecursiveDefinition = RightRecursiveDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

            return rightRecursiveDefinition;
          }),
          rightRecursiveRule = RightRecursiveRule.fromRuleNameAndRightRecursiveDefinitions(ruleName, rightRecursiveDefinitions);

    rules.push(rightRecursiveRule);
  });
}

function rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap);

  ruleNames.forEach((ruleName) => {
    const name = ruleName,  ///
          rule = findRuleByName(name, rules),
          recursiveDefinition = RecursiveDefinition.fromRuleName(ruleName),
          nonRecursiveDefinition = NonRecursiveDefinition.fromRuleName(ruleName);

    rule.addDefinition(recursiveDefinition);

    rule.addDefinition(nonRecursiveDefinition);
  });
}

function createNonRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap);

  ruleNames.forEach((ruleName) => {
    const name = ruleName,  ///
          rule = findRuleByName(name, rules),
          nonRecursiveRule = NonRecursiveRule.fromRule(rule);

    rules.push(nonRecursiveRule);

    rule.clearDefinitions();
  });
}
