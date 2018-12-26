'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class ImmediatelyLeftRecursiveDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName) {
    let immediatelyLeftRecursiveDefinition = null;
    
    const definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();
    
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
