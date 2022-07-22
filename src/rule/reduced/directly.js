"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../../node/reduced";
import DirectlyLeftRecursiveDefinition from "../../definition/recursive/left/directly";
import IndirectlyLeftRecursiveDefinition from "../../definition/recursive/left/indirectly";

import { directlyReducedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find } = arrayUtilities;

export default class DirectlyReducedRule extends Rule {
  static fromRule(rule, disallowIsolated = true) {
    let directlyReducedRule = null;

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition),
            definitionIndirectlyLeftRecursiveDefinition = (definition instanceof IndirectlyLeftRecursiveDefinition);

      if (!definitionDirectlyLeftRecursiveDefinition && !definitionIndirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      if (disallowIsolated) {
        const ruleName = rule.getName();

        throw new Error(`The directly left recursive definitions of the '${ruleName}' rule are isolated and therefore cannot be rewritten.`);
      }
    }

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            directlyReducedRuleName = directlyReducedRuleNameFromRuleName(ruleName),
            name = directlyReducedRuleName, ///
            ambiguous = false,
            NonTerminalNode = ReducedNode;  ///

      directlyReducedRule = new DirectlyReducedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return directlyReducedRule;
  }
}
