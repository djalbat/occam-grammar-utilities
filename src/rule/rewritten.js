"use strict";

import { Rule, Parts } from "occam-parsers";
import { arrayUtilities } from "necessary";

import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";

import { isInstanceOf } from "../utilities/class";
import { singlePartFromParts } from "../utilities/parts";

const { find, first } = arrayUtilities,
      { ChoiceOfPartsPart } = Parts;

export default class RewrittenRule extends Rule {
  rewrite(ruleMap) {
    const definitions = this.getDefinitions(),
          directlyLeftRecursiveDefinitions = definitions, ///
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);

    directlyLeftRecursiveDefinition.rewrite(ruleMap);

    this.removeDefinitions();

    this.addDefinition(directlyLeftRecursiveDefinition);
  }

  removeDefinitions() {
    const definitions = this.getDefinitions();

    definitions.splice(0);
  }

  static fromRule(rule) {
    const name = rule.getName(),
          ambiguous = rule.isAmbiguous();

    let definitions = rule.getDefinitions();

    const directlyLeftRecursiveDefinitions = find(definitions, (definition) => {
            const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition);

            if (definitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          });

    definitions = directlyLeftRecursiveDefinitions; ///

    const NonTerminalNode = rule.getNonTerminalNode(),
          rewrittenRule = new RewrittenRule(name, ambiguous, definitions, NonTerminalNode);

    return rewrittenRule;
  }
}

function mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions) {
  let directlyLeftRecursiveDefinition;

  const firstDirectlyLeftRecursiveDefinition = first(directlyLeftRecursiveDefinitions),
        directlyLeftRecursiveDefinitionsLength = directlyLeftRecursiveDefinitions.length;

  if (directlyLeftRecursiveDefinitionsLength === 1) {
    directlyLeftRecursiveDefinition = firstDirectlyLeftRecursiveDefinition; ///
  } else {
    let parts;

    parts = firstDirectlyLeftRecursiveDefinition.getParts();  ///

    const firstPart = first(parts),
          part = firstPart; ///

    const singleParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      directlyLeftRecursiveDefinition.removeFirstPart();

      const parts = directlyLeftRecursiveDefinition.getParts(),
            singlePart = singlePartFromParts(parts);

      return singlePart;
    });

    parts = singleParts;  ///

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [ ///
      part,
      choiceOfPartsPart
    ]

    const ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName();

    directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndParts(ruleName, parts);
  }

  return directlyLeftRecursiveDefinition;
}
