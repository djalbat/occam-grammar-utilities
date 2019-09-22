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
      { first, addInFrontOfLast, forEachWithRemove } = arrayUtilities,
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
      nonStrictlyLeftRecursiveDefinition.setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition);

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
            recursiveDefinitionRuleNames = [ ...recursiveDefinitions, recursiveDefinition ].map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = recursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            removeImmediatelyLeftRecursiveDefinitions(rule, [ ...recursiveDefinitions, recursiveDefinition ], immediatelyLeftRecursiveDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules) {
  const strictlyLeftRecursive = immediatelyLeftRecursiveDefinition.isStrictlyLeftRecursive();

  if (strictlyLeftRecursive) {
    let definitions;

    const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          rule = findRule(ruleName, rules);

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    let reducedRule = findRule(reducedRuleName, rules);

    if (reducedRule === null) {
      let definitions;

      definitions = rule.getDefinitions();

      reducedRule = ReducedRule.fromReducedRuleNameAndDefinitions(reducedRuleName, definitions);

      rules.push(reducedRule);

      const reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

      definitions = [
        reducedRuleNameDefinition
      ];

      rule.setDefinitions(definitions);
    }

    definitions = rule.getDefinitions();

    const rewrittenDefinition = RewrittenDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

    addInFrontOfLast(definitions, rewrittenDefinition);

    const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

    let repeatedRule = findRule(repeatedRuleName, rules);

    if (repeatedRule === null) {
      repeatedRule = RepeatedRule.fromRepeatedRuleName(repeatedRuleName);

      rules.push(repeatedRule);
    }

    const repeatedDefinition = RepeatedDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

    repeatedRule.addDefinition(repeatedDefinition);

    return true;
  }
}

function rewriteNonStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules) {
  const nonStrictlyLeftRecursive = immediatelyLeftRecursiveDefinition.isNonStrictlyLeftRecursive();

  if (nonStrictlyLeftRecursive) {
    let definitions;

    const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
          rule = findRule(ruleName, rules);

    const reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    let reducedRule = findRule(reducedRuleName, rules);

    if (reducedRule === null) {
      let definitions;

      definitions = rule.getDefinitions();

      reducedRule = ReducedRule.fromReducedRuleNameAndDefinitions(reducedRuleName, definitions);

      rules.push(reducedRule);

      const reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName);

      definitions = [
        reducedRuleNameDefinition
      ];

      rule.setDefinitions(definitions);
    }

    definitions = rule.getDefinitions();

    const rewrittenDefinition = RewrittenDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

    addInFrontOfLast(definitions, rewrittenDefinition);

    const leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName);

    let repeatedRule = findRule(repeatedRuleName, rules);

    if (repeatedRule === null) {
      repeatedRule = RepeatedRule.fromRepeatedRuleName(repeatedRuleName);

      rules.push(repeatedRule);
    }

    const repeatedDefinition = RepeatedDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

    repeatedRule.addDefinition(repeatedDefinition);

    const leftRecursiveRule = findRule(leftRecursiveRuleName, rules);

    const reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName);

    let reducedLeftRecursiveRule = findRule(reducedLeftRecursiveRuleName, rules);

    if (reducedLeftRecursiveRule === null) {
      let definitions;

      definitions = leftRecursiveRule.getDefinitions();

      reducedLeftRecursiveRule = ReducedRule.fromReducedRuleNameAndDefinitions(reducedLeftRecursiveRuleName, definitions);

      rules.push(reducedLeftRecursiveRule);

      const reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);

      definitions = [
        reducedLeftRecursiveRuleNameDefinition
      ];

      leftRecursiveRule.setDefinitions(definitions);
    }

    const indirectlyLeftRecursiveDefinition = immediatelyLeftRecursiveDefinition.getIndirectlyLeftRecursiveDefinition(),
          definition = indirectlyLeftRecursiveDefinition.getDefinition();

    definitions = leftRecursiveRule.getDefinitions();

    reducedLeftRecursiveRule.removeDefinition(definition);

    addInFrontOfLast(definitions, definition);

    return true;
  }
}

function rewriteImmediatelyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules) {
  forEachWithRemove(immediatelyLeftRecursiveDefinitions, (immediatelyLeftRecursiveDefinition) => {
    const rewritable = immediatelyLeftRecursiveDefinition.isRewritable();

    if (rewritable) {
      const remove = rewriteStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules)
                   || rewriteNonStrictlyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules);

      if (remove) {
        return true;
      }
    }
  });
}
