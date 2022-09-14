"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import DirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

export default class LeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition) {
    super(rule, definition);

    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.leftRecursiveDefinition = leftRecursiveDefinition;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  getLeftRecursiveDefinition() {
    return this.leftRecursiveDefinition;
  }

  apply(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

    const rule = leftRecursiveDefinition.getRule();

    if (indirectlyReducedRule !== null) {
      const replacementDefinition = ReplacementDefinition.fromLeftRecursiveDefinitionAndIndirectlyReducedRule(leftRecursiveDefinition, indirectlyReducedRule),
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
    const leftRecursiveRuleName = leftRecursiveDefinitionOperation.getLeftRecursiveRuleName(),
          leftRecursiveDefinition = leftRecursiveDefinitionOperation.getLeftRecursiveDefinition(),
          comparesTo = ((this.leftRecursiveRuleName === leftRecursiveRuleName) && (this.leftRecursiveDefinition === leftRecursiveDefinition));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

    let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

    const leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition);

    leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context);

    return leftRecursiveDefinition;
  }
}
