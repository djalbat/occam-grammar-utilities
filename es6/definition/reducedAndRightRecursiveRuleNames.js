'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array'),
      ruleNameUtilities = require('../utilities/ruleName');

const { first } = arrayUtilities,
      { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { reducedRuleNameFromLeftRecursiveRuleName, rightRecursiveRuleNameFromRuleName } = ruleNameUtilities;

class ReducedAndRightRecursiveRuleNamesDefinition extends Definition {
  isLookAhead() {
    const parts = this.getParts(),
          firstPart = first(parts),
          reducedRuleNamePart = firstPart, ///
          lookAhead = reducedRuleNamePart.isLookAhead();

    return lookAhead;
  }

  static fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
    const reducedRuleName = reducedRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
          rightRecursiveRuleName = rightRecursiveRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName, lookAhead),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          ruleNameParts = [
            reducedRuleNamePart,
            rightRecursiveRuleNamePart
          ],
          parts = ruleNameParts,  ///
          reducedAndRightRecursiveRuleNamesDefinition = new ReducedAndRightRecursiveRuleNamesDefinition(parts);

    return reducedAndRightRecursiveRuleNamesDefinition;
  }
}

module.exports = ReducedAndRightRecursiveRuleNamesDefinition;
