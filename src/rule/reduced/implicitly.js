"use strict";

import { Rule, Definition } from "occam-parsers";

import ImplicitlyReducedNode from "../../node/reduced/implicitly";

import { cloneParts } from "../../utilities/parts";
import { isDefinitionDirectlyLeftRecursive } from "../../utilities/definition";
import { implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "../../utilities/ruleName";

export default class ImplicitlyReducedRule extends Rule {
  static fromLeftRecursiveDefinitionAndRule(leftRecursiveDefinition, rule) {
    const ruleName = rule.getName(),
          leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule(),
          leftRecursiveRule = leftRecursiveDefinitionRule,  ///
          leftRecursiveRuleName = leftRecursiveRule.getName();

    let definitions = leftRecursiveRule.getDefinitions();

    definitions = definitions.reduce((definitions, definition) => { ///
      const definitionDirectlyLeftRecursive = isDefinitionDirectlyLeftRecursive(definition, leftRecursiveRuleName);

      if (!definitionDirectlyLeftRecursive) {
        const parts = definition.getParts();

        cloneParts(parts);

        definition = new Definition(parts); ///

        definitions.push(definition);
      }

      return definitions;
    }, []);

    const implicitlyReducedRuleName = implicitlyReducedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
          name = implicitlyReducedRuleName, ///
          ambiguous = false,
          NonTerminalNode = ImplicitlyReducedNode,  ///
          implicitlyReducedRule = new ImplicitlyReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return implicitlyReducedRule;
  }
}
