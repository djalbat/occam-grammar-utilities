"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import DirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "../../recursiveDefinition/left/indirectly";

export default class LeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(rule, definition, indirectlyReducedRule, indirectlyRepeatedRule, indirectlyLeftRecursiveDefinition) {
    super(rule, definition);

    this.indirectlyReducedRule = indirectlyReducedRule;
    this.indirectlyRepeatedRule = indirectlyRepeatedRule;

    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getIndirectlyReducedRule() {
    return this.indirectlyReducedRule;
  }

  getIndirectlyRepeatedRule() {
    return this.indirectlyRepeatedRule;
  }

  getIndirectlyLeftRecursiveDefinition() {
    return this.indirectlyLeftRecursiveDefinition;
  }

  apply(context) {
    let leftRecursiveDefinition = this.indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

    const rule = leftRecursiveDefinition.getRule();

    if (this.indirectlyReducedRule !== null) {
      const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(this.indirectlyLeftRecursiveDefinition, this.indirectlyReducedRule),
            definition = replacementDefinition; ///

      rule.addDefinition(definition);
    }

    const least = this.indirectlyLeftRecursiveDefinition.isLeast();

    let definition = leftRecursiveDefinition.getDefinition();

    const definitions = rule.getDefinitions(),
          definitionsIncludesDefinition = definitions.includes(definition),
          replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(this.indirectlyLeftRecursiveDefinition, this.indirectlyRepeatedRule),
          replacedDefinition = definition;  ///

    definition = replacementDefinition; ///

    leftRecursiveDefinition = least ? ///
                                DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) :
                                  IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(this.indirectlyLeftRecursiveDefinition, definition);

    definitionsIncludesDefinition ?
      rule.replaceDefinition(replacedDefinition, replacementDefinition) :
        rule.addDefinition(definition);

    return leftRecursiveDefinition;
  }

  retrieve(context) {

  }

  static execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveDefinitionOperation = new LeftRecursiveDefinitionOperation(rule, definition, indirectlyReducedRule, indirectlyRepeatedRule, indirectlyLeftRecursiveDefinition),
          leftRecursiveDefinition = leftRecursiveDefinitionOperation.execute(context);

    return leftRecursiveDefinition;
  }
}
