"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";

import { CYCLE_LENGTH_2 } from "../constants";
import { ruleNamesFromCycle } from "../utilities/cycle";
import { partsfromPartsAndRuleNames } from "../definition/repeated";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";

const { first, second } = arrayUtilities;

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  static fromRuleName(ruleName, ruleMap) {
    const rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName),
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

  static fromRuleNames(ruleNames, ruleMap) {
    const secondRuleName = second(ruleNames),
          implicitRuleName = secondRuleName,  ///
          implicitRule = ruleMap[implicitRuleName];

    let definitions;

    definitions = implicitRule.getDefinitions();

    definitions = definitions.map((definition) => {
      let parts;

      parts = definition.getParts();

      parts = partsfromPartsAndRuleNames(parts, ruleNames);  ///

      const precedence = definition.getPrecedence();

      definition = Definition.fromPartsAndPrecedence(parts, precedence);

      return definition;
    });

    const ruleName = implicitRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = implicitRule.getOpacity(),
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function rewrittenRulesFromCycle(cycle, ruleMap) {
  const rewrittenRules = [],
        ruleNames = ruleNamesFromCycle(cycle),
        firstRuleName = first(ruleNames),
        ruleName = firstRuleName, //
        rewrittenRule = RewrittenRule.fromRuleName(ruleName, ruleMap);

  rewrittenRules.push(rewrittenRule);

  const cycleLength = cycle.getLength();

  if (cycleLength === CYCLE_LENGTH_2) {
    const rewrittenRule = RewrittenRule.fromRuleNames(ruleNames, ruleMap);

    rewrittenRules.push(rewrittenRule);
  }

  return rewrittenRules;
}
