"use strict";

import { Definition as DefinitionBase } from "occam-parsers";

import { first } from "./utilities/array";
import { cloneParts } from "./utilities/parts";
import { ruleNamePartFromRuleName } from "./utilities/part";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

export default class Definition extends DefinitionBase {
  static fromLeftRecursiveDefinition(leftRecursiveDefinition) {
    let definition = leftRecursiveDefinition.getDefinition();

    let parts = definition.getParts();

    let firstPart = first(parts);

    firstPart = firstPart.clone(); ///

    const indirectlyRepeatedRuleNamePart = indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition);

    parts = [
      firstPart,
      indirectlyRepeatedRuleNamePart
    ];

    definition = new Definition(parts); ///

    return definition;
  }

  static fromDefinitionAndLeftRecursiveDefinition(definition, leftRecursiveDefinition) {
    let parts = definition.getParts();

    parts = cloneParts(parts);  ///

    const indirectlyRepeatedRuleNamePart = indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition);

    parts = [ ///
      ...parts,
      indirectlyRepeatedRuleNamePart
    ];

    definition = new Definition(parts); ///

    return definition;
  }
}

function indirectlyRepeatedRuleNamePartFromLeftRecursiveDefinition(leftRecursiveDefinition) {
  const leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
        leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule(),
        leftRecursiveDefinitionRuleName = leftRecursiveDefinitionRule.getName(),
        firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
        ruleName = firstLeftRecursiveRuleName,  ///
        leftRecursiveRuleName = leftRecursiveDefinitionRuleName, ///
        indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

  return indirectlyRepeatedRuleNamePart;
}