'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class LeftRecursiveDefinition extends Definition {
  static fromDefinitionAndRuleName(definition, ruleName) {
    let leftRecursiveDefinition = null;
    
    const definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();
    
    if (definitionFirstPartRuleNamePart) {
      const definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,  ///
            definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName();
      
      if (definitionFirstRuleNamePartRuleName === ruleName) {
        const parts = definition.getParts();

        leftRecursiveDefinition = new LeftRecursiveDefinition(parts);
      }
    }

    return leftRecursiveDefinition;
  }
}

module.exports = LeftRecursiveDefinition;
