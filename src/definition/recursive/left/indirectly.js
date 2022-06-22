"use strict";

import { arrayUtilities } from "necessary";

import LeftRecursiveDefinition from "../../../definition/recursive/left";
import ImplicitlyLeftRecursiveDefinition from "../../../definition/recursive/left/implicitly";

import { isDefinitionLeftRecursive, recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } from "../../../utilities/definition";

const { first } = arrayUtilities;

export default class IndirectlyLeftRecursiveDefinition extends LeftRecursiveDefinition {
  constructor(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    super(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);

    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  static fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
    let indirectlyLeftRecursiveDefinition = null;

    const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

    if (definitionLeftRecursive) {
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
            firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
            leftRecursiveRuleName = firstLeftRecursiveRuleName, ///
            ruleNameLeftRecursiveRuleName = (ruleName === leftRecursiveRuleName);

      if (!ruleNameLeftRecursiveRuleName) {
        const implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

        if (implicitlyLeftRecursiveDefinition !== null) {
          const parts = definition.getParts(),
                recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);

          indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
        }
      }
    }

    return indirectlyLeftRecursiveDefinition;
  }
}
