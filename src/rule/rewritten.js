"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Parts, Definition } from "occam-parsers";

import DirectlyLeftRecursiveDefinition from "../definition/recursive/left/directly";

const { first } = arrayUtilities,
      { ChoiceOfPartsPart, SequenceOfPartsPart } = Parts;

export default class RewrittenRule extends Rule {
  removeDefinitions() {
    const definitions = this.getDefinitions();

    definitions.splice(0);
  }

  rewrite(ruleMap) {
    const definitions = this.getDefinitions(),
          directlyLeftRecursiveDefinitions = definitions, ///
          directlyLeftRecursiveDefinition = mergeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions);

    directlyLeftRecursiveDefinition.rewrite(ruleMap);

    this.removeDefinitions();

    this.addDefinition(directlyLeftRecursiveDefinition);
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

    const firstDirectlyLeftRecursiveDefinitionParts = firstDirectlyLeftRecursiveDefinition.getParts();

    parts = firstDirectlyLeftRecursiveDefinitionParts;  ///

    const firstPart = first(parts);

    parts = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
      let part,
          parts;

      const directlyLeftRecursiveDefinitionParts = directlyLeftRecursiveDefinition.getParts();

      parts = directlyLeftRecursiveDefinitionParts; ///

      parts.shift();

      const partsLength = parts.length;

      if (partsLength === 1) {
        const firstPart = first(parts);

        part = firstPart; ///
      } else {
        const sequenceOfPartsPart = new SequenceOfPartsPart(parts);

        part = sequenceOfPartsPart; ///
      }

      return part;
    });

    const choiceOfPartsPart = new ChoiceOfPartsPart(parts);

    parts = [
      firstPart,
      choiceOfPartsPart
    ];

    const ruleName = firstDirectlyLeftRecursiveDefinition.getRuleName(),
          definition = new Definition(parts);

    directlyLeftRecursiveDefinition = DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);
  }

  return directlyLeftRecursiveDefinition;
}
