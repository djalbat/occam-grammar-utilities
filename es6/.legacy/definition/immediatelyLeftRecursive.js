'use strict';

const parsers = require('occam-parsers');

const definitionUtilities = require('../utilities/definition');

const { Definition } = parsers,
      { isFirstPartRuleNamePart } = definitionUtilities;

class ImmediatelyLeftRecursiveDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName) {
    let immediatelyLeftRecursiveDefinition = null;
    
    const definitionFirstPartRuleNamePart = isFirstPartRuleNamePart(definition);
    
    if (definitionFirstPartRuleNamePart) {
      const definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,  ///
            definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName();
      
      if (definitionFirstRuleNamePartRuleName === ruleName) {
        const parts = definition.getParts();

        immediatelyLeftRecursiveDefinition = new ImmediatelyLeftRecursiveDefinition(parts);
      }
    }

    return immediatelyLeftRecursiveDefinition;
  }
}

module.exports = ImmediatelyLeftRecursiveDefinition;
