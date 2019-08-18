'use strict';

const recursionUtilities = require('./utilities/recursion');

const { eliminateLeftRecursionFromRule } = recursionUtilities;

function eliminateLeftRecursion(rules) {
  const ruleNames = [];  ///

  rules.forEach((rule) => eliminateLeftRecursionFromRule(rule, ruleNames, rules));

  return rules;
}

module.exports = eliminateLeftRecursion;
