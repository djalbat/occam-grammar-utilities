'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      arrayUtilities = require('../utilities/array'),
      ruleNameUtilities = require('../utilities/ruleName');

const { first } = arrayUtilities,
      { Definition } = parsers,
      { ruleNamePartFromRuleName } = partUtilities,
      { reducedRuleNameFromLeftRecursiveRuleName, repeatedRuleNameFromRuleName } = ruleNameUtilities;

class ReducedAndRepeatedRuleNamesDefinition extends Definition {
  isLookAhead() {
    const parts = this.getParts(),
          firstPart = first(parts),
          reducedRuleNamePart = firstPart, ///
          lookAhead = reducedRuleNamePart.isLookAhead();

    return lookAhead;
  }

  static fromRuleNameLeftRecursiveRuleNameAndLookAhead(ruleName, leftRecursiveRuleName, lookAhead) {
    const reducedRuleName = reducedRuleNameFromLeftRecursiveRuleName(leftRecursiveRuleName),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          reducedRuleNamePart = ruleNamePartFromRuleName(reducedRuleName, lookAhead),
          repeatedRuleNamePart = ruleNamePartFromRuleName(repeatedRuleName),
          ruleNameParts = [
            reducedRuleNamePart,
            repeatedRuleNamePart
          ],
          parts = ruleNameParts,  ///
          reducedAndRepeatedRuleNamesDefinition = new ReducedAndRepeatedRuleNamesDefinition(parts);

    return reducedAndRepeatedRuleNamesDefinition;
  }
}

module.exports = ReducedAndRepeatedRuleNamesDefinition;
