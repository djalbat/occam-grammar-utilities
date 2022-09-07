"use strict";

import ReplacementDefinition from "./replacementDefinition";
import DirectlyRepeatRuleOperation from "./ruleOperation/directlyRepeat";
import DirectlyReduceRuleOperation from "./ruleOperation/directlyReduce";

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

function directlyReduceRule(directlyLeftRecursiveDefinition, context) {
  const disallowIsolated = true;

  DirectlyReduceRuleOperation.execute(directlyLeftRecursiveDefinition, disallowIsolated, context);
}

function directlyRepeatRule(directlyLeftRecursiveDefinition, context) {
  DirectlyRepeatRuleOperation.execute(directlyLeftRecursiveDefinition, context);
}

function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, context) {
  directlyReduceRule(directlyLeftRecursiveDefinition, context);

  directlyRepeatRule(directlyLeftRecursiveDefinition, context);

  const rule = directlyLeftRecursiveDefinition.getRule();

  const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context);

  rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  removeDirectlyLeftRecursiveDefinitions(directlyLeftRecursiveDefinitions, context);
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
  const rule = directlyLeftRecursiveDefinition.getRule(),
        replacementDefinition = ReplacementDefinition.fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition);

  rule.replaceAllDefinitions(replacementDefinition);
}
