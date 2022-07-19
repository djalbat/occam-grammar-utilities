"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../../node/repeated";
import RecursiveDefinition from "../../definition/recursive";
import DirectlyLeftRecursiveDefinition from "../../definition/recursive/left/directly";

import { repeatedRuleNameFromRuleName } from "../../utilities/ruleName";

const { find, tail } = arrayUtilities;

export default class DirectlyRepeatedRule extends Rule {
  static fromRule(rule) {
    let directlyRepeatedRule = null;

    let definitions = rule.getDefinitions();

    definitions = find(definitions, (definition) => { ///
      const definitionDirectlyLeftRecursiveDefinition = (definition instanceof DirectlyLeftRecursiveDefinition);

      if (definitionDirectlyLeftRecursiveDefinition) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName();

      definitions = definitions.map((definition) => {
        let parts = definition.getParts();

        const partsTail = tail(parts);

        parts = partsTail;  ///

        definition = RecursiveDefinition.fromRuleNameAndParts(ruleName, parts) ||
                      new Definition(parts);

        return definition;
      });

      const repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
            name = repeatedRuleName, ///
            ambiguous = false,
            NonTerminalNode = RepeatedNode;  ///

      directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
    }

    return directlyRepeatedRule;
  }
}
