'use strict';

const parsers = require('occam-parsers');

const { Definition } = parsers;

class IndirectlyLeftRecursiveDefinition extends Definition {
  static fromLeftRecursiveDefinitionAndLeftRecursiveDefinitions(leftRecursiveDefinition, leftRecursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const ruleName = leftRecursiveDefinition.getRuleName(),
          leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
          leftRecursiveRuleNameRuleName = (leftRecursiveRuleName === ruleName);

    if (!leftRecursiveRuleNameRuleName) {
      const ruleNames = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
              const ruleName = leftRecursiveDefinition.getRuleName();

              return ruleName;
            }),
            index = ruleNames.indexOf(leftRecursiveRuleName),
            leftRecursiveDefinition = leftRecursiveDefinitions[index];

      indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(leftRecursiveDefinition, ruleName);
    }

    return indirectlyLeftRecursiveDefinition;
  }
}

module.exports = IndirectlyLeftRecursiveDefinition;
