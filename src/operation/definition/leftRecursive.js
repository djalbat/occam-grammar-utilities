"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import DirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

export default class LeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(definition, leftRecursiveRuleName) {
    super(definition);

    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  apply(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

    const rule = leftRecursiveDefinition.getRule();

    if (indirectlyReducedRule !== null) {
      const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
            definition = replacementDefinition; ///

      rule.addDefinition(definition);
    }

    let definition = leftRecursiveDefinition.getDefinition();

    const definitions = rule.getDefinitions(),
          definitionsIncludesDefinition = definitions.includes(definition),
          replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule),
          replacedDefinition = definition;  ///

    definition = replacementDefinition; ///

    const least = indirectlyLeftRecursiveDefinition.isLeast(),
          leftRecursiveDefinitions = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinitions();

    leftRecursiveDefinition = least ? ///
                                DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) :
                                  IndirectlyLeftRecursiveDefinition.fromDefinitionAndLeftRecursiveDefinitions(definition, leftRecursiveDefinitions);

    definitionsIncludesDefinition ?
      rule.replaceDefinition(replacedDefinition, replacementDefinition) :
        rule.addDefinition(definition);

    return leftRecursiveDefinition;
  }

  retrieve(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    ///
  }

  compare(leftRecursiveDefinitionOperation) {
    const definition = this.getDefinition(),
          leftRecursiveDefinitionOperationDefinition = leftRecursiveDefinitionOperation.getDefinition(),
          leftRecursiveDefinitionOperationLeftRecursiveRuleName = leftRecursiveDefinitionOperation.getLeftRecursiveRuleName(),
          comparesTo = ((definition === leftRecursiveDefinitionOperationDefinition) && (this.leftRecursiveRuleName === leftRecursiveDefinitionOperationLeftRecursiveRuleName));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName),
          leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context);

    return leftRecursiveDefinition;
  }
}
