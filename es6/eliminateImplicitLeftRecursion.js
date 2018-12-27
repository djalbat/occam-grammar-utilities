'use strict';

const IntermediateRule = require('./rule/intermediate'),
      RightRecursiveRule = require('./rule/rightRecursive'),
      ImplicitlyLeftRecursiveRule = require('./rule/implicitlyLeftRecursive'),
      ImmediatelyLeftRecursiveRule = require('./rule/immediatelyLeftRecursive'),
      NonImmediatelyLeftRecursiveRule = require('./rule/nonImmediatelyLeftRecursive');

function eliminateImplicitLeftRecursion(rules) {
  const rightRecursiveRules = [],
        nonImmediatelyLeftRecursiveRules = [];

  rules.forEach(function(rule, index) {
    const begin = 0,
          end = index,  ///
          previousNonLeftRecursiveRules = nonImmediatelyLeftRecursiveRules.slice(begin, end),
          previousRules = previousNonLeftRecursiveRules,  ///
          implicitlyLeftRecursiveRule = ImplicitlyLeftRecursiveRule.fromRuleAndPreviousRules(rule, previousRules);

    if (implicitlyLeftRecursiveRule !== null) {
      const intermediateRule = IntermediateRule.fromImplicitlyLeftRecursiveRuleAndPreviousRules(implicitlyLeftRecursiveRule, previousRules);

      rule = intermediateRule;  ///
    }

    const immediatelyLeftRecursiveRule = ImmediatelyLeftRecursiveRule.fromRule(rule);

    if (immediatelyLeftRecursiveRule === null) {
      const nonImmediatelyLeftRecursiveRule = rule;  ///

      nonImmediatelyLeftRecursiveRules.push(nonImmediatelyLeftRecursiveRule);
    } else {
      const rightRecursiveRule = RightRecursiveRule.fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule),
            nonImmediatelyLeftRecursiveRule = NonImmediatelyLeftRecursiveRule.fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule);

      rightRecursiveRules.push(rightRecursiveRule);

      nonImmediatelyLeftRecursiveRules.push(nonImmediatelyLeftRecursiveRule);
    }
  });

  rules = [].concat(nonImmediatelyLeftRecursiveRules).concat(rightRecursiveRules);

  return rules;
}

module.exports = eliminateImplicitLeftRecursion;
