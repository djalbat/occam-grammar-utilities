'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      definitionUtilities = require('./utilities/definition'),
      NonRecursiveDefinition = require('./definition/nonRecursive'),
      LeftRecursiveDefinition = require('./definition/leftRecursive'),
      RightRecursiveDefinition = require('./definition/rightRecursive'),
      IndirectlyLeftRecursiveDefinition = require('./definition/leftRecursive/indirectly'),
      ImmediatelyLeftRecursiveDefinition = require('./definition/leftRecursive/immediately');

const { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { isDefinitionLeftRecursive } = definitionUtilities,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        leftRecursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitions = [];

  removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);

  // createNonRecursiveRules(configuration);
  //
  // createRightRecursiveRules(configuration);
  //
  // rewriteIndirectlyLeftRecursiveRules(configuration);
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveDefinition = LeftRecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName),
            leftRecursiveDefinitionImmediatelyLeftRecursive = leftRecursiveDefinition.isImmediatelyLeftRecursive(leftRecursiveDefinitions);

      if (leftRecursiveDefinitionImmediatelyLeftRecursive) {
        const indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromLeftRecursiveDefinitionAndLeftRecursiveDefinitions(leftRecursiveDefinition, leftRecursiveDefinitions),
              immediatelyLeftRecursiveDefinition = ImmediatelyLeftRecursiveDefinition.fromLeftRecursiveDefinitionAndIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, indirectlyLeftRecursiveDefinition);

        immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

        return true;
      }

      leftRecursiveDefinitions = [ ...leftRecursiveDefinitions, leftRecursiveDefinition ];

      const rule = ruleFromLeftRecursiveDefinition(leftRecursiveDefinition, rules);

      if (rule !== null) {
        removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);
      }
    }
  });
}

function rewriteIndirectlyLeftRecursiveRules(configuration) {
  configuration.forEachIndirectlyLeftRecursiveRule((indirectlyRecursiveRule) => {
    const rule = indirectlyRecursiveRule, ///
          ruleName = rule.getName(),
          nonRecursiveRule = NonRecursiveRule.fromRuleName(ruleName);

    configuration.addNonRecursiveRule(nonRecursiveRule);

    const definitions = rule.getDefinitions();

    forEachWithRemove(definitions, (definition) => {
      const definitionIndirectlyRecursiveDefinition = configuration.isDefinitionIndirectlyLeftRecursiveDefinition(definition, ruleName),
            definitionNonRecursiveDefinition = !definitionIndirectlyRecursiveDefinition;

      if (definitionNonRecursiveDefinition) {
        const nonRecursiveDefinition = definition;  ///

        nonRecursiveRule.addNonRecursiveDefinition(nonRecursiveDefinition);

        return true;
      }
    });

    const nonRecursiveDefinition = NonRecursiveDefinition.fromRuleName(ruleName);

    rule.addDefinition(nonRecursiveDefinition);
  });
}

function createRightRecursiveRules(configuration) {
  configuration.forEachImmediatelyLeftRecursiveRuleName((immediatelyLeftRecursiveRuleName) => {
    const ruleName = immediatelyLeftRecursiveRuleName,  ///
          rule = configuration.findRule(ruleName),
          immediatelyLeftRecursiveDefinitions = configuration.getImmediatelyLeftRecursiveDefinitions(ruleName);

    const rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          rightRecursiveRule = RightRecursiveRule.fromRightRecursiveRuleName(rightRecursiveRuleName);

    immediatelyLeftRecursiveDefinitions.forEach((immediatelyLeftRecursiveDefinition) => {
      const definition = immediatelyLeftRecursiveDefinition,  ///
            rightRecursiveDefinition = RightRecursiveDefinition.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
            recursiveRuleName = rightRecursiveDefinition.getRecursiveRuleName(),
            recursiveDefinition = RecursiveDefinition.fromRecursiveRuleNameAndRightRecursiveRuleName(recursiveRuleName, rightRecursiveRuleName);

      rightRecursiveRule.addRightRecursiveDefinition(rightRecursiveDefinition);

      rule.addDefinition(recursiveDefinition);
    });

    configuration.addRightRecursiveRule(rightRecursiveRule);

    const nonRecursiveDefinition = NonRecursiveDefinition.fromRuleName(ruleName);

    rule.addDefinition(nonRecursiveDefinition);
  });
}

function createNonRecursiveRules(configuration) {
  configuration.forEachImmediatelyLeftRecursiveRule((immediatelyLeftRecursiveRule) => {
    const rule = immediatelyLeftRecursiveRule,  ///
          nonRecursiveRule = NonRecursiveRule.fromRule(rule);

    configuration.addNonRecursiveRule(nonRecursiveRule);

    rule.clearDefinitions();
  });
}

function ruleFromLeftRecursiveDefinition(leftRecursiveDefinition, rules) {
  const leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
        name = leftRecursiveRuleName, ///
        rule = findRuleByName(name, rules);

  return rule;
}
