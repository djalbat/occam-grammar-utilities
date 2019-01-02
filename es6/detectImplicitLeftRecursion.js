'use strict';

const ImplicitlyLeftRecursiveRule = require('./rule/implicitlyLeftRecursive'),
      ImmediatelyLeftRecursiveRule = require('./rule/immediatelyLeftRecursive');

function detectImplicitLeftRecursion(rules) {
  let leftRecursiveRuleName = null;

  const nonImmediatelyLeftRecursiveRules = [];

  rules.some(function(rule, index) {
    const begin = 0,
          end = index,  ///
          previousNonLeftRecursiveRules = nonImmediatelyLeftRecursiveRules.slice(begin, end),
          previousRules = previousNonLeftRecursiveRules;  ///

    const implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousRules(rule, previousRules);

    if (implicitlyLeftRecursiveRule !== null) {
      const implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveRule.getName();

      leftRecursiveRuleName = implicitlyLeftRecursiveRuleName;  ///

      return true;
    }

    const immediatelyLeftRecursiveRule = ImmediatelyLeftRecursiveRule.fromRule(rule);

    if (immediatelyLeftRecursiveRule !== null) {
      const immediatelyLeftRecursiveRuleName = immediatelyLeftRecursiveRule.getName();

      leftRecursiveRuleName = immediatelyLeftRecursiveRuleName;  ///

      return true;
    }
  });

  return leftRecursiveRuleName;
}

module.exports = detectImplicitLeftRecursion;
