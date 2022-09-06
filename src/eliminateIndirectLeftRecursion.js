"use strict";

import { arrayUtilities } from "necessary";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";
import IndirectlyReducedRule from "./rule/reduced/indirectly";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

const { find, push, first, filter } = arrayUtilities;

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
  const { ruleMap, leftRecursiveDefinitions } = context,
        rule = directlyLeftRecursiveDefinition.getRule(),
        disallowIsolated = false,
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated);

  if (directlyReducedRule !== null) {
    const directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  }

  return directlyReducedRule;
}

function directlyRepeatRule(directlyLeftRecursiveDefinition, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        rule = directlyLeftRecursiveDefinition.getRule(),
        directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  return directlyRepeatedRule;
}

function indirectlyReduceRule(indirectlyLeftRecursiveDefinition, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = rule.getName(),
        indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName);

  let indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;

  if (indirectlyReducedRule === null) {
    indirectlyReducedRule = IndirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;
  }

  const vacuous = indirectlyReducedRule.isVacuous();

  if (!vacuous) {
    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          rule = leftRecursiveDefinition.getRule(),
          definition = replacementDefinition; ///

    rule.addDefinition(definition);
  }
}

function indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, context) {
  const { ruleMap, leftRecursiveDefinitions } = context,
        rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = rule.getName(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName);

  let indirectlyRepeatedRule = ruleMap[indirectlyRepeatedRuleName] || null;

  if (indirectlyRepeatedRule === null) {
    indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleLeftRecursiveRuleNameAndLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions);

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

  const rule = directlyLeftRecursiveDefinition.getRule(),
        definition = null,
        leftRecursiveRuleName = null,
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, context);

  let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context);

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  const removedLeftRecursiveDefinitions = [
    ...directlyLeftRecursiveDefinitions,
    ...indirectlyLeftRecursiveDefinitions
  ];

  const addedLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule);

  amendLeftRecursiveDefinitions(context, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  indirectlyReduceRule(indirectlyLeftRecursiveDefinition, context);

  const indirectlyRepeatedRule = indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, context),
        removedLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context),
        addedLeftRecursiveDefinition = rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule);

  amendLeftRecursiveDefinitions(context, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
}

function amendLeftRecursiveDefinitions(context, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions) {
  const { leftRecursiveDefinitions } = context;

  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

function rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule) {
  const least = indirectlyLeftRecursiveDefinition.isLeast(),
        leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

  let definition = leftRecursiveDefinition.getDefinition();

  const rule = leftRecursiveDefinition.getRule(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition),
        replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule),
        replacedDefinition = definition;  ///

  definition = replacementDefinition; ///

  const addedLeftRecursiveDefinition = least ? ///
                                         DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) :
                                           IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition);

  definitionsIncludesDefinition ?
    rule.replaceDefinition(replacedDefinition, replacementDefinition) :
      rule.addDefinition(definition);

  return addedLeftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinition(rule, context) {
  const { leftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
          const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

          if (leftRecursiveDefinitionRule === rule) {
            const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          }
        }) || null;

  return directlyLeftRecursiveDefinitions;
}

function findDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, context) {
  const { leftRecursiveDefinitions } = context,
        rule = directlyLeftRecursiveDefinition.getRule(),
        directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

          if (leftRecursiveDefinitionRule === rule) {
            const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

            if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
              return true;
            }
          }
        });

  return directlyLeftRecursiveDefinitions;
}

function findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context) {
  const { leftRecursiveDefinitions } = context,
        indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

          if (leftRecursiveDefinitionRule === rule) {
            const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

            if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
              if (leftRecursiveRuleName === null) {
                return true;
              }

              const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
                    indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
                    indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

              if ((indirectlyLeftRecursiveDefinitionDefinition !== definition) && (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName)) {
                return true;
              }
            }
          }
        });

  return indirectlyLeftRecursiveDefinitions;
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
  let removedLeftRecursiveDefinitions;

  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        definition = indirectlyLeftRecursiveDefinition.getDefinition(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition);

  if (definitionsIncludesDefinition) {
    const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context);

    removedLeftRecursiveDefinitions = [  ///
      indirectlyLeftRecursiveDefinition,
      ...indirectlyLeftRecursiveDefinitions
    ];

    const definitions = removedLeftRecursiveDefinitions.map((removedLeftRecursiveDefinition) => {
      const definition = removedLeftRecursiveDefinition.getDefinition();

      return definition;
    });

    rule.removeDefinitions(definitions);
  } else {
    removedLeftRecursiveDefinitions = [
      indirectlyLeftRecursiveDefinition
    ];
  }

  return removedLeftRecursiveDefinitions;
}

function rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule) {
  const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
        indirectlyRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
        rule = indirectlyRecursiveDefinition.getRule(),
        addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
          let definition = indirectlyLeftRecursiveDefinition.getDefinition();

          const directly = true,
                replacedDefinition = definition,  ///
                replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, directlyRepeatedRule);

          definition = replacementDefinition; ///

          const addedLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition, directly);  ///

          rule.replaceDefinition(replacedDefinition, replacementDefinition);

          return addedLeftRecursiveDefinition;
        });

  return addedLeftRecursiveDefinitions;
}

function retrieveGreatestIndirectlyLeftRecursiveDefinition(context) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const { leftRecursiveDefinitions } = context,
        indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

          if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
            return true;
          }
        });

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
