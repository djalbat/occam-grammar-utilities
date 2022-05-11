"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";
import RecursiveDefinition from "../definition/recursive";

import { isInstanceOf } from "../utilities/class";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

export default class ReducedRule extends Rule {
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
      let recursiveDefinitionLeftRecursiveDefinition = false;

      const definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition);

      if (definitionRecursiveDefinition) {
        const recursiveDefinition = definition; ///

        recursiveDefinitionLeftRecursiveDefinition = recursiveDefinition.isLeftRecursiveDefinition();
      }

      if (!recursiveDefinitionLeftRecursiveDefinition) {
        return true;
      }
    });

    const name = reducedRuleName,
          ambiguous = false,
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return reducedRule;
  }
}
