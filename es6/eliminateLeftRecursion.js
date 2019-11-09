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
        removedLeftRecursiveDefinitions = [];

  removeLeftRecursiveDefinitions(rule, recursiveDefinitions, removedLeftRecursiveDefinitions, rules);

  rewriteRemovedLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, rules);

  checkRemovedLeftRecursiveDefinitions(removedLeftRecursiveDefinitions);
}

module.exports = eliminateLeftRecursion;

function removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, removedLeftRecursiveDefinitions) {
	const directlyLeftRecursive = leftRecursiveDefinition.isDirectlyLeftRecursive();

	let indirectlyLeftRecursive = false;

	if (!directlyLeftRecursive) {
    const implicitlyLeftRecursiveDefinition = findImplicitlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

    if (implicitlyLeftRecursiveDefinition !== null) {
      leftRecursiveDefinition.setImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition);

      indirectlyLeftRecursive = true;
    }
	}

	const remove = (directlyLeftRecursive || indirectlyLeftRecursive);

	if (remove) {
    const removedLeftRecursiveDefinition = leftRecursiveDefinition; ///

    removedLeftRecursiveDefinitions.push(removedLeftRecursiveDefinition);
  }

	return remove;
}

function removeLeftRecursiveDefinitions(rule, recursiveDefinitions, removedLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    let remove = false;

    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
	    const leftRecursive = recursiveDefinition.isLeftRecursive();

	    if (leftRecursive) {
		    const leftRecursiveDefinition = recursiveDefinition;  ///

        remove = removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, removedLeftRecursiveDefinitions);
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

            removeLeftRecursiveDefinitions(rule, recursiveDefinitions, removedLeftRecursiveDefinitions, rules);
          }
        }
      });
    }

    return remove;
  });
}

function rewriteRemovedLeftRecursiveDefinition(removedLeftRecursiveDefinition, rules) {
	const leftRecursiveDefinition = removedLeftRecursiveDefinition, ///
        ruleName = leftRecursiveDefinition.getRuleName(),
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
	}
}

function rewriteRemovedLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, rules) {
  forEachWithRemove(removedLeftRecursiveDefinitions, (removedLeftRecursiveDefinition) => {
    const rewritable = removedLeftRecursiveDefinition.isRewritable();

    if (rewritable) {
      rewriteRemovedLeftRecursiveDefinition(removedLeftRecursiveDefinition, rules);

	    return true;
    }
  });
}

function checkRemovedLeftRecursiveDefinitions(removedLeftRecursiveDefinitions) {
  const removedLeftRecursiveDefinitionsLength = removedLeftRecursiveDefinitions.length;

  if (removedLeftRecursiveDefinitionsLength > 0) {
    const ruleNames = removedLeftRecursiveDefinitions.map((removedLeftRecursiveDefinition) => removedLeftRecursiveDefinition.getRuleName()),
          ruleNamesString = ruleNames.reduce((ruleNamesString, ruleName) => {
            ruleNamesString = (ruleNamesString !== '') ?
                               `${ruleNamesString}, '${ruleName}'` :
                                `'${ruleName}'`;

            return ruleNamesString;
          }, '');

    throw new Error(`Left recursion cannot be eliminated from the following rule or rules: ${ruleNamesString}.`);
  }
}
