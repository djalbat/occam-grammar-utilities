"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import RecursiveDefinition from "../definition/recursive";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { DIRECTLY_LEFT_RECURSIVE_TYPE, INDIRECTLY_LEFT_RECURSIVE_TYPE, IMPLICITLY_LEFT_RECURSIVE_TYPE } from "../types";

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
