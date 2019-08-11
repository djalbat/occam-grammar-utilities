'use strict';

const RightRecursiveRule = require('./rule/rightRecursive'),
      ImmediatelyLeftRecursiveRule = require('./rule/immediatelyLeftRecursive'),
      NonImmediatelyLeftRecursiveRule = require('./rule/nonImmediatelyLeftRecursive');

function eliminateImmediateLeftRecursion(rules) {
  const rightRecursiveRules = [],
        nonImmediatelyLeftRecursiveRules = [];

  rules.forEach(function(rule) {
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

module.exports = eliminateImmediateLeftRecursion;
