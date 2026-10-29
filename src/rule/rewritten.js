"use strict";

import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { isRuleIndirectlyRepeated } from "../rule/repeated/indirectly";
import { partsfromPartsAndRuleNames } from "../definition/repeated";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { ruleNameFromCycle, ruleNamesFromCycle, indirectRuleNameFromCycle } from "../utilities/cycle";

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromRuleName(ruleName, ruleMap) {
    const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          definition = rewrittenDefinition, ///
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            definition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromIndirectRuleNameAndCycle(indirectRuleName, cycle, ruleMap) {
    const indirectRule = ruleMap[indirectRuleName],
          ruleNames = ruleNamesFromCycle(cycle);

    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.map((definition) => {
      let parts;

      parts = definition.getParts();

      parts = partsfromPartsAndRuleNames(parts, ruleNames);  ///

      const precedence = definition.getPrecedence();

      definition = Definition.fromPartsAndPrecedence(parts, precedence);

      return definition;
    });

    const ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, ruleMap) {
    const rewrittenDefinition = RewrittenDefinition.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, ruleMap),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          definition = rewrittenDefinition, ///
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            definition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function rewrittenRulesFromCycleAndCycles(cycle, cycles, ruleMap) {
  const rewrittenRules = [],
        cycleLength = cycle.getLength(),
        ruleName = ruleNameFromCycle(cycle);

  let rewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      rewrittenRule = RewrittenRule.fromRuleName(ruleName, ruleMap);

      rewrittenRules.push(rewrittenRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const rule = ruleMap[ruleName],
            ruleIndirectlyRepeated = isRuleIndirectlyRepeated(rule, cycle, cycles, ruleMap);

      if (ruleIndirectlyRepeated) {
        const indirectRuleName = indirectRuleNameFromCycle(cycle);

        rewrittenRule = RewrittenRule.fromRuleNameAndIndirectRuleName(ruleName, indirectRuleName, ruleMap);

        rewrittenRules.push(rewrittenRule);
      } else {
        rewrittenRule = RewrittenRule.fromRuleName(ruleName, ruleMap);

        rewrittenRules.push(rewrittenRule);

        const indirectRuleName = indirectRuleNameFromCycle(cycle);

        rewrittenRule = RewrittenRule.fromIndirectRuleNameAndCycle(indirectRuleName, cycle, ruleMap);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
