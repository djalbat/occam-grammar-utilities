'use strict';

const ReducedRule = require('./rule/reduced'),
      RepeatedRule = require('./rule/repeated'),
      ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RuleNameDefinition = require('./definition/ruleName'),
      RepeatedDefinition = require('./definition/repeated'),
      RewrittenDefinition = require('./definition/rewritten'),
      RecursiveDefinition = require('./definition/recursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition');

const { findRule } = ruleUtilities,
      { first, forEachWithRemove } = arrayUtilities,
      { findIndirectlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
      { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        immediatelyLeftRecursiveDefinitions = [];

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);

  rewriteImmediatelyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules);

  const ruleNames = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.getRuleName()),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength > 0) {
    const ruleNamesString = ruleNames.reduce((ruleNamesString, ruleName) => {
      ruleNamesString = (ruleNamesString !== '') ?
                         `${ruleNamesString}, '${ruleName}'` :
                          `'${ruleName}'`;

      return ruleNamesString;
    }, '');

    throw new Error(`Left recursion cannot be eliminated from the folliowing rule or rules: ${ruleNamesString}.`);
  }
}

module.exports = eliminateLeftRecursion;

function removeStrictlyLeftRecursiveDefinition(recursiveDefinition, immediatelyLeftRecursiveDefinitions) {
  const recursiveDefinitionStrictlyLeftRecursive = recursiveDefinition.isStrictlyLeftRecursive();

  if (recursiveDefinitionStrictlyLeftRecursive) {
    const strictlyLeftRecursiveDefinition = recursiveDefinition,  ///
          immediatelyLeftRecursiveDefinition = strictlyLeftRecursiveDefinition; ///

    immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

    return true;
  }
}

function removeNonStrictlyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions) {
  const recursiveDefinitionNonStrictlyLeftRecursive = recursiveDefinition.isNonStrictlyLeftRecursive();

  if (recursiveDefinitionNonStrictlyLeftRecursive) {
    const nonStrictlyLeftRecursiveDefinition = recursiveDefinition,  ///
          leftRecursiveDefinition = nonStrictlyLeftRecursiveDefinition, ///
          indirectlyLeftRecursiveDefinition = findIndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

    if (indirectlyLeftRecursiveDefinition !== null) {
      const indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
            implicitDefinition = indirectlyLeftRecursiveDefinitionDefinition; ///

      nonStrictlyLeftRecursiveDefinition.setImplicitDefinition(implicitDefinition);

      const immediatelyLeftRecursiveDefinition = nonStrictlyLeftRecursiveDefinition; ///

      immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

      return true;
    }
  }
}

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
      const remove = removeStrictlyLeftRecursiveDefinition(recursiveDefinition, immediatelyLeftRecursiveDefinitions)
                   || removeNonStrictlyLeftRecursiveDefinition(recursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions);

      if (remove) {
        return true;
      }

      const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            allRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            allRecursiveDefinitionRuleNames = allRecursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = allRecursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            const recursiveDefinitions = allRecursiveDefinitions;  ///

            removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteImmediatelyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules) {
  forEachWithRemove(immediatelyLeftRecursiveDefinitions, (immediatelyLeftRecursiveDefinition) => {
    const rewritable = immediatelyLeftRecursiveDefinition.isRewritable();

    if (rewritable) {
      const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
            rule = findRule(ruleName, rules),
            reducedRule = reducedRuleFromRule(rule, rules),
            rewrittenDefinition = RewrittenDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

      (reducedRule === null) ?
        rule.addDefinition(rewrittenDefinition) :
          rule.addDefinition(rewrittenDefinition, -1);

      const leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
            repeatedDefinition = RepeatedDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition),
            repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

      repeatedRule.addDefinition(repeatedDefinition);

      const implicitDefinition = immediatelyLeftRecursiveDefinition.getImplicitDefinition();

      if (implicitDefinition !== null) {
        const leftRecursiveRule = findRule(leftRecursiveRuleName, rules),
              reducedLeftRecursiveRule = reducedRuleFromRule(leftRecursiveRule, rules);

        reducedLeftRecursiveRule.removeDefinition(implicitDefinition);

        leftRecursiveRule.addDefinition(implicitDefinition, -1);
      }

      return true;
    }
  });
}

function repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules) {
  const ruleName = leftRecursiveRuleName, ///
        repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

  let repeatedRule = findRule(repeatedRuleName, rules);

  if (repeatedRule === null) {
    repeatedRule = RepeatedRule.fromRepeatedRuleName(repeatedRuleName);

    rules.push(repeatedRule);
  }

  return repeatedRule;
}

function reducedRuleFromRule(rule, rules) {
  const ruleName = rule.getName(),
        reducedRuleName = reducedRuleNameFromRuleName(ruleName);

  let reducedRule = findRule(reducedRuleName, rules);

  if (reducedRule === null) {
    reducedRule = ReducedRule.fromReducedRuleNameAndRule(reducedRuleName, rule);

    if (reducedRule !== null) {
      rules.push(reducedRule);

      const reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
            definitions = [
              reducedRuleNameDefinition
            ];

      rule.setDefinitions(definitions);
    }
  }

  return reducedRule;
}
