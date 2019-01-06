'use strict';

const eliminateOrphanedRules = require('./eliminateOrphanedRules'),
      eliminateImplicitLeftRecursion = require('./eliminateImplicitLeftRecursion');

function eliminateLeftRecursion(rules) {
  rules = eliminateImplicitLeftRecursion(rules);

  rules = eliminateOrphanedRules(rules);

  return rules;
}

module.exports = eliminateLeftRecursion;
