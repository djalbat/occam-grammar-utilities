"use strict";

import DirectlyReducedRuleOperation from "./operation/rule/directlyReduced";
import DirectlyRepeatedRuleOperation from "./operation/rule/directlyRepeated";
import DirectlyLeftRecursiveDefinitionOperation from "./operation/definition/directlyLeftRecursive";

import { removeLeftRecursiveDefinitions,
         findDirectlyLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinitions } from "./utilities/context";

export default function eliminateDirectLeftRecursion(context) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context) {
  const allowIsolated = false,
        directlyReducedRule = DirectlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context),
        directlyRepeatedRule = DirectlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  DirectlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);

  const rule = directlyLeftRecursiveDefinition.getRule(),
        directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
        removedLeftRecursiveDefinitions = directlyLeftRecursiveDefinitions; ///

  removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);
}
