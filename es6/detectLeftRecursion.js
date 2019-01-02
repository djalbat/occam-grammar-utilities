'use strict';

const eliminateCycles = require('./eliminateCycles'),
      detectImplicitLeftRecursion = require('./detectImplicitLeftRecursion');

function detectLeftRecursion(rules) {
  rules = eliminateCycles(rules);

  const leftRecursiveRuleName = detectImplicitLeftRecursion(rules);

  return leftRecursiveRuleName;
}

module.exports = detectLeftRecursion;
