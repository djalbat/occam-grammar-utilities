"use strict";

import { Rule, Definition } from "occam-parsers";

import RepeatedNode from "../node/repeated";
import IndirectlyLeftRecursiveDefinition from "../definition/recursive/left/indirectly";

import { isInstanceOf } from "../utilities/class";
import { repeatedPartFromRuleName } from "../utilities/part";
import { repeatedRuleNameFromRuleName } from "../utilities/ruleName";

export default class RepeatedRule extends Rule {
  static fromIndirectlyLeftRecursiveRule(indirectlyLeftRecursiveRule) {
    const rule = indirectlyLeftRecursiveRule;  ///

    let definitions = rule.getDefinitions();

    const indirectlyLeftRecursiveDefinition = definitions.find((definition) => {
            const definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, IndirectlyLeftRecursiveDefinition);

            if (definitionIndirectlyLeftRecursiveDefinition) {
              return true;
            }
          });

    const ruleName = rule.getName(),
          repeatedPart = repeatedPartFromRuleName(ruleName),
          parts = indirectlyLeftRecursiveDefinition.rewrite(repeatedPart),
          definition = new Definition(parts),
          repeatedRuleName = repeatedRuleNameFromRuleName(ruleName),
          name = repeatedRuleName,  ///
          ambiguous = false;

    definitions = [
      definition
    ];

    const NonTerminalNode = RepeatedNode,  ///
          repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);

    return repeatedRule;
  }
}
