"use strict";

import RecursiveDefinition from "./definition/recursive";
import LeftRecursiveDefinition from "./definition/leftRecursive";
import DirectlyLeftRecursiveDefinition from "./definition/leftRecursive/directly";
import IndirectlyLeftRecursiveDefinition from "./definition/leftRecursive/indirectly";
import ImplicitlyLeftRecursiveDefinition from "./definition/leftRecursive/implicitly";

import { isInstanceOf } from "./utilities/class";

export default function eliminateLeftRecursion(startRule, ruleMap) {
  const rule = startRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  replaceLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

  rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleMap);

  const startRuleName = startRule.getName();

  startRule = ruleMap[startRuleName]; ///

  return startRule;
}

function replaceLeftRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  let recursiveDefinition;

  const leftRecursiveDefinition = IndirectlyLeftRecursiveDefinition.fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) ||
                                  DirectlyLeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition) ||
                                  LeftRecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);

  if (leftRecursiveDefinition === null) {
    recursiveDefinition = RecursiveDefinition.fromRuleNameAndDefinition(ruleName, definition);
  } else {
    const leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, DirectlyLeftRecursiveDefinition),
          leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = isInstanceOf(leftRecursiveDefinition, IndirectlyLeftRecursiveDefinition);

    if (false) {
      ///
    } else if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
      const directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      directlyLeftRecursiveDefinition.replace(ruleMap);

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    } else if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition,  ///
            implicitlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

      indirectlyLeftRecursiveDefinition.replace(ruleMap);
      implicitlyLeftRecursiveDefinition.replace(ruleMap);

      leftRecursiveDefinitions.push(leftRecursiveDefinition);
    }

    recursiveDefinition = leftRecursiveDefinition;  ///
  }

  return recursiveDefinition;
}

function replaceLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  definitions.forEach((definition) => {
    const definitionDirectlyLeftRecursiveDefinition = isInstanceOf(definition, DirectlyLeftRecursiveDefinition),
          definitionIndirectlyLeftRecursiveDefinition = isInstanceOf(definition, IndirectlyLeftRecursiveDefinition),
          definitionImplicitlyLeftRecursiveDefinition = isInstanceOf(definition, ImplicitlyLeftRecursiveDefinition),
          recursiveDefinition = (definitionDirectlyLeftRecursiveDefinition || definitionIndirectlyLeftRecursiveDefinition || definitionImplicitlyLeftRecursiveDefinition) ?
                                  definition :  ///
                                    replaceLeftRecursiveDefinition(ruleName, definition, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);

    if (recursiveDefinition !== null) {
      const previousRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            previousRecursiveRuleNames = previousRecursiveDefinitions.map((previousRecursiveDefinition) => recursiveRuleNameFromRecursiveDefinition(previousRecursiveDefinition)),
            recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames();

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const previousRecursiveRuleNamesIncludesRecursiveRuleName = previousRecursiveRuleNames.includes(recursiveRuleName);

        if (!previousRecursiveRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = ruleMap[ruleName] || null; ///

          if (rule !== null) {
            const recursiveDefinitions = previousRecursiveDefinitions;  ///

            replaceLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, ruleMap);
          }
        }
      });
    }
  });
}

function rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, ruleMap) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => leftRecursiveDefinition.rewrite(ruleMap));
}

function recursiveRuleNameFromRecursiveDefinition(recursiveDefinition) {
  const recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveRuleName = recursiveDefinitionRuleName;  ///

  return recursiveRuleName;
}
