"use strict";

import { Definition as DefinitionBase } from "occam-parsers";

import { cloneParts } from "./utilities/parts";
import { ruleNamePartFromRuleName } from "./utilities/part";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

export default class Definition extends DefinitionBase {
  static fromDefinitionAndIndirectlyRepeatedRuleName(definition, indirectlyRepeatedRuleName) {
    let parts = definition.getParts();

    parts = cloneParts(parts);

    const indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

    parts = [ ///
      ...parts,
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

function indirectlyRepeatedRuleNamePartFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
  const indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        indirectlyRepeatedRuleNamePart = ruleNamePartFromRuleName(indirectlyRepeatedRuleName);

  return indirectlyRepeatedRuleNamePart;
}
