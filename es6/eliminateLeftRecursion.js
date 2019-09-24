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
        immediatelyLeftRecursiveDefinitions = [];

  removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);

  rewriteImmediatelyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules);

  const ruleNames = immediatelyLeftRecursiveDefinitions.map((immediatelyLeftRecursiveDefinition) => immediatelyLeftRecursiveDefinition.getRuleName()),
        ruleNamesLength = ruleNames.length;

  if (ruleNamesLength > 0) {
    const ruleNamesString = ruleNames.reduce((ruleNamesString, ruleName) => {
      ruleNamesString = (ruleNamesString !== '') ?
                         `${ruleNamesString}, '${ruleName}'` :
                          `'${ruleName}'`;

      return ruleNamesString;
    }, '');

    throw new Error(`Left recursion cannot be eliminated from the folliowing rule or rules: ${ruleNamesString}.`);
  }
}

module.exports = eliminateLeftRecursion;

function removeImmediatelyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions) {
	const directlyLeftRecursive = leftRecursiveDefinition.isDirectlyLeftRecursive();

	if (directlyLeftRecursive) {
		const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

		immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

		return true;
	}

	const implicitlyLeftRecursiveDefinition = findImplicitlyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions);

	if (implicitlyLeftRecursiveDefinition !== null) {
		const implicitlyLeftRecursiveDefinitionDefinition = implicitlyLeftRecursiveDefinition.getDefinition(),
					implicitDefinition = implicitlyLeftRecursiveDefinitionDefinition; ///

		leftRecursiveDefinition.setImplicitDefinition(implicitDefinition);

		const immediatelyLeftRecursiveDefinition = leftRecursiveDefinition; ///

		immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);

		return true;
	}
}

function removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithRemove(definitions, (definition) => {
    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
	    const leftRecursive = recursiveDefinition.isLeftRecursive();

	    if (leftRecursive) {
		    const leftRecursiveDefinition = recursiveDefinition,  ///
              remove = removeImmediatelyLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, immediatelyLeftRecursiveDefinitions);

	      if (remove) {
	        return true;
	      }
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

            removeImmediatelyLeftRecursiveDefinitions(rule, recursiveDefinitions, immediatelyLeftRecursiveDefinitions, rules);
          }
        }
      });
    }
  });
}

function rewriteImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules) {
	const ruleName = immediatelyLeftRecursiveDefinition.getRuleName(),
				rule = findRule(ruleName, rules),
				reducedRule = reducedRuleFromRule(rule, rules),
				rewrittenDefinition = RewrittenDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition);

	(reducedRule === null) ?
		rule.addDefinition(rewrittenDefinition) :
			rule.addDefinition(rewrittenDefinition, -1);

	const leftRecursiveRuleName = immediatelyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
				repeatedDefinition = RepeatedDefinition.fromImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition),
				repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

	repeatedRule.addDefinition(repeatedDefinition);

	const implicitDefinition = immediatelyLeftRecursiveDefinition.getImplicitDefinition();

	if (implicitDefinition !== null) {
		const leftRecursiveRule = findRule(leftRecursiveRuleName, rules),
					reducedLeftRecursiveRule = reducedRuleFromRule(leftRecursiveRule, rules);

		reducedLeftRecursiveRule.removeDefinition(implicitDefinition);

		leftRecursiveRule.addDefinition(implicitDefinition, -1);
	}
}

function rewriteImmediatelyLeftRecursiveDefinitions(immediatelyLeftRecursiveDefinitions, rules) {
  forEachWithRemove(immediatelyLeftRecursiveDefinitions, (immediatelyLeftRecursiveDefinition) => {
    const rewritable = immediatelyLeftRecursiveDefinition.isRewritable();

    if (rewritable) {
	    rewriteImmediatelyLeftRecursiveDefinition(immediatelyLeftRecursiveDefinition, rules);

	    return true;
    }
  });
}

