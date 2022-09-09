"use strict";

import DirectlyReducedRuleOperation from "./operation/rule/directlyReduced";
import DirectlyRepeatedRuleOperation from "./operation/rule/directlyRepeated";
import IndirectlyReducedRuleOperation from "./operation/rule/indirectlyReduced";
import IndirectlyRepeatedRuleOperation from "./operation/rule/indirectlyRepeated";
import LeftRecursiveDefinitionOperation from "./operation/definition/leftRecursive";
import DirectlyLeftRecursiveDefinitionOperation from "./operation/definition/directlyLeftRecursive";
import IndirectlyLeftRecursiveDefinitionOperation from "./operation/definition/indirectlyLeftRecursive";

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
  const allowIsolated = true,
        directlyReducedRule = DirectlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context),
        directlyRepeatedRule = DirectlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  const rule = directlyLeftRecursiveDefinition.getRule();

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
  const indirectlyReducedRule = IndirectlyReducedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context),
        indirectlyRepeatedRule = IndirectlyRepeatedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
          const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();

          if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
            return true;
          }
        }, context);

  IndirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);

  const leftRecursiveDefinition = LeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context),
        addedLeftRecursiveDefinition = leftRecursiveDefinition, ///
        removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

  removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);

  addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context);
}
