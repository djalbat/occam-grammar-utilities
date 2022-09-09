"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class IndirectlyLeftRecursiveDefinitionOperation extends DefinitionOperation {
  constructor(definition, leftRecursiveRuleName) {
    super(definition);

    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  apply(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

            if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
              return true;
            }
          }, context),
          definition = replacementDefinition, ///
          definitions = indirectlyLeftRecursiveDefinitions.map((removedLeftRecursiveDefinition) => {
            const definition = removedLeftRecursiveDefinition.getDefinition();

            return definition;
          }); ///

    rule.addDefinition(definition);

    rule.removeDefinitions(definitions);

    return indirectlyLeftRecursiveDefinitions;
  }

  retrieve(indirectlyLeftRecursiveDefinition, context) {
    ///
  }

  compare(indirectlyLeftRecursiveDefinitionOperation) {
    const definition = this.getDefinition(),
          indirectlyLeftRecursiveDefinitionOperationDefinition = indirectlyLeftRecursiveDefinitionOperation.getDefinition(),
          indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveRuleName(),
          comparesTo = ((definition === indirectlyLeftRecursiveDefinitionOperationDefinition) && (this.leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(definition, leftRecursiveRuleName),
          indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);

    return indirectlyLeftRecursiveDefinitions;
  }
}
