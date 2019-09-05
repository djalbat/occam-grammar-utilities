'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      objectUtilities = require('./utilities/object'),
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

const { addToArrayMap } = objectUtilities,
      { findRuleByName } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { isDefinitionLeftRecursive } = definitionUtilities,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        leftRecursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitionsMap = {};

  removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);

  createNonRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  rewriteLeftRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  createRightRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules);

  // createNonRecursiveRules(configuration);
  //
  // createRightRecursiveRules(configuration);
  //
  // rewriteIndirectlyLeftRecursiveRules(configuration);
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules) {
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

        addToArrayMap(immediatelyLeftRecursiveDefinitionsMap, ruleName, immediatelyLeftRecursiveDefinition);

        return true;
      }

      leftRecursiveDefinitions = [ ...leftRecursiveDefinitions, leftRecursiveDefinition ];

      const rule = leftRecursiveDefinition.findRule(rules);

      if (rule !== null) {
        removeImmediatelyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, immediatelyLeftRecursiveDefinitionsMap, rules);
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

function createRightRecursiveRules(immediatelyLeftRecursiveDefinitionsMap, rules) {
  const ruleNames = Object.keys(immediatelyLeftRecursiveDefinitionsMap);

  ruleNames.forEach((ruleName) => {
    const immediatelyLeftRecursiveDefinitions = immediatelyLeftRecursiveDefinitionsMap[ruleName],
          rightRecursiveDefinitions = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => {
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
