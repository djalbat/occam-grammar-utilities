"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

import { findDirectlyLeftRecursiveDefinitions, findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class DirectlyLeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(rule, definition, directlyReducedRule, directlyRepeatedRule) {
    super(rule, definition);

    this.directlyReducedRule = directlyReducedRule;
    this.directlyRepeatedRule = directlyRepeatedRule;
  }

  getDirectlyReducedRule() {
    return this.directlyReducedRule;
  }

  getDirectlyRepeatedRule() {
    return this.directlyRepeatedRule;
  }

  apply(context) {
    const rule = this.getRule();

    let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, context);

    rule.removeAllDefinitions();

    if (this.directlyReducedRule !== null) {
      let definition = this.getDefinition();

      const replacementDefinition = ReplacementDefinition.fromRuleAndDefinition(rule, definition);

      definition = replacementDefinition; ///

      rule.addDefinition(definition);
    }

    indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {  ///
      const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, this.directlyRepeatedRule),
            definition = replacementDefinition; ///

      rule.addDefinition(definition);

      const directly = true;

      indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition, directly);  ///

      return indirectlyLeftRecursiveDefinition;
    });

    return indirectlyLeftRecursiveDefinitions;
  }

  retrieve(context) {
    ///
  }

  static execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context) {
    const rule = directlyLeftRecursiveDefinition.getRule(),
          definition = directlyLeftRecursiveDefinition.getDefinition(),
          directlyLeftRecursiveDefinitionOperation = new DirectlyLeftRecursiveDefinitionOperation(rule, definition, directlyReducedRule, directlyRepeatedRule),
          indirectlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitionOperation.execute(context);

    return indirectlyLeftRecursiveDefinitions;
  }
}
