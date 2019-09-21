'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array'),
      ruleNameUtilities = require('../utilities/ruleName');

const { first } = arrayUtilities,
      { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { nonLeftRecursiveRuleNameFromLeftRecursiveRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class NonLeftRecursiveAndRightRecursiveRuleNamesDefinition extends Definition {
  isLookAhead() {
    const parts = this.getParts(),
          firstPart = first(parts),
          nonLeftRecursiveRuleNamePart = firstPart, ///
          lookAhead = nonLeftRecursiveRuleNamePart.isLookAhead();

    return lookAhead;
  }

  static fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
    const nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          nonLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(nonLeftRecursiveRuleName, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          ruleNameParts = [
            nonLeftRecursiveRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          parts = ruleNameParts,  ///
          nonLeftRecursiveAndRightRecursiveRuleNamesDefinition = new NonLeftRecursiveAndRightRecursiveRuleNamesDefinition(parts);

    return nonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
  }
}

module.exports = NonLeftRecursiveAndRightRecursiveRuleNamesDefinition;
