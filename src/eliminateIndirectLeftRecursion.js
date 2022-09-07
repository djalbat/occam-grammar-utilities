"use strict";

import ReplacementDefinition from "./replacementDefinition";
import DirectlyRepeatRuleOperation from "./operation/directlyRepeatRule";
import DirectlyReduceRuleOperation from "./operation/directlyReduceRule";
import IndirectlyRepeatRuleOperation from "./operation/indirectlyRepeatRule";
import IndirectlyReduceRuleOperation from "./operation/indirectlyReduceRule";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

import { first } from "./utilities/array";
import { addLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinition,
         addDirectlyLeftRecursiveDefinitions,
         findDirectlyLeftRecursiveDefinitions,
         addIndirectlyLeftRecursiveDefinitions,
         findIndirectlyLeftRecursiveDefinitions,
         removeDirectlyLeftRecursiveDefinitions,
         removeIndirectlyLeftRecursiveDefinitions,
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
  const disallowIsolated = false,
        directlyReducedRule = DirectlyReduceRuleOperation.execute(directlyLeftRecursiveDefinition, disallowIsolated, context),
        directlyRepeatedRule = DirectlyRepeatRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  let directlyLeftRecursiveDefinitions,
        indirectlyLeftRecursiveDefinitions;

  const rule = directlyLeftRecursiveDefinition.getRule();

  directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context);

  indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
    ///

    return true;
  }, context);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context)

  directlyLeftRecursiveDefinitions = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);

  indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule);

  addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);

  addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  const indirectlyReducedRule = IndirectlyReduceRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

  if (indirectlyReducedRule !== null) {
    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          rule = leftRecursiveDefinition.getRule(),
          definition = replacementDefinition; ///

    rule.addDefinition(definition);
  }

  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        indirectlyRepeatedRule = IndirectlyRepeatRuleOperation.execute(indirectlyLeftRecursiveDefinition, context),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

  const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName),
        definition = replacementDefinition; ///

  rule.addDefinition(definition);

  const indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context),
        leftRecursiveDefinition = rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule);

  removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);

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

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinitions, directlyRepeatedRule, directlyReducedRule, context) {
  const rule = directlyLeftRecursiveDefinitions.getRule(),
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
          ///

          return true;
        }, context),
        definitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
          const definition = indirectlyLeftRecursiveDefinition.getDefinition();

          return definition;
        });

  if (directlyReducedRule == null) {
    rule.removeAllDefinitions();
  } else {
    const replacementDefinition = ReplacementDefinition.fromDirectlyReducedRuleAndDirectlyRepeatedRule(directlyReducedRule, directlyRepeatedRule);

    rule.replaceAllDefinitions(replacementDefinition);
  }

  rule.addDefinitions(definitions);

  return directlyLeftRecursiveDefinitions;
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

function rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule) {
  const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
        indirectlyRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
        rule = indirectlyRecursiveDefinition.getRule();

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {  ///
    let definition = indirectlyLeftRecursiveDefinition.getDefinition();

    const directly = true,
          replacedDefinition = definition,  ///
          replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule);

    definition = replacementDefinition; ///

    indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition, directly);  ///

    rule.replaceDefinition(replacedDefinition, replacementDefinition);

    return indirectlyLeftRecursiveDefinition;
  });

  return indirectlyLeftRecursiveDefinitions;
}
