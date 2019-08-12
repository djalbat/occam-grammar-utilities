'use strict';

const parsers = require('occam-parsers');

const partsUtilities = require('../utilities/parts'),
      arrayUtilities = require('../utilities/array'),
      RightRecursiveRuleNamePart = require('../part/rightRecursiveRuleName');

const { first } = arrayUtilities,
      { Definition } = parsers,
      { cloneParts } = partsUtilities;

class NonLeftRecursiveDefinition extends Definition {
  static fromDefinitionAndRightRecursiveRule(definition, rightRecursiveRule) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const noWhitespace = rightRecursiveRule.hasNoWhitespace(),
          nonLeftRecursiveDefinition = new NonLeftRecursiveDefinition(parts),
          rightRecursiveRuleNamePart = RightRecursiveRuleNamePart.fromRightRecursiveRule(rightRecursiveRule);

    nonLeftRecursiveDefinition.addPart(rightRecursiveRuleNamePart);

    if (noWhitespace) {
      const firstPart = first(parts);

      firstPart.setNoWhitespace(noWhitespace);
    }

    return nonLeftRecursiveDefinition;
  }
}

module.exports = NonLeftRecursiveDefinition;
