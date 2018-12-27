'use strict';

const parsers = require('occam-parsers');

const definitionUtilities = require('../utilities/definition');

const { isFirstPartRuleNamePart } = definitionUtilities;

const { Definition, Parts } = parsers,
      { RuleNamePart } = Parts;

class UnitDefinition extends Definition {
  getRuleName() {
    const firstPart = this.getFirstPart(),
          ruleNamePart = firstPart, ///
          ruleName = ruleNamePart.getRuleName();
    
    return ruleName;
  }

  static fromRuleName(ruleName) {
    const noWhitespace = false, ///
          ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
          parts = [
            ruleNamePart
          ],
          unitDefinition = new UnitDefinition(parts);

    return unitDefinition;
  }

  static fromDefinition(definition) {
    let unitDefinition = null;

    const partsLength = definition.getPartsLength();

    if (partsLength === 1) {
      const firstPartRuleNamePart = isFirstPartRuleNamePart(definition);
      
      if (firstPartRuleNamePart) {
        const parts = definition.getParts();

        unitDefinition = new UnitDefinition(parts);
      }
    }

    return unitDefinition;
  }
}

module.exports = UnitDefinition;
