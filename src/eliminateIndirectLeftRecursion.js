"use strict";

import Definition from "./definition";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";

import { first } from "./utilities/array";
import { findLeftRecursiveDefinitions, retrieveGreatestIndirectlyLeftRecursiveDefinition } from "./utilities/context"

let count = 0;

const maxCount = 1;

export default function eliminateIndirectLeftRecursion(context) {
  let greatestIndirectlyLeftRecursiveDefinition = count++ >= maxCount ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(context);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition; ///

    rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context);

    greatestIndirectlyLeftRecursiveDefinition = count++ >= maxCount ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(context);
  }
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition(),
        leftRecursiveDefinitionRule = leftRecursiveDefinition.getRule(),
        leftRecursiveDefinitionRuleName = leftRecursiveDefinitionRule.getName(),
        leftRecursiveDefinitions = findLeftRecursiveDefinitions(leftRecursiveDefinitionRule, (leftRecursiveDefinition) => {
          const leftRecursiveDefinitionLeftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(),
                firstLeftRecursiveDefinitionLeftRecursiveRuleName = first(leftRecursiveDefinitionLeftRecursiveRuleNames);

          if (firstLeftRecursiveDefinitionLeftRecursiveRuleName === ruleName) {
            return true;
          }
        }, context),
        leftRecursiveRuleName = leftRecursiveDefinitionRuleName;  ///

  const indirectlyRepeatedRule = IndirectlyRepeatedRule.fromRuleNameLeftRecursiveRuleNameAndLeftRecursiveDefinitions(ruleName, leftRecursiveRuleName, leftRecursiveDefinitions),
        indirectlyRepeatedRuleName = indirectlyRepeatedRule.getName();

  const { ruleMap } = context;

  ruleMap[indirectlyRepeatedRuleName] = indirectlyRepeatedRule;

  let definition,
      definitions;

  definitions = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
    const definition = leftRecursiveDefinition.getDefinition();

    return definition;
  });

  leftRecursiveDefinitionRule.removeDefinitions(definitions);

  definition = Definition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

  leftRecursiveDefinitionRule.addDefinition(definition);

  definitions = rule.getDefinitions();

  definitions = definitions.forEach((definition) => { ///
    definition = Definition.fromDefinitionAndLeftRecursiveDefinition(definition, leftRecursiveDefinition);  ///

    return definition;
  });

  leftRecursiveDefinitionRule.addDefinitions(definitions);
}
