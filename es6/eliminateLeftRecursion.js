'use strict';

const Configuration = require('./configuration'),
      arrayUtilities = require('./utilities/array'),
      NonRecursiveRule = require('./rule/nonRecursive'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      RecursiveDefinition = require('./definition/recursive'),
      definitionUtilities = require('./utilities/definition'),
      NonRecursiveDefinition = require('./definition/nonRecursive');

const { first, last, forEachWithRemove } = arrayUtilities,
      { rightRecursiveRuleNameFromRuleName } = ruleNameUtilities,
      { ruleFromDefinition, isDDefinitionImmediateLeftRecursiveDefinition } = definitionUtilities;

function eliminateLeftRecursion(rules) {
  const configuration = Configuration.fromRules(rules);

  removeImmediateLeftRecursionFromRules(configuration);

  createNonRecursiveRules(configuration);

  createRightRecursiveRules(configuration);

  rewriteIndirectlyLeftRecursiveRules(configuration);
}

module.exports = eliminateLeftRecursion;

function removeImmediateLeftRecursionFromRules(configuration) {
  configuration.forEachRule((rule) => {
    const ruleNames = [];

    removeImmediateLeftRecursionFromRule(rule, ruleNames, configuration);
  });
}

function removeImmediateLeftRecursionFromRule(rule, ruleNames, configuration) {
  let definitionIndirectlyLeftRecursiveDefinition = false;

  const ruleName = rule.getName(),
        ruleNamesIncludesRuleName = ruleNames.includes(ruleName);

  if (ruleNamesIncludesRuleName) {
    return;
  }

  ruleNames = [ ...ruleNames, ruleName ];

  const definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const firstRuleName = first(ruleNames),
          ruleName = firstRuleName, ///
          definitionImmediatelyLeftRecursiveDefinition = isDDefinitionImmediateLeftRecursiveDefinition(definition, ruleName);

    if (definitionImmediatelyLeftRecursiveDefinition) {
      const lastRuleName = last(ruleNames),
            ruleName = lastRuleName,  ///
            immediatelyLeftRecursiveDefinition = definition;  ///

      configuration.mapImmediatelyLeftRecursiveDefinition(ruleName, immediatelyLeftRecursiveDefinition);

      definitionIndirectlyLeftRecursiveDefinition = true;

      return true;
    }

    const rules = configuration.getRules(),
          rule = ruleFromDefinition(definition, rules);

    if (rule !== null) {
      const definitionIndirectlyLeftRecursiveDefinition = removeImmediateLeftRecursionFromRule(rule, ruleNames, configuration);

      if (definitionIndirectlyLeftRecursiveDefinition) {
        const indirectlyLeftRecursiveDefinition = definition; ///

        configuration.mapIndirectlyLeftRecursiveDefinition(ruleName, indirectlyLeftRecursiveDefinition);
      }
    }
  });

  return definitionIndirectlyLeftRecursiveDefinition;
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

    immediatelyLeftRecursiveDefinitions.forEach((immediatelyLeftRecursiveDefinition) => {
      const definition = immediatelyLeftRecursiveDefinition,  ///
            rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
            rightRecursiveRule = RightRecursiveRule.fromDefinitionAndRightRecursiveRuleName(definition, rightRecursiveRuleName),
            recursiveRuleName = rightRecursiveRule.getRecursiveRuleName(),
            recursiveDefinition = RecursiveDefinition.fromRecursiveRuleNameAndRightRecursiveRuleName(recursiveRuleName, rightRecursiveRuleName);

      rule.addDefinition(recursiveDefinition);

      configuration.addRightRecursiveRule(rightRecursiveRule);
    });

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
