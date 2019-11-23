'use strict';

const parsers = require('occam-parsers');

const partUtilities = require('../utilities/part'),
      partsUtilities = require('../utilities/parts'),
      ruleNameUtilities = require('../utilities/ruleName'),
      definitionUtilities = require('../utilities/definition');

const { Definition } = parsers,
      { cloneParts } = partsUtilities,
      { isDefinitionLookAhead } = definitionUtilities,
      { repeatedRuleNameFromRuleName, reducedRuleNameFromRuleName } = ruleNameUtilities,
      { ruleNamePartFromRuleName, zeroOrMoreRuleNamePartPartFromRuleName } = partUtilities;

class RewrittenDefinition extends Definition {
  static fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    parts.shift();  ///

    const definitionLookAhead = isDefinitionLookAhead(definition),
          lookAhead = definitionLookAhead,  ///
          repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
          reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
          zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
          reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
          rewrittenDefinition = new RewrittenDefinition(parts);

    parts.unshift(reducedLeftRecursiveRuleNamePart);

    parts.push(zeroOrMoreRepeatedRuleNamePart);

    return rewrittenDefinition;
  }
}

module.exports = RewrittenDefinition;
