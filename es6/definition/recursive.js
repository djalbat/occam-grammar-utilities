'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part');

const { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities;

class RecursiveDefinition extends Definition {
  static fromNonRecursiveRuleNameAndRightRecursiveRuleName(nonRecursiveRuleName, rightRecursiveRuleName) {
    const nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [
            nonRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          recursiveDefinition = new Definition(parts);

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
