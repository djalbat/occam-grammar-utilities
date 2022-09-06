"use strict";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";
import IndirectlyReducedRule from "./rule/reduced/indirectly";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

import { push, first, leftDifference } from "./utilities/array";
import { indirectlyReducedRuleNameFromRuleName, indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName } from "./utilities/ruleName";

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
  const { ruleMap, directlyLeftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions } = context,
        rule = directlyLeftRecursiveDefinition.getRule(),
        disallowIsolated = false,
        leftRecursiveDefinitions = [
          ...directlyLeftRecursiveDefinitions,
          ...indirectlyLeftRecursiveDefinitions
        ],
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated);

  if (directlyReducedRule !== null) {
    const directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  }

  return directlyReducedRule;
}

function directlyRepeatRule(directlyLeftRecursiveDefinition, context) {
  const { ruleMap, directlyLeftRecursiveDefinitions } = context,
        rule = directlyLeftRecursiveDefinition.getRule(),
        directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndDirectlyLeftRecursiveDefinitions(rule, directlyLeftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  return directlyRepeatedRule;
}

function indirectlyReduceRule(indirectlyLeftRecursiveDefinition, context) {
  const { ruleMap, indirectlyLeftRecursiveDefinitions } = context,
        rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = rule.getName(),
        indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName);

  let indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || null;

  if (indirectlyReducedRule === null) {
    indirectlyReducedRule = IndirectlyReducedRule.fromRuleAndIndirectlyLeftRecursiveDefinitions(rule, indirectlyLeftRecursiveDefinitions);

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

  directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, context);

  indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context)

  directlyLeftRecursiveDefinitions = rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);

  indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule);

  addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);

  addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context);
}

function addLeftRecursiveDefinition(leftRecursiveDefinition, context) {
  const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof DirectlyLeftRecursiveDefinition);

  if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
    const directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

    addDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, context);
  }

  const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

  if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
    const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

    addIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context);
  }
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

function addDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, context) {
  const { directlyLeftRecursiveDefinitions } = context;

  directlyLeftRecursiveDefinitions.push(directlyLeftRecursiveDefinition);
}

function findDirectlyLeftRecursiveDefinition(rule, context) {
  const { directlyLeftRecursiveDefinitions } = context,
        directlyLeftRecursiveDefinition = directlyLeftRecursiveDefinitions.find((directlyLeftRecursiveDefinition) => {
          const directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();

          if (directlyLeftRecursiveDefinitionRule === rule) {
            return true;
          }
        }) || null;

  return directlyLeftRecursiveDefinition;
}

function addDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const directlyLeftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  ({directlyLeftRecursiveDefinitions} = context);

  const directlyLeftRecursiveDefinitionsA = directlyLeftRecursiveDefinitions; ///

  push(directlyLeftRecursiveDefinitionsA, directlyLeftRecursiveDefinitionsB);
}

function addIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, context) {
  const { indirectlyLeftRecursiveDefinitions } = context;

  indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);
}

function findDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, context) {
  let { directlyLeftRecursiveDefinitions } = context;

  const rule = directlyLeftRecursiveDefinition.getRule();

  directlyLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions.filter((directlyLeftRecursiveDefinition) => { ///
    const directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();

    if (directlyLeftRecursiveDefinitionRule === rule) {
      return true;
    }
  });

  return directlyLeftRecursiveDefinitions;
}

function addIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  ({indirectlyLeftRecursiveDefinitions} = context);

  const indirectlyLeftRecursiveDefinitionsA = indirectlyLeftRecursiveDefinitions; ///

  push(indirectlyLeftRecursiveDefinitionsA, indirectlyLeftRecursiveDefinitionsB);
}

function removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context) {
  const directlyLeftRecursiveDefinitionsB = directlyLeftRecursiveDefinitions; ///

  ({ directlyLeftRecursiveDefinitions } = context);

  const directlyLeftRecursiveDefinitionsA = directlyLeftRecursiveDefinitions; ///

  leftDifference(directlyLeftRecursiveDefinitionsA, directlyLeftRecursiveDefinitionsB);
}

function findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, context) {
  let { indirectlyLeftRecursiveDefinitions } = context;

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.filter((indirectlyLeftRecursiveDefinition) => { ///
    const indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();

    if (indirectlyLeftRecursiveDefinitionRule === rule) {
      if (leftRecursiveRuleName === null) {
        return true;
      }

      const indirectlyLeftRecursiveDefinitionDefinition = indirectlyLeftRecursiveDefinition.getDefinition(),
            indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

      if ((indirectlyLeftRecursiveDefinitionDefinition !== definition) && (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName)) {
        return true;
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

function removeIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, context) {
  const indirectlyLeftRecursiveDefinitionsB = indirectlyLeftRecursiveDefinitions; ///

  ({ indirectlyLeftRecursiveDefinitions } = context);

  const indirectlyLeftRecursiveDefinitionsA = indirectlyLeftRecursiveDefinitions; ///

  leftDifference(indirectlyLeftRecursiveDefinitionsA, indirectlyLeftRecursiveDefinitionsB);
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
