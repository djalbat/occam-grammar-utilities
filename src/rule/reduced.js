"use strict";

import { Rule, Definition, Parts } from "occam-parsers";

import ReducedNode from "../node/reduced";

import { isDefinitionLeftRecursive } from "../utilities/definition";
import { reducedRuleNameFromRuleName } from "../utilities/ruleName";

const { EpsilonPart } = Parts;

export default class ReducedRule extends Rule {
  static fromRule(rule) {
    let definitions = rule.getDefinitions();

    definitions = definitions.filter((definition) => {
      const definitionLeftRecursive = isDefinitionLeftRecursive(definition);

      if (!definitionLeftRecursive) {
        return true;
      }
    });

    const definitionsLength = definitions.length;

    if (definitionsLength === 0) {
      const epsilonPart = new EpsilonPart(),
            parts = [
              epsilonPart
            ],
            definition = new Definition(parts);

      definitions.push(definition);
    }

    const ruleName = rule.getName(),
          reducedRuleName = reducedRuleNameFromRuleName(ruleName),
          name = reducedRuleName, ///
          ambiguous = rule.isAmbiguous(),
          NonTerminalNode = ReducedNode,  ///
          reducedRule = new ReducedRule(name, ambiguous, definitions, NonTerminalNode);

    return reducedRule;
  }
}
