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

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition, ///
          rule = indirectlyLeftRecursiveDefinition.getRule(),
          directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(rule, leftRecursiveDefinitions);

    (directlyLeftRecursiveDefinition !== null) ?
      rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function directlyReduceRule(rule, leftRecursiveDefinitions, ruleMap) {
  const disallowIsolated = false,
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated);

  if (directlyReducedRule !== null) {
    const directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  }

  return directlyReducedRule;
}

function directlyRepeatRule(rule, leftRecursiveDefinitions, ruleMap) {
  const directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;

  return directlyRepeatedRule;
}

function indirectlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
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

function indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
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

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = directlyLeftRecursiveDefinition.getRule();

  const directlyReducedRule = directlyReduceRule(rule, leftRecursiveDefinitions, ruleMap),
        directlyRepeatedRule = directlyRepeatRule(rule, leftRecursiveDefinitions, ruleMap);

  const definition = null,
        leftRecursiveRuleName = null,
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);

  let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, leftRecursiveDefinitions);

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, directlyRepeatedRule, directlyReducedRule);

  const removedLeftRecursiveDefinitions = [
    ...directlyLeftRecursiveDefinitions,
    ...indirectlyLeftRecursiveDefinitions
  ];

  indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule); ///

  const addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

  indirectlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

  const indirectlyRepeatedRule = indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap),
        indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions),
        addedLeftRecursiveDefinition = rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule), ///
        removedLeftRecursiveDefinitions = [
          leftRecursiveDefinition,
          ...indirectlyLeftRecursiveDefinitions
        ];

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
}

function amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions) {
  filter(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition = removedLeftRecursiveDefinitions.includes(leftRecursiveDefinition);

    if (!removedLeftRecursiveDefinitionsIncludesLeftRecursiveDefinition) {
      return true;
    }
  });

  push(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}

function rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule) {
  let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

  const least = indirectlyLeftRecursiveDefinition.isLeast(),
        replacedDefinition = leftRecursiveDefinition.getDefinition(), ///
        replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyRepeatedRule(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule),
        rule = leftRecursiveDefinition.getRule(),
        definition = replacementDefinition; ///

  leftRecursiveDefinition = least ?
                              DirectlyLeftRecursiveDefinition.fromRuleAndDefinition(rule, definition) :
                                IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDefinition(indirectlyLeftRecursiveDefinition, definition);

  const definitions = rule.getDefinitions(),
        definitionsIncludesReplacedDefinition = definitions.includes(replacedDefinition);

  definitionsIncludesReplacedDefinition ?
    rule.replaceDefinition(replacedDefinition, replacementDefinition) :
      rule.addDefinition(definition);

  return leftRecursiveDefinition;
}

function findDirectlyLeftRecursiveDefinition(rule, leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.find((leftRecursiveDefinition) => {
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

function findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions) {
  const directlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
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

function findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, leftRecursiveDefinitions) {
  const indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
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

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinitions, leftRecursiveDefinitions, directlyRepeatedRule, directlyReducedRule) {
  const rule = directlyLeftRecursiveDefinitions.getRule(),
        definition = null,
        leftRecursiveRuleName = null,
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, leftRecursiveDefinitions),
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

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        definition = indirectlyLeftRecursiveDefinition.getDefinition(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, definition, leftRecursiveRuleName, leftRecursiveDefinitions);

  indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);

  const definitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
          const definition = indirectlyLeftRecursiveDefinition.getDefinition();

          return definition;
        });

  rule.removeDefinitions(definitions);

  return indirectlyLeftRecursiveDefinitions;
}

function rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinitions, directlyRepeatedRule) {
  const firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions),
        indirectlyRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ///
        rule = indirectlyRecursiveDefinition.getRule();

  indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
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

function retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions) {
  let greatestIndirectlyLeftRecursiveDefinition = null;

  const indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
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
