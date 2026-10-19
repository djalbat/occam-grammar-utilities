"use strict";

import { Rule } from "occam-parsers";
import { arrayUtilities } from "necessary";

import IntermediateNode from "../node/intermediate";

import { ruleNamesFromCycle } from "../utilities/cycle";
import { intermediateRuleNameFromRuleNameAndIndirectRuleName } from "../utilities/ruleName";
import { repeatedDefinitionsFromRuleCyclesAndIndirectRuleName } from "./repeated";

const { first, second } = arrayUtilities;

export default class IntermediateRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IntermediateNode; ///

    return NonTerminalNode;
  }

  static fromCycleAndCycles(cycle, cycles, ruleMap) {
    let intermediateRule = null;

    const length = cycle.getLength();

    if (length > 1) {
      const ruleNames = ruleNamesFromCycle(cycle),
            firstRuleName = first(ruleNames),
            secondRuleName = second(ruleNames),
            indirectRuleName = secondRuleName,  ///
            ruleName = firstRuleName, ///
            rule = ruleMap[ruleName],
            intermediateRuleName = intermediateRuleNameFromRuleNameAndIndirectRuleName(ruleName, indirectRuleName),
            repeatedDefinitions = repeatedDefinitionsFromRuleCyclesAndIndirectRuleName(rule, cycles, indirectRuleName, ruleMap),
            name = intermediateRuleName,  ///
            opacity = null,
            definitions = repeatedDefinitions;  ///

      intermediateRule = new IntermediateRule(name, opacity, definitions);
    }

    return intermediateRule;
  }
}
