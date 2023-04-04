"use strict";

import Definition from "./definition";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { ruleNamesFromCycle } from "./utilities/directedGraph";
import { first, firstLast, secondLast } from "./utilities/array";
import { findLeftRecursiveDefinitions } from "./utilities/context"
import { leftRecursiveRuleNamesFromDefinition } from "./utilities/definition";

export default function eliminateIndirectLeftRecursion(context) {
  const { cycles, ruleMap } = context;

  let greatestNonTrivialCycle = greatestNonTrivialCycleFromCycles(cycles);

  while (greatestNonTrivialCycle !== null) {
    const cycle = greatestNonTrivialCycle,  ///
          ruleNames = ruleNamesFromCycle(cycle),
          firstLastRuleName = firstLast(ruleNames),
          secondLastRuleName = secondLast(ruleNames),
          ruleName = firstLastRuleName, ///
          leftRecursiveRuleName = secondLastRuleName, ///
          rule = ruleMap[ruleName],
          leftRecursiveRule = ruleMap[leftRecursiveRuleName];

    rewriteIndirectLeftRecursion(rule, leftRecursiveRule, context);

    debugger

    greatestNonTrivialCycle = greatestNonTrivialCycleFromCycles(cycles);
  }
}

function rewriteIndirectLeftRecursion(rule, leftRecursiveRule, context) {
  const { ruleMap } = context;

  const ruleName = rule.getName(),
        leftRecursiveRuleName = leftRecursiveRule.getName(),
        leftRecursiveDefinitions = findLeftRecursiveDefinitions(leftRecursiveRule, (leftRecursiveDefinition) => {
          const definition = leftRecursiveDefinition, ///
                leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
                firstLeftRecursiveRuleName = first(leftRecursiveRuleNames);

          if (firstLeftRecursiveRuleName === ruleName) {
            return true;
          }
        }, context);

  const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleNameLeftRecursiveRuleNameAndLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, leftRecursiveDefinitions),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  let definitions;

  definitions = leftRecursiveDefinitions; ///

  leftRecursiveRule.removeDefinitions(definitions);

  definitions = rule.getDefinitions();

  definitions = definitions.map((definition) => { ///
    definition = Definition.fromDefinitionAndIndirectlyRepeatedRuleName(definition, indirectlyRepeatedRuleName);  ///

    return definition;
  });

  leftRecursiveRule.addDefinitions(definitions);
}

function greatestNonTrivialCycleFromCycles(cycles) {
  let greatestNonTrivialCycle = null;

  const greatestCycle = greatestCycleFromCycles(cycles);

  if (greatestCycle !== null) {
    const greatestCycleLength = greatestCycle.length;

    if (greatestCycleLength > 1) {
      greatestNonTrivialCycle = greatestCycle;  ///
    }
  }

  return greatestNonTrivialCycle;
}

function greatestCycleFromCycles(cycles) {
  const greatestCycle = cycles.reduce((greatestCycle, cycle) => {
    if (greatestCycle === null) {
      greatestCycle = cycle;  ///
    } else {
      const cycleLength = cycle.length,
            greatestCycleLength = greatestCycle.length;

      if (cycleLength > greatestCycleLength) {
        greatestCycle = cycle;  ///
      }
    }

    return greatestCycle;
  }, null);

  return greatestCycle;
}
