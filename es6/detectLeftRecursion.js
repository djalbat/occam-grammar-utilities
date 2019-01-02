'use strict';

const detectImplicitLeftRecursion = require('./detectImplicitLeftRecursion');

function detectLeftRecursion(rules) {
  const leftRecursiveRuleName = detectImplicitLeftRecursion(rules);

  return leftRecursiveRuleName;
}

module.exports = detectLeftRecursion;
