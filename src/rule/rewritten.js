"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import RewrittenNode from "../node/rewritten";
import RewrittenDefinition from "../definition/rewritten";
import IndirectlyRewrittenDefinition from "../definition/rewritten/indirectly";

import { rewriteRuleNameParts } from "../utilities/rewrite";
import { isIndirectRuleReducible } from "./reduced/indirectly";
import { isCycleIndirectlyRepeated } from "../rule/repeated/indirectly";
import { rewrittenRuleNameFromRuleName } from "../utilities/ruleName";
import { CYCLE_LENGTH_1, CYCLE_LENGTH_2 } from "../constants";
import { isDefinitionIndirectlyRepeatable } from "../rule/repeated/indirectly";

const { first, front } = arrayUtilities;

export default class RewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = RewrittenNode; ///

    return NonTerminalNode;
  }

  mergedWith(rewrittenRule) {
    let definitions;

    definitions = this.getDefinitions();

    const frontDefinitions = front(definitions);

    definitions = rewrittenRule.getDefinitions();

    definitions = [ ///
      ...frontDefinitions,
      ...definitions
    ];

    const name = this.getName(),
          opacity = this.getOpacity();

    rewrittenRule = new RewrittenRule(name, opacity, definitions);  ///

    return rewrittenRule;
  }

  static fromIndirectRuleName(indirectRuleName, context) {
    const cycle = context.getCycle(),
          ruleMap = context.getRuleMap(),
          indirectRule = ruleMap[indirectRuleName];

    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.map((definition) => {
      let parts;

      parts = definition.getParts();

      parts = rewriteRuleNameParts(parts, cycle); ///

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

  static fromDirectlyRepeatedDirectCycle(directlyRepeatedDirectCycle, context) {
    const ruleName = context.getRuleName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, context),
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = [
            rewrittenDefinition
          ],
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromDirectlyRepeatedIndirectCycle(directlyRepeatedIndirectcycle, context) {
    let definitions = [];

    const cycle = context.getCycle(),
          cycles = context.getCycles(),
          ruleMap = context.getRuleMap(),
          ruleName = context.getRuleName(),
          rewrittenDefinition = RewrittenDefinition.fromRuleName(ruleName, ruleMap);

    definitions.push(rewrittenDefinition);

    const indirectRuleReducible = isIndirectRuleReducible(cycle, cycles, ruleMap);

    if (indirectRuleReducible) {
      const indirectlyRewrittenDefinition = IndirectlyRewrittenDefinition.fromCycle(cycle, ruleMap);

      definitions.push(indirectlyRewrittenDefinition);
    }

    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }

  static fromIndirectlyRepetaedIndirectCycle(indirectlyRepeatedIndirectCycle, context) {
    const rule = context.getRule(),
          cycles = context.getCycles(),
          ruleMap = context.getRuleMap(),
          ruleName = context.getRuleName(),
          indirectRuleName = context.getIndirectRuleName(),
          rewrittenDefinitions = rewrittenDDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap),
          singular = true,
          rewrittenDefintion = RewrittenDefinition.fromRuleName(ruleName, singular, ruleMap);

    rewrittenDefinitions.push(rewrittenDefintion);

    const rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName, ///
          opacity = null,
          definitions = rewrittenDefinitions, ///
          rewrittenRule = new RewrittenRule(name, opacity, definitions);

    return rewrittenRule;
  }
}

export function rewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  let rewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_1: {
      const cycle = context.getCycle(),
            directlyRepeatedDirectCycle = cycle;  ///

      rewrittenRule = RewrittenRule.fromDirectlyRepeatedDirectCycle(directlyRepeatedDirectCycle, context);

      rewrittenRules.push(rewrittenRule);

      break;
    }

    case CYCLE_LENGTH_2: {
      const cycleIndirectlyRepeated = isCycleIndirectlyRepeated(context);

      if (cycleIndirectlyRepeated) {
        const cycle = context.getCycle(),
              indirectlyRepeatedIndirectCycle = cycle;  ///

        rewrittenRule = RewrittenRule.fromIndirectlyRepetaedIndirectCycle(indirectlyRepeatedIndirectCycle, context);

        rewrittenRules.push(rewrittenRule);
      } else {
        const cycle = context.getCycle(),
              indirectRuleName = context.getIndirectRuleName(),
              directlyRepeatedIndirectCycle = cycle;  ///

        rewrittenRule = RewrittenRule.fromDirectlyRepeatedIndirectCycle(directlyRepeatedIndirectCycle, context);

        rewrittenRules.push(rewrittenRule);

        rewrittenRule = RewrittenRule.fromIndirectRuleName(indirectRuleName, context);

        rewrittenRules.push(rewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}

function rewrittenDDefinitionsFromRuleIndirectRuleNameAndCycles(rule, indirectRuleName, cycles, ruleMap) {
  const ruleName = rule.getName();

  let definitions;

  definitions = rule.getDefinitions();

  definitions = definitions.filter((definition) => {
    const indirectRuleName = ruleName,  ///
          definitionIndirectlyRepeatable = isDefinitionIndirectlyRepeatable(definition, indirectRuleName, cycles, ruleMap);

    if (definitionIndirectlyRepeatable) {
      return true;
    }
  });

  definitions = definitions.filter((definition) => {
    const ruleName = ruleNameFromDefinition(definition);

    if (ruleName === indirectRuleName) {
      return true;
    }
  });

  const rewrittenDefinitions = definitions.map((definition) => {
    const rewrittenDefinition = RewrittenDefinition.fromDefiniitonRuleNameAndIndirectRuleName(definition, ruleName, indirectRuleName, ruleMap);

    return rewrittenDefinition;
  });

  return rewrittenDefinitions;
}

function ruleNameFromDefinition(definition) {
  const parts = definition.getParts(),
        firstPart = first(parts),
        ruleNamePart = firstPart, ///
        ruleName = ruleNamePart.getRuleName();

  return ruleName;
}
