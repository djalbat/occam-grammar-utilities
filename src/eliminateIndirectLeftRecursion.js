"use strict";

import ReplacementDefinition from "./replacementDefinition";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import DirectlyRepeatRuleOperation from "./ruleOperation/directlyRepeat";
import DirectlyReduceRuleOperation from "./ruleOperation/directlyReduce";
import IndirectlyReduceRuleOperation from "./ruleOperation/indirectlyReduce";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

import { first } from "./utilities/array";
import { indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";
import { addLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinition,
         addDirectlyLeftRecursiveDefinitions,
         findDirectlyLeftRecursiveDefinitions,
         addIndirectlyLeftRecursiveDefinitions,
         findIndirectlyLeftRecursiveDefinitions,
         removeDirectlyLeftRecursiveDefinitions,
         removeIndirectlyLeftRecursiveDefinitions } from "./utilities/context"

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

function directlyReduceRule(directlyLeftRecursiveDefinition, context) {
  const disallowIsolated = false,
        directlyReducedRule = DirectlyReduceRuleOperation.execute(directlyLeftRecursiveDefinition, disallowIsolated, context);

  return directlyReducedRule;
}

function directlyRepeatRule(directlyLeftRecursiveDefinition, context) {
  const directlyRepeatedRule = DirectlyRepeatRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  return directlyRepeatedRule;
}

function indirectlyReduceRule(indirectlyLeftRecursiveDefinition, context) {
  const indirectlyReducedRule = IndirectlyReduceRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

  if (indirectlyReducedRule !== null) {
    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          rule = leftRecursiveDefinition.getRule(),
          definition = replacementDefinition; ///

    rule.addDefinition(definition);
  }
}

function indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, context) {
  const { ruleMap, indirectlyLeftRecursiveDefinitions } = context,
        rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = rule.getName(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

  let indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

  if (indirectlyRepeatedRule === null) {
    indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions);

    ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName),
          definition = replacementDefinition; ///

    rule.addDefinition(definition);
  }

  return indirectlyRepeatedRule;
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, context) {
  const directlyReducedRule = directlyReduceRule(directlyLeftRecursiveDefinition, context),
        directlyRepeatedRule = directlyRepeatRule(directlyLeftRecursiveDefinition, context);

  let directlyLeftRecursiveDefinitions,
        indirectlyLeftRecursiveDefinitions;

  const rule = directlyLeftRecursiveDefinition.getRule(),
        definition = null,
        leftRecursiveRuleName = null;

  directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context);

  indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context)

  directlyLeftRecursiveDefinitions = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);

  indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule);

  addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);

  addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  indirectlyReduceRule(indirectlyLeftRecursiveDefinition, context);

  const indirectlyRepeatedRule = indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, context),
        indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context),
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
        definition = null,
        leftRecursiveRuleName = null,
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context),
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

    indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context);

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

function retrieveGreatestIndirectlyLeftRecursiveDefinition(context) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const { indirectlyLeftRecursiveDefinitions } = context;

  indirectlyLeftRecursiveDefinitions.forEach((indirectlyLeftRecursiveDefinition) => {
    if (greatestIndirectlyLeftRecursiveDefinition === null) {
      greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
    } else {
      const indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(greatestIndirectlyLeftRecursiveDefinition);

      if (indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition) {
        greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
      }
    }
  });

  return greatestIndirectlyLeftRecursiveDefinition;
}
