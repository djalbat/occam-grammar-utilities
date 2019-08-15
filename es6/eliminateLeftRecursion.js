'use strict';

const leftRecursionUtilities = require('./utilities/leftRecursion');

const { eliminateLeftRecursionFromRule } = leftRecursionUtilities;

function eliminateLeftRecursion(rules) {
  rules.forEach((rule) => {
    const ruleImmediatelyLeftRecursive = eliminateLeftRecursionFromRule(rule, rules);

  });

  return rules;
}

module.exports = eliminateLeftRecursion;
