"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";
import {singlePartFromParts} from "../utilities/parts";

const { first } = arrayUtilities,
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

  static fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
    const name = rule.getName(),
          ambiguous = rule.isAmbiguous();

    let definitions = rule.getDefinitions();

    definitions = definitions.map((definition) => {
      definition = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
        const leftRecursiveDefinitionMatchesDefinition = leftRecursiveDefinition.match(definition);

        if (leftRecursiveDefinitionMatchesDefinition) {
          return true;
        }
      });

      return definition;
    });

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
          remainingParts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
            directlyLeftRecursiveDefinition.removeFirstPart();

            const parts = directlyLeftRecursiveDefinition.getParts(),
                  singlePart = singlePartFromParts(parts),
                  part = singlePart;  ///

            return part;
          }),
          choiceOfRemainingPartsPart = new ChoiceOfPartsPart(remainingParts);

    parts = [
      firstPart,
      choiceOfRemainingPartsPart
    ];

    const ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName(),
          definition = new Definition(parts);

    directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);
  }

  return directlyLeftRecursiveDefinition;
}
