'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      RuleNameDefinition = require('./definition/ruleName'),
      RepeatedDefinition = require('./definition/repeated'),
      RewrittenDefinition = require('./definition/rewritten'),
      RecursiveDefinition = require('./definition/recursive'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition');

const { first, forEachWithRemove } = arrayUtilities,
			{ findImplicitlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
			{ findRule, removeRule, reducedRuleFromRule, repeatedRuleFromLeftRecursiveRuleName } = ruleUtilities;

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
    const unary = leftRecursiveDefinition.isUnary(),
          complex = leftRecursiveDefinition.isComplex(),
          ruleName = leftRecursiveDefinition.getRuleName(),
          leftRecursiveDefinitionString = leftRecursiveDefinition.asString();

    if (unary) {
      throw new Error(`The '${leftRecursiveDefinitionString}' directly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    if (complex) {
      throw new Error(`The '${leftRecursiveDefinitionString}' directly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
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
    const directlyLeftRecursive = leftRecursiveDefinition.isDirectlyLeftRecursive();

    if (directlyLeftRecursive) {
      const directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, rules);
    } else {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, rules);
    }
  });
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, rules) {
  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        rule = findRule(ruleName, rules),
        reducedRule = reducedRuleFromRule(rule, rules),
        reducedRuleEmpty = reducedRule.isEmpty();

  if (reducedRuleEmpty) {
    throw new Error(`The '${ruleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
  }

  const reducedRuleName = reducedRule.getName(),
        reducedRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedRuleName),
        definitions = [
          reducedRuleNameDefinition
        ];

  rule.setDefinitions(definitions);

  const leftRecursiveDefinition = directlyLeftRecursiveDefinition,  ///
        rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

  rule.addDefinition(rewrittenDefinition, -1);

  const leftRecursiveRuleName = directlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
        repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

  repeatedRule.addDefinition(repeatedDefinition);
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, rules) {
  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = findRule(ruleName, rules),
        reducedRule = reducedRuleFromRule(rule, rules),
        reducedRuleEmpty = reducedRule.isEmpty(),
        leftRecursiveDefinition = indirectlyLeftRecursiveDefinition,  ///
        rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

  if (reducedRuleEmpty) {
    removeRule(reducedRule, rules);

    rule.addDefinition(rewrittenDefinition);
  } else {
    rule.addDefinition(rewrittenDefinition, -1);
  }

  return;

  const implicitlyLeftRecursiveDefinition = leftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition();

  const definition = implicitlyLeftRecursiveDefinition.getDefinition(),
        leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,  ///
        implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
        reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);

  implicitlyLeftRecursiveRule.addDefinition(definition, -1);

  reducedLeftRecursiveRule.removeDefinition(definition);

  const reducedLeftRecursiveRuleDefinitions = reducedLeftRecursiveRule.getDefinitions(),
        reducedLeftRecursiveRuleDefinitionsLength = reducedLeftRecursiveRuleDefinitions.length;

  if (reducedLeftRecursiveRuleDefinitionsLength === 0) {
    const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName();

    throw new Error(`The reduced '${reducedLeftRecursiveRuleName}' rule has no definitions.`);
  }
}
