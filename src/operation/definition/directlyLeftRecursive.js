"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class DirectlyLeftRecursiveDefinitionOperation extends DefinitionOperation {
  apply(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
    const rule = directlyLeftRecursiveDefinition.getRule();

    let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, context);

    rule.removeAllDefinitions();

    if (directlyReducedRule !== null) {
      const replacementDefinition = ReplacementDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition),
            definition = replacementDefinition; ///

      rule.addDefinition(definition);
    }

    indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {  ///
      const leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions(),
            replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule),
            definition = replacementDefinition; ///

      rule.addDefinition(definition);

      indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleDefinitionAndLeftRecursiveDefinitions(rule, definition, leftRecursiveDefinitions);

      return indirectlyLeftRecursiveDefinition;
    });

    return indirectlyLeftRecursiveDefinitions;
  }

  retrieve(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
    ///
  }

  static execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          definition = directlyLeftRecursiveDefinition.getDefinition(),
          directlyLeftRecursiveDefinitionOperation = new DirectlyLeftRecursiveDefinitionOperation(rule, definition),
          indirectlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

    return indirectlyLeftRecursiveDefinitions;
  }
}
