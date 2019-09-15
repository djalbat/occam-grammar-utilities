'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      definitionUtilities = require('./utilities/definition'),
      NonTerminalDefinition = require('./definition/nonTerminal'),
      NonRecursiveDefinition = require('./definition/nonRecursive'),
      LeftRecursiveDefinition = require('./definition/leftRecursive'),
      RightRecursiveDefinition = require('./definition/rightRecursive'),
      IndirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/indirectly'),
      ImmediatelyLeftRecursiveDefinition = require('./definition/leftRecursive/immediately');

const { addToArrayMap } = objectUtilities,
      { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { ruleNamesFromDefinition, isDefinitionRecursiveDefinition, isDefinitionLeftRecursiveDefinition } = definitionUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitions = [];

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);

  createNonRecursiveRules(immediatelyLeftRecursiveDefinitions, rules);

  rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitions, rules);

  createRightRecursiveRules(immediatelyLeftRecursiveDefinitions, rules);
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      const recursiveDefinitionLeftRecursive = recursiveDefinition.isLeftRecursive();

      if (recursiveDefinitionLeftRecursive) {
        const leftRecursiveDefinition = recursiveDefinition,  ///
              leftRecursiveDefinitionStrictlyLeftRecursive = leftRecursiveDefinition.isStrictlyLeftRecursive();

        if (leftRecursiveDefinitionStrictlyLeftRecursive) {
          const strictlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
                immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

          immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

          return true;
        }

        const leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName();

        let cyclicRecursiveDefinition = null;

        recursiveDefinitions.some((recursiveDefinition) => {
          const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
                recursiveDefinitionRuleNameLeftRecursiveRuleName = (recursiveDefinitionRuleName === leftRecursiveRuleName);

          if (recursiveDefinitionRuleNameLeftRecursiveRuleName) {
            cyclicRecursiveDefinition = recursiveDefinition;  ///

            return true;
          }
        });

        if (cyclicRecursiveDefinition !== null) {
          const index = recursiveDefinitions.indexOf(cyclicRecursiveDefinition),
                cyclicRecursiveDefinitions = recursiveDefinitions.slice(index),
                cyclicRecursiveDefinitionsLeftRecursive = cyclicRecursiveDefinitions.every((cyclicRecursiveDefinition) => {
                  const cyclicRecursiveDefinitionLeftRecursive = cyclicRecursiveDefinition.isLeftRecursive();

                  if (cyclicRecursiveDefinitionLeftRecursive) {
                    return true;
                  }
                });

          if (cyclicRecursiveDefinitionsLeftRecursive) {
            const indirectlyLeftRecursiveDefinition = cyclicRecursiveDefinition,  ///
                  immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

            immediatelyLeftRecursiveDefinition.setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

            immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

            return true;
          }

          return;
        }
      }

      recursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ];

      const ruleNames = ruleNamesFromDefinition(definition);

      ruleNames.forEach((ruleName) => {
        const name = ruleName,  ///
              rule = findRuleByName(name, rules);

        if (rule !== null) {
          removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);
        }
      });
    } else {
      return true;
    }
  });
}

function createRightRecursiveRules(immediatelyLeftRecursiveDefinitions, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitions);

  ruleNames.forEach((ruleName) => {
    const immediatelyLeftRecursiveDefinitions = immediatelyLeftRecursiveDefinitions[ruleName],
          rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => {
            const rightRecursiveDefinition = RightRecursiveDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

            return rightRecursiveDefinition;
          }),
          rightRecursiveRule = RightRecursiveRule.fromRuleNameAndRightRecursiveDefinitions(ruleName, rightRecursiveDefinitions);

    rules.push(rightRecursiveRule);
  });
}

function rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitions, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitions);

  ruleNames.forEach((ruleName) => {
    const name = ruleName,  ///
          rule = findRuleByName(name, rules),
          recursiveDefinition = RecursiveDefinition.fromRuleName(ruleName),
          nonRecursiveDefinition = NonRecursiveDefinition.fromRuleName(ruleName);

    rule.addDefinition(recursiveDefinition);

    rule.addDefinition(nonRecursiveDefinition);
  });
}

function createNonRecursiveRules(immediatelyLeftRecursiveDefinitions, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitions);

  ruleNames.forEach((ruleName) => {
    const name = ruleName,  ///
          rule = findRuleByName(name, rules),
          nonRecursiveRule = NonRecursiveRule.fromRule(rule);

    rules.push(nonRecursiveRule);

    rule.clearDefinitions();
  });
}
