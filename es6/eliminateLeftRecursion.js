'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      RepeatedDefinition = require('./definition/repeated'),
      RewrittenDefinition = require('./definition/rewritten'),
      RecursiveDefinition = require('./definition/recursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition');

const { first, forEachWithRemove } = arrayUtilities,
			{ findImplicitlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
			{ findRule, reducedRuleFromRule, repeatedRuleFromLeftRecursiveRuleName } = ruleUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        leftRecursiveDefinitions = [];

  removeLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules);

  rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, rules);
}

module.exports = eliminateLeftRecursion;

function removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, leftRecursiveDefinitions) {
  let remove = false;

	const directlyLeftRecursive = leftRecursiveDefinition.isDirectlyLeftRecursive();

  let indirectlyLeftRecursive = false;

	if (!directlyLeftRecursive) {
    const implicitlyLeftRecursiveDefinition = findImplicitlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

    indirectlyLeftRecursive = (implicitlyLeftRecursiveDefinition !== null);

    if (indirectlyLeftRecursive) {
      leftRecursiveDefinition.setImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition);
    }
  }

  if (directlyLeftRecursive || indirectlyLeftRecursive) {
    const nonRewritable = leftRecursiveDefinition.isNonRewritable();

    if (nonRewritable) {
      const ruleName = leftRecursiveDefinition.getRuleName(),
            leftRecursiveDefinitionString = leftRecursiveDefinition.asString();

      throw new Error(`The '${leftRecursiveDefinitionString}' directly left recursive definition of the '${ruleName}' rule cannot be rewritten.`);
    }

    leftRecursiveDefinitions.push(leftRecursiveDefinition);

    remove = true;
  }

	return remove;
}

function removeLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    let remove = false;

    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
	    const leftRecursive = recursiveDefinition.isLeftRecursive();

	    if (leftRecursive) {
		    const leftRecursiveDefinition = recursiveDefinition;  ///

        remove = removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, leftRecursiveDefinitions);
	    }

      const recursiveRuleNames = recursiveDefinition.getRecursiveRuleNames(),
            allRecursiveDefinitions = [ ...recursiveDefinitions, recursiveDefinition ],
            allRecursiveDefinitionRuleNames = allRecursiveDefinitions.map((recursiveDefinition) => recursiveDefinition.getRuleName());

      recursiveRuleNames.forEach((recursiveRuleName) => {
        const recursiveDefinitionRuleNamesIncludesRecursiveRuleName = allRecursiveDefinitionRuleNames.includes(recursiveRuleName);

        if (!recursiveDefinitionRuleNamesIncludesRecursiveRuleName) {
          const ruleName = recursiveRuleName,  ///
                rule = findRule(ruleName, rules);

          if (rule !== null) {
            const recursiveDefinitions = allRecursiveDefinitions;  ///

            removeLeftRecursiveDefinitions(rule, recursiveDefinitions, leftRecursiveDefinitions, rules);
          }
        }
      });
    }

    return remove;
  });
}

function rewriteLeftRecursiveDefinitions(leftRecursiveDefinitions, rules) {
  leftRecursiveDefinitions.forEach((leftRecursiveDefinition) => {
    const ruleName = leftRecursiveDefinition.getRuleName(),
          rule = findRule(ruleName, rules),
          reducedRule = reducedRuleFromRule(rule, rules),
          rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

    (reducedRule === null) ?
      rule.addDefinition(rewrittenDefinition) :
        rule.addDefinition(rewrittenDefinition, -1);

    const leftRecursiveRuleName = leftRecursiveDefinition.getLeftRecursiveRuleName(),
          repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
          repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

    repeatedRule.addDefinition(repeatedDefinition);

    const implicitlyLeftRecursiveDefinition = leftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

    if (implicitlyLeftRecursiveDefinition !== null) {
      const definition = implicitlyLeftRecursiveDefinition.getDefinition(),
            leftRecursiveRule = findRule(leftRecursiveRuleName, rules),
            reducedLeftRecursiveRule = reducedRuleFromRule(leftRecursiveRule, rules);

      leftRecursiveRule.addDefinition(definition, -1);

      reducedLeftRecursiveRule.removeDefinition(definition);

      const reducedLeftRecursiveRuleDefinitions = reducedLeftRecursiveRule.getDefinitions(),
            reducedLeftRecursiveRuleDefinitionsLength = reducedLeftRecursiveRuleDefinitions.length;

      if (reducedLeftRecursiveRuleDefinitionsLength === 0) {
        const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName();

        throw new Error(`The reduced '${reducedLeftRecursiveRuleName}' rule has no definitions.`);
      }
    }
  });
}
