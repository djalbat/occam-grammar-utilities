"use strict";

import ReplacementDefinition from "./definition/replacement";
import IndirectlyRepeatedRule from "./rule/repeated/indirectly";
import DirectlyReducedRuleOperation from "./operation/rule/directlyReduced";
import DirectlyRepeatedRuleOperation from "./operation/rule/directlyRepeated";
import ImplicitlyReducedRuleOperation from "./operation/rule/implicitlyReduced";
import IndirectlyReducedRuleOperation from "./operation/rule/indirectlyReduced";
import IndirectlyRepeatedRuleOperation from "./operation/rule/indirectlyRepeated";
import LeftRecursiveDefinitionOperation from "./operation/definition/leftRecursive";
import DirectlyLeftRecursiveDefinitionOperation from "./operation/definition/directlyLeftRecursive";
import IndirectlyLeftRecursiveDefinitionOperation from "./operation/definition/indirectlyLeftRecursive";

import { first } from "./utilities/array";
import { addLeftRecursiveDefinition,
         addLeftRecursiveDefinitions,
         findLeftRecursiveDefinitions,
         removeLeftRecursiveDefinitions,
         findDirectlyLeftRecursiveDefinition,
         findDirectlyLeftRecursiveDefinitions,
         findIndirectlyLeftRecursiveDefinitions,
         retrieveGreatestIndirectlyLeftRecursiveDefinition } from "./utilities/context"

let count = 0;

const maxCount = 1;

export default function eliminateIndirectLeftRecursion(context) {
  let greatestIndirectlyLeftRecursiveDefinition = count++ >= maxCount ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(context);

  while (greatestIndirectlyLeftRecursiveDefinition !== null) {
    const indirectlyLeftRecursiveDefinition = greatestIndirectlyLeftRecursiveDefinition; ///
    //       rule = indirectlyLeftRecursiveDefinition.getRule();
    //       directlyLeftRecursiveDefinition = findDirectlyLeftRecursiveDefinition(rule, context);
    //
    // if (directlyLeftRecursiveDefinition !== null) {
    //   rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, context);
    // } else {
    const depth = indirectlyLeftRecursiveDefinition.getDepth();

    (depth > 1) ?
      reduceIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) :
        rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context);
    // }

    greatestIndirectlyLeftRecursiveDefinition = count++ >= maxCount ? null : retrieveGreatestIndirectlyLeftRecursiveDefinition(context);
  }
}

// function rewriteDirectLeftRecursion(directlyLeftRecursiveDefinition, indirectlyLeftRecursiveDefinition, context) {
//   const allowIsolated = true,
//         directlyReducedRule = DirectlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, allowIsolated, context),
//         directlyRepeatedRule = DirectlyRepeatedRuleOperation.execute(directlyLeftRecursiveDefinition, context);
//
//   const rule = directlyLeftRecursiveDefinition.getRule();
//
//   let indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, context);
//
//   const directlyLeftRecursiveDefinitions = findDirectlyLeftRecursiveDefinitions(rule, context),
//         removedLeftRecursiveDefinitions = [
//           ...directlyLeftRecursiveDefinitions,
//           ...indirectlyLeftRecursiveDefinitions
//         ];
//
//   indirectlyLeftRecursiveDefinitions = DirectlyLeftRecursiveDefinitionOperation.execute(directlyLeftRecursiveDefinition, directlyRepeatedRule, directlyReducedRule, context);
//
//   const addedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///
//
//   removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);
//
//   addLeftRecursiveDefinitions(addedLeftRecursiveDefinitions, context);
// }

function reduceIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        definition = indirectlyLeftRecursiveDefinition.getDefinition(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition);

  if (definitionsIncludesDefinition) {
    const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
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

    let definitions = leftRecursiveDefinitions.map((leftRecursiveDefinition) => {
      const definition = leftRecursiveDefinition.getDefinition();

      return definition;
    });

    leftRecursiveDefinitionRule.removeDefinitions(definitions);

    definitions = rule.getDefinitions();

    definitions.forEach((definition) => {

    });

    // const addedLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition, ///
    //       removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///
    //
    // removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);
    //
    // addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context);
  } else {
    const removedLeftRecursiveDefinitions = [
      indirectlyLeftRecursiveDefinition
    ];

    removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);
  }
}

function rewriteIndirectLeftRecursion(indirectlyLeftRecursiveDefinition, context) {
  const rule = indirectlyLeftRecursiveDefinition.getRule(),
        definition = indirectlyLeftRecursiveDefinition.getDefinition(),
        definitions = rule.getDefinitions(),
        definitionsIncludesDefinition = definitions.includes(definition);

  if (definitionsIncludesDefinition) {
    const indirectlyReducedRule = IndirectlyReducedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context),
          indirectlyRepeatedRule = IndirectlyRepeatedRuleOperation.execute(indirectlyLeftRecursiveDefinition, context);

    IndirectlyLeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, context);

    const rule = indirectlyLeftRecursiveDefinition.getRule();

    let leftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

    const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
          indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(rule, (indirectlyLeftRecursiveDefinition) => {
            const indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
                  indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.getLeftRecursiveDefinition();

            if ((leftRecursiveDefinition === indirectlyLeftRecursiveDefinitionLeftRecursiveDefinition) && (leftRecursiveRuleName === indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName)) {
              return true;
            }
          }, context);

    const directlyLeftRecursiveDefinition = LeftRecursiveDefinitionOperation.execute(indirectlyLeftRecursiveDefinition, indirectlyRepeatedRule, indirectlyReducedRule, context);

    ImplicitlyReducedRuleOperation.execute(directlyLeftRecursiveDefinition, rule, context);

    const addedLeftRecursiveDefinition = directlyLeftRecursiveDefinition, ///
          removedLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions; ///

    removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);

    addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context);
  } else {
    const removedLeftRecursiveDefinitions = [
      indirectlyLeftRecursiveDefinition
    ];

    removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context);
  }
}
