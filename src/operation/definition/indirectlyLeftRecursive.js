"use strict";

import DefinitionOperation from "../../operation/definition";
import ReplacementDefinition from "../../replacementDefinition";

import { findIndirectlyLeftRecursiveDefinitions } from "../../utilities/context";

export default class IndirectlyLeftRecursiveDefinitionOperation extends DefinitionOperation {
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

  apply(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
                  indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

            if ((leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition) && (leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName)) {
              return true;
            }
          }, context),
          definitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
            const definition = indirectlyLeftRecursiveDefinition.getDefinition();

            return definition;
          });

    rule.removeDefinitions(definitions);

    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition),
          replacementDefinitionPresent = replacementDefinition.isPresent(rule);

    if (!replacementDefinitionPresent) {
      const definition = replacementDefinition; ///

      rule.addDefinition(definition);
    }
  }

  retrieve(indirectlyLeftRecursiveDefinition, context) {
    ///
  }

  compare(indirectlyLeftRecursiveDefinitionOperation) {
    const rule = this.getRule(),
          indirectlyLeftRecursiveDefinitionOperationRule = indirectlyLeftRecursiveDefinitionOperation.getRule(),
          indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition = indirectlyLeftRecursiveDefinitionOperation.getLeftRecursiveDefinition(),
          comparesTo = ((rule === indirectlyLeftRecursiveDefinitionOperationRule) &&
                        (this.leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveRuleName)&&
                        (this.leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionOperationLeftRecursiveDefinition));

    return comparesTo;
  }

  static execute(indirectlyLeftRecursiveDefinition, context) {
    const rule = indirectlyLeftRecursiveDefinition.getRule(),
          definition = indirectlyLeftRecursiveDefinition.getDefinition(),
          leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          indirectlyLeftRecursiveDefinitionOperation = new IndirectlyLeftRecursiveDefinitionOperation(rule, definition, leftRecursiveRuleName, leftRecursiveDefinition);

    indirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);
  }
}
