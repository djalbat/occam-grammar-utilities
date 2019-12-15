'use strict';

const parsers = require('occam-parsers');

const types = require('../types'),
      ReducedNode = require('../node/reduced'),
      classUtilities = require('../utilities/class'),
      ruleNameUtilities = require('../utilities/ruleName'),
      RecursiveDefinition = require('../definition/recursive');

const { Rule } = parsers,
      { isInstanceOf } = classUtilities,
      { reducedRuleNameFromRuleName } = ruleNameUtilities,
      { DIRECTLY_LEFT_RECURSIVE_TYPE, INDIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } = types;

class ReducedRule extends Rule {
  isEmpty() {
    const definitionsLength = this.definitions.length,
          empty = (definitionsLength === 0);

    return empty;
  }

  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName);

    definitions = definitions.filter((definition) => {
      let keep = true;

      const definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        const recursiveDefinition = definition, ///
              type = recursiveDefinition.getType();

        keep = (type !== DIRECTLY_LEFT_RECURSIVE_TYPE) &&
               (type !== INDIRECTLY_LEFT_RECURSIVE_TYPE) &&
               (type !== IMPLICITLY_LEFT_RECURSIVE_TYPE);
      }

      return keep
    });

    const name = reducedRuleName,
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, definitions, NonTerminalNode);

    return reducedRule;
  }
}

module.exports = ReducedRule;
