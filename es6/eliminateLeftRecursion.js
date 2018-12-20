'use strict';

const eliminateCycles = require('./eliminateCycles'),
      eliminateImplicitLeftRecursion = require('./eliminateImplicitLeftRecursion');

function eliminateLeftRecursion(rules) {
  rules = eliminateCycles(rules);

  rules = eliminateImplicitLeftRecursion(rules);

  return rules;
}

module.exports = eliminateLeftRecursion;
