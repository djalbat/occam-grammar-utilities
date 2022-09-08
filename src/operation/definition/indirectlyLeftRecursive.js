"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class IndirectlyLeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(rule, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    super(rule, definition);

    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  getIndirectlyLeftRecursiveDefinition() {
    return this.indirectlyLeftRecursiveDefinition;
  }

  apply(context) {
    const rule = this.getRule();

    let indirectlyLeftRecursiveDefinitions;

    const leftRecursiveRuleName = this.getLeftRecursiveRuleName();

    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(this.indirectlyLeftRecursiveDefinition, leftRecursiveRuleName);

    let definition = replacementDefinition; ///

    rule.addDefinition(definition);

    definition = this.getDefinition();

    const definitions = rule.getDefinitions(),
          definitionsIncludesDefinition = definitions.includes(definition);

    if (definitionsIncludesDefinition) {
      indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
        const indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
              indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

        if ((indirectlyLeftRecursiveDefinitionDefinition !== definition) && (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName)) {
          return true;
        }
      }, context);

      indirectlyLeftRecursiveDefinitions = [  ///
        this.indirectlyLeftRecursiveDefinition,
        ...indirectlyLeftRecursiveDefinitions
      ];

      const definitions = indirectlyLeftRecursiveDefinitions.map((removedLeftRecursiveDefinition) => {
        const definition = removedLeftRecursiveDefinition.getDefinition();

        return definition;
      });

      rule.removeDefinitions(definitions);
    } else {
      indirectlyLeftRecursiveDefinitions = [
        this.indirectlyLeftRecursiveDefinition
      ];
    }

    return indirectlyLeftRecursiveDefinitions;
  }

  retrieve(context) {
    ///
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition),
          indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitionOperation.execute(context);

    return indirectlyLeftRecursiveDefinitions;
  }
}
