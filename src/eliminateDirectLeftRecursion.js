"use strict";

import ReplacementDefinition from "./replacementDefinition";
import DirectlyRepeatRuleOperation from "./operation/directlyRepeatRule";
import DirectlyReduceRuleOperation from "./operation/directlyReduceRule";

import { findDirectlyLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinitions,
         removeDirectlyLeftRecursiveDefinitions } from "./utilities/context";

export default function eliminateDirectLeftRecursion(context) {
  let directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);

  while (directlyLeftRecursiveDefinition !== null) {
    rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context);

    directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(context);
  }
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context) {
  const disallowIsolated = true;

  DirectlyReduceRuleOperation.execute(directlyLeftRecursiveDefinition, disallowIsolated, context);

  DirectlyRepeatRuleOperation.execute(directlyLeftRecursiveDefinition, context);

  const rule = directlyLeftRecursiveDefinition.getRule();

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context);

  const replacementDefinition = ReplacementDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  rule.replaceAllDefinitions(replacementDefinition);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);
}
