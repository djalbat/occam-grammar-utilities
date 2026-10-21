"use strict";

import { Parts, Definition } from "occam-parsers";

import { replaceRuleNameParts } from "../utilities/parts";
import { isDefinitionReducible } from "../utilities/definition";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { RuleNamePart } = Parts;

export default class ReducedDefinition extends Definition {
  static fromDefinitionRuleNameAndCycles(definition, ruleName, cycles, ruleMap) {
    let reducedDefinition = null;

    const definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles, ruleMap);

    if (definitionLeftReducible) {
      let parts;

      parts = definition.getParts();

      parts = replaceRuleNameParts(parts, (ruleNamePart) => { ///
        const ruleNamePartRuleName = ruleNamePart.getRuleName();

        if (ruleNamePartRuleName === ruleName) {
          const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
                rewrittenRuleNamePart = RuleNamePart.fromRuleName(rewrittenRuleName);

          ruleNamePart = rewrittenRuleNamePart; ///
        }

        return ruleNamePart;
      });

      const precedence = definition.getPrecedence();

      reducedDefinition = new ReducedDefinition(parts, precedence);
    }

    return reducedDefinition;
  }
}
