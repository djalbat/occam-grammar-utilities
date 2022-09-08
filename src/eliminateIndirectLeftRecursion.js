"use strict";

import ReplacementDefinition from "./replacementDefinition";
import DirectlyReducedRuleOperation from "./operation/rule/directlyReduced";
import DirectlyRepeatedRuleOperation from "./operation/rule/directlyRepeated";
import IndirectlyReducedRuleOperation from "./operation/rule/indirectlyReduced";
import IndirectlyRepeatedRuleOperation from "./operation/rule/indirectlyRepeated";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";
import DirectlyLeftRecursiveDefinitionOperation from "./operation/definition/directlyLeftRecursive";

import { addLeftRecursiveDefinition,
         addLeftRecursiveDefinitions,
         removeLeftRecursiveDefinitions,
         findDirectlyLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinitions,
         findIndirectlyLeftRecursiveDefinitions,
         retrieveGreatestIndirectlyLeftRecursiveDefinition } from "./utilities/context"

let count = 0;

export default function eliminateIndirectLeftRecursion(context) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(context);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition, ///
          rule = indirectlyLeftRecursiveDefinition.getRule(),
          directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(rule, context);

    (directlyLeftRecursiveDefinition !== null) ?
      rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, context) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context);

    greatestIndirectlyLeftRecursiveDefinition = ++count > Infinity ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(context);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, context) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        allowIsolated = true,
        directlyReducedRule = DirectlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context),
        directlyRepeatedRule = DirectlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, context);

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
        removedLeftRecursiveDefinitions = [
          ...directlyLeftRecursiveDefinitions,
          ...indirectlyLeftRecursiveDefinitions
        ];

  indirectlyLeftRecursiveDefinitions = DirectlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  const addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);

  addLeftRecursiveDefinitions(addedLeftRecursiveDefinitions, context);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  const indirectlyReducedRule = IndirectlyReducedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

  if (indirectlyReducedRule !== null) {
    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          rule = leftRecursiveDefinition.getRule(),
          definition = replacementDefinition; ///

    rule.addDefinition(definition);
  }

  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        indirectlyRepeatedRule = IndirectlyRepeatedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

  const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName),
        definition = replacementDefinition; ///

  rule.addDefinition(definition);

  const indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context),
        removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions, ///
        leftRecursiveDefinition = rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule);

  removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);

  addLeftRecursiveDefinition(leftRecursiveDefinition, context);
}

function rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule) {
  let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

  const least = indirectlyLeftRecursiveDefinition.isLeast();

  let definition = leftRecursiveDefinition.getDefinition();

  const rule = leftRecursiveDefinition.getRule(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition),
        replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule),
        replacedDefinition = definition;  ///

  definition = replacementDefinition; ///

  leftRecursiveDefinition = least ? ///
                              DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) :
                                IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition);

  definitionsIncludesDefinition ?
    rule.replaceDefinition(replacedDefinition, replacementDefinition) :
      rule.addDefinition(definition);

  return leftRecursiveDefinition;
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context) {
  let indirectlyLeftRecursiveDefinitions;

  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        definition = indirectlyLeftRecursiveDefinition.getDefinition(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition);

  if (definitionsIncludesDefinition) {
    const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

    indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
      const indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
            indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

      if ((indirectlyLeftRecursiveDefinitionDefinition !== definition) && (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName)) {
        return true;
      }
    }, context);

    indirectlyLeftRecursiveDefinitions = [  ///
      indirectlyLeftRecursiveDefinition,
      ...indirectlyLeftRecursiveDefinitions
    ];

    const definitions = indirectlyLeftRecursiveDefinitions.map((removedLeftRecursiveDefinition) => {
      const definition = removedLeftRecursiveDefinition.getDefinition();

      return definition;
    });

    rule.removeDefinitions(definitions);
  } else {
    indirectlyLeftRecursiveDefinitions = [
      indirectlyLeftRecursiveDefinition
    ];
  }

  return indirectlyLeftRecursiveDefinitions;
}
