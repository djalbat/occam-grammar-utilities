"use strict";

import { Rule } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { edgesMatchEdge } from "../directedGraph";
import { ruleNamesFromCycle } from "../utilities/ruleNames";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";
import { leftRecursiveRuleNamesFromDefinition } from "../utilities/definition";
import { edgesFromRuleNames, edgeFromRuleNameAndLeftRecursiveRuleName } from "../utilities/directedGraph";

export default class ReducedRule extends Rule {
  static fromRuleAndCycles(rule, cycles) {
    const ruleName = rule.getName();

    let reducedRule = null,
        definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftReducible = isDefinitionReducible(definition, ruleName, cycles);

      if (definitionLeftReducible) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength > 0) {
      const ruleName = rule.getName(),
            reducedRuleName = reducedRuleNameFromRuleName(ruleName),
            name = reducedRuleName, ///
            opacity = rule.getOpacity(),
            NonTerminalNode = ReducedNode;  ///

      reducedRule = new ReducedRule(name, opacity, definitions, NonTerminalNode);
    }

    return reducedRule;
  }
}

function isDefinitionReducible(definition, ruleName, cycles) {
  const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
        definitionReducible = leftRecursiveRuleNames.every((leftRecursiveRuleName) => {
          const cyclesIncludeRuleNameAndLeftRecursiveRuleName = cycles.some((cycle) => {
            const cycleIncludesRuleNameAndLeftRecursiveRuleName = doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName);

            if (cycleIncludesRuleNameAndLeftRecursiveRuleName) {
              return true;
            }
          });

          if (!cyclesIncludeRuleNameAndLeftRecursiveRuleName) {
            return true;
          }
        });

  return definitionReducible;
}

function doesCycleIncludeRuleNameAndLeftRecursiveRuleName(cycle, ruleName, leftRecursiveRuleName) {
  const ruleNames = ruleNamesFromCycle(cycle),
        edge = edgeFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName),
        edges = edgesFromRuleNames(ruleNames),
        matches = edgesMatchEdge(edges, edge),
        cycleIncludesRuleNameAndLeftRecursiveRuleName = matches;  ///

  return cycleIncludesRuleNameAndLeftRecursiveRuleName;
}
