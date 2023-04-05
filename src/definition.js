"use strict";

import { Parts, Definition as DefinitionBase } from "occam-parsers";

import { first } from "./utilities/array";
import { cloneParts } from "./utilities/parts";
import { directlyRepeatedRuleNameFromRuleName } from "./utilities/ruleName";
import { ruleNamePartFromRuleName, directlyReducedPartFromPart } from "./utilities/part";

const { ZeroOrMorePartsPart } = Parts;

export default class Definition extends DefinitionBase {
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

  static fromRuleNameAndDirectlyLeftRecursiveDefinitionAndDirectlyReducedRule(ruleName, directlyLeftRecursiveDefinition) {
    let definition = directlyLeftRecursiveDefinition, ///
        parts = definition.getParts();

    const firstPart = first(parts),
          part = firstPart, ///
          directlyReducedPart = directlyReducedPartFromPart(part),
          directlyRepeatedRuleName = directlyRepeatedRuleNameFromRuleName(ruleName),
          directlyRepeatedRuleNamePart = ruleNamePartFromRuleName(directlyRepeatedRuleName),
          zeroOrMoreDirectlyRepeatedRuleNamePartPart = new ZeroOrMorePartsPart(directlyRepeatedRuleNamePart);

    parts = [ ///
      directlyReducedPart,
      zeroOrMoreDirectlyRepeatedRuleNamePartPart
    ];

    parts = cloneParts(parts);  ///

    definition = new Definition(parts); ///

    return definition;
  }
}
