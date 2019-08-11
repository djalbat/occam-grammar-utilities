'use strict';

const ruleUtilities = require('./utilities/rule');

const { eliminateLeftRecursionFromRule } = ruleUtilities;

function eliminateLeftRecursion(rules) {
  rules.forEach((rule) => {
    const ruleImmediatelyLeftRecursive = eliminateLeftRecursionFromRule(rule, rules);

  });

  return rules;
}

module.exports = eliminateLeftRecursion;
