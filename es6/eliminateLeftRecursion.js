'use strict';

const recursionUtilities = require('./utilities/recursion');

const { eliminateLeftRecursionFromRule } = recursionUtilities;

function eliminateLeftRecursion(rules) {
  const ruleName = null;  ///

  rules.forEach((rule) => eliminateLeftRecursionFromRule(rule, ruleName, rules));

  return rules;
}

module.exports = eliminateLeftRecursion;
