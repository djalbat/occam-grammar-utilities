"use strict";

import { arrayUtilities } from "necessary";

import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/leftRecursive";
import DirectlyLeftRecursiveDefinition from "./definition/leftRecursive/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/leftRecursive/indirectly";

import { findRule } from "./utilities/rule";
import { isInstanceOf } from "./utilities/class";

const { first } = arrayUtilities;

function eliminateLeftRecursion(rules) {
  const rulesLength = rules.length;

  if (rulesLength > 0) {
    const firstRule = first(rules),
          rule = firstRule, ///
          recursiveDefinitions = [],
          leftRecursiveDefinitions = [];

    replaceRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules);

    rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, rules);
  }
}

module.exports = eliminateLeftRecursion;

function replaceRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions, rules) {
  const leftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) ||
                                  DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                                  LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

  if (leftRecursiveDefinition !== null) {
    const leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

      implicitlyLeftRecursiveDefinition.replace(rules);
    }

    leftRecursiveDefinitions.push(leftRecursiveDefinition);
  }

  const recursiveDefinition = (leftRecursiveDefinition !== null) ?
                                leftRecursiveDefinition : ///
                                  RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

  if (recursiveDefinition !== null) {
    recursiveDefinition.replace(rules);
  }

  return recursiveDefinition;
}

function replaceRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionRecursiveDefinition = isInstanceOf(definition, RecursiveDefinition),
          recursiveDefinition = definitionRecursiveDefinition ?
                                  definition :  ///
                                    replaceRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions, rules);

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => recursiveRuleNameFromRecursiveDefinition(previousRecursiveDefinition)),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            replaceRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, rules) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => leftRecursiveDefinition.rewrite(rules));
}

function recursiveRuleNameFromRecursiveDefinition(recursiveDefinition) {
  const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveRuleName = recursiveDefinitionRuleName;  ///

  return recursiveRuleName;

}
