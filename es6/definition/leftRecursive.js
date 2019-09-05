'use strict';

const ruleUtilities = require('../utilities/rule'),
      definitionUtilities = require('../utilities/definition');

const { findRuleByName } = ruleUtilities,
      { leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class LeftRecursiveDefinition {
  constructor(ruleName, definition, leftRecursiveRuleName) {
    this.ruleName = ruleName;

    this.definition = definition;

    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  getParts() { return this.definition.getParts(); }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  findRule(rules) {
    const name = this.leftRecursiveRuleName, ///
          rule = findRuleByName(name, rules);

    return rule;
  }

  isImmediatelyLeftRecursive(leftRecursiveDefinitions) {
    let immediatelyLeftRecursive = false;

    const leftRecursiveRuleNameRuleName = (this.leftRecursiveRuleName === this.ruleName);

    if (leftRecursiveRuleNameRuleName) {
      immediatelyLeftRecursive = true;
    } else {
      const ruleNames = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
              const ruleName = leftRecursiveDefinition.getRuleName();

              return ruleName;
            }),
            ruleNamesIncludesLeftRecursiveRuleName = ruleNames.includes(this.leftRecursiveRuleName);

      immediatelyLeftRecursive = ruleNamesIncludesLeftRecursiveRuleName; ///
    }

    return immediatelyLeftRecursive;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
          leftRecursiveDefinition = new LeftRecursiveDefinition(ruleName, definition, leftRecursiveRuleName);

    return leftRecursiveDefinition;
  }
}

module.exports = LeftRecursiveDefinition;
