"use strict";

import { arrayUtilities } from "necessary";

import DirectlyReducedRule from "./rule/reduced/directly";
import DirectlyRepeatedRule from "./rule/repeated/directly";
import ReplacementDefinition from "./replacementDefinition";
import IndirectlyReducedRule from "./rule/reduced/indirectly";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import DirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/directly";
import IndirectlyLeftRecursiveDefinition from "./recursiveDefinition/left/indirectly";

import { indirectlyReducedRuleNameFromRuleName } from "./utilities/ruleName";

const { find, push, filter } = arrayUtilities;

let count = 0;

export default function eliminateIndirectLeftRecursion(leftRecursiveDefinitions, ruleMap) {
  let greatestIndirectlyLeftRecursiveDefinition = retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition, ///
          rule = indirectlyLeftRecursiveDefinition.getRule(),
          directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(rule, leftRecursiveDefinitions);

    (directlyLeftRecursiveDefinition !== null) ?
      rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

    greatestIndirectlyLeftRecursiveDefinition = ++count > Infinity ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(leftRecursiveDefinitions);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  directlyRepeatRule(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

  directlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

  const rule = directlyLeftRecursiveDefinition.getRule(),
        directlyLeftRecursiveDefinitions = rewriteDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, leftRecursiveDefinitions),
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        removedLeftRecursiveDefinitions = [
          ...directlyLeftRecursiveDefinitions,
          ...indirectlyLeftRecursiveDefinitions
        ];

  //
  // indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
  //   indirectlyLeftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromIndirectlyLeftRecursiveDefinitionAndDirectlyRepeatedRuleName(indirectlyLeftRecursiveDefinition, directlyRepeatedRuleName);  ///
  //
  //   return indirectlyLeftRecursiveDefinition;
  // });
  //
  // let replacementDefinitions = [
  //   ...indirectlyLeftRecursiveDefinitions
  // ];
  //
  // if (directlyReducedRuleName !== null) {
  //   const leftRecursiveDefinition = LeftRecursiveDefinition.fromDirectlyReducedRuleNameAndDirectlyRepeatedRuleName(directlyReducedRuleName, directlyRepeatedRuleName);
  //
  //   replacementDefinitions = [
  //     ...replacementDefinitions,
  //     leftRecursiveDefinition
  //   ];
  // }
  //
  // rule.replaceAllDefinitions(...replacementDefinitions);
  //
  // const addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///
  //
  // amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, ...addedLeftRecursiveDefinitions);
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

  indirectlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap);

  const indirectlyRepeatedRule = indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap),
        indirectlyLeftRecursiveDefinitions = rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions),
        addedLeftRecursiveDefinition = rewriteLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule), ///
        removedLeftRecursiveDefinitions = [
          leftRecursiveDefinition,
          ...indirectlyLeftRecursiveDefinitions
        ];

  amendLeftRecursiveDefinitions(leftRecursiveDefinitions, removedLeftRecursiveDefinitions, addedLeftRecursiveDefinition);
}

function directlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        disallowIsolated = false,
        directlyReducedRule = DirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, disallowIsolated);

  if (directlyReducedRule !== null) {
    const directlyReducedRuleName = directlyReducedRule.getName();

    ruleMap[directlyReducedRuleName] = directlyReducedRule;
  }
}

function directlyRepeatRule(directlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        directlyRepeatedRule = DirectlyRepeatedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        directlyRepeatedRuleName = directlyRepeatedRule.getName();

  ruleMap[directlyRepeatedRuleName] = directlyRepeatedRule;
}

function indirectlyReduceRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = rule.getName(),
        indirectlyReducedRuleName = indirectlyReducedRuleNameFromRuleName(ruleName),
        indirectlyReducedRule = ruleMap[indirectlyReducedRuleName] || IndirectlyReducedRule.fromRuleAndLeftRecursiveDefinitions(rule, leftRecursiveDefinitions);  ///

  if (indirectlyReducedRule !== null) {
    const replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinitionAndIndirectlyReducedRule(indirectlyLeftRecursiveDefinition, indirectlyReducedRule),
          leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
          rule = leftRecursiveDefinition.getRule(),
          definition = replacementDefinition; ///

    ruleMap[indirectlyReducedRuleName] = indirectlyReducedRule;

    rule.addDefinition(definition);
  }
}

function indirectlyRepeatRule(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions, ruleMap) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleLeftRecursiveRuleNameAndLeftRecursiveDefinitions(rule, leftRecursiveRuleName, leftRecursiveDefinitions),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  return indirectlyRepeatedRule;
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

function findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, leftRecursiveRuleName = null) {
  const indirectlyLeftRecursiveDefinitions = find(leftRecursiveDefinitions, (leftRecursiveDefinition) => {
    const leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule();

    if (leftRecursiveDefinitionRule === rule) {
      const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = (leftRecursiveDefinition instanceof IndirectlyLeftRecursiveDefinition);

      if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
        if (leftRecursiveRuleName === null) {
          return true;
        }

        const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
              indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

        if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
          return true;
        }
      }
    }
  });

  return indirectlyLeftRecursiveDefinitions;
}

function rewriteDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinition, leftRecursiveDefinitions) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions),
        definitions = directlyLeftRecursiveDefinitions.map((directlyLeftRecursiveDefinition) => {
          const definition = directlyLeftRecursiveDefinition.getDefinition();

          return definition;
        });

  rule.removeDefinitions(definitions);

  return directlyLeftRecursiveDefinitions;
}

function rewriteIndirectlyLeftRecursiveDefinitions(indirectlyLeftRecursiveDefinition, leftRecursiveDefinitions) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        replacedDefinition = indirectlyLeftRecursiveDefinition.getDefinition(), ///
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveDefinitions, leftRecursiveRuleName),
        definitions = indirectlyLeftRecursiveDefinitions.map((indirectlyLeftRecursiveDefinition) => {
          const definition = indirectlyLeftRecursiveDefinition.getDefinition();

          return definition;
        }),
        replacementDefinition = ReplacementDefinition.fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, leftRecursiveRuleName);  ///

  rule.replaceDefinition(replacedDefinition, replacementDefinition);

  rule.removeDefinitions(definitions);

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
