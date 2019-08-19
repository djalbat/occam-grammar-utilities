'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class NonRecursiveDefinition extends Definition {
  static fromNonRecursiveRuleName(nonRecursiveRuleName) {
    const nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart
          ],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

    return nonRecursiveDefinition;
  }
}

module.exports = NonRecursiveDefinition;
