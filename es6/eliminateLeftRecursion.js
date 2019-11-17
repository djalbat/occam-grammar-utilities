'use strict';

const ruleUtilities = require('./utilities/rule'),
      arrayUtilities = require('./utilities/array'),
      RuleNameDefinition = require('./definition/ruleName'),
      RepeatedDefinition = require('./definition/repeated'),
      RewrittenDefinition = require('./definition/rewritten'),
      RecursiveDefinition = require('./definition/recursive'),
      PlaceHolderDefinition = require('./definition/placeHolder'),
      recursiveDefinitionUtilities = require('./utilities/recursiveDefinition');

const { first, forEachWithReplace } = arrayUtilities,
			{ findImplicitlyLeftRecursiveDefinition } = recursiveDefinitionUtilities,
			{ findRule, reducedRuleFromRule, repeatedRuleFromRule, rewrittenRuleFromRule } = ruleUtilities;

function eliminateLeftRecursion(rules) {
  const firstRule = first(rules),
        rule = firstRule, ///
        recursiveDefinitions = [],
        placeHolderDefinitions = [];

  removeLeftRecursiveDefinitions(rule, recursiveDefinitions, placeHolderDefinitions, rules);

  rewriteLeftRecursiveDefinitions(placeHolderDefinitions, rules);
}

module.exports = eliminateLeftRecursion;

function removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, placeHolderDefinitions) {
  let placeHolderDefinition = null;

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
      throw new Error(`The '${leftRecursiveDefinitionString}' directly or indirectly left recursive definition of the '${ruleName}' rule is unary and therefore cannot be rewritten.`);
    }

    if (complex) {
      throw new Error(`The '${leftRecursiveDefinitionString}' directly or indirectly left recursive definition of the '${ruleName}' rule is complex and therefore cannot be rewritten.`);
    }

    placeHolderDefinition = PlaceHolderDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

    placeHolderDefinitions.push(placeHolderDefinition);
  }

	return placeHolderDefinition;
}

function removeLeftRecursiveDefinitions(rule, recursiveDefinitions, placeHolderDefinitions, rules) {
  const ruleName = rule.getName(),
        definitions = rule.getDefinitions();

  forEachWithReplace(definitions, (definition) => {
    let placeHolderDefinition = null;

    const recursiveDefinition = RecursiveDefinition.fromDefinitionAndRuleName(definition, ruleName);

    if (recursiveDefinition !== null) {
	    const leftRecursive = recursiveDefinition.isLeftRecursive();

	    if (leftRecursive) {
		    const leftRecursiveDefinition = recursiveDefinition;  ///

        placeHolderDefinition = removeLeftRecursiveDefinition(leftRecursiveDefinition, recursiveDefinitions, placeHolderDefinitions);
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

            removeLeftRecursiveDefinitions(rule, recursiveDefinitions, placeHolderDefinitions, rules);
          }
        }
      });
    }

    return placeHolderDefinition;
  });
}

function rewriteLeftRecursiveDefinitions(placeHolderDefinitions, rules) {
  placeHolderDefinitions.forEach((placeHolderDefinition) => {
    const leftRecursiveDefinition = placeHolderDefinition.getLeftRecursiveDefinition(),
          directlyLeftRecursive = leftRecursiveDefinition.isDirectlyLeftRecursive();

    if (directlyLeftRecursive) {
      const directlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, placeHolderDefinition, rules);
    } else {
      const indirectlyLeftRecursiveDefinition = leftRecursiveDefinition;  ///

      rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, placeHolderDefinition, rules);
    }
  });
}

function rewriteDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition, placeHolderDefinition, rules) {
  const ruleName = directlyLeftRecursiveDefinition.getRuleName(),
        rule = findRule(ruleName, rules),
        rewrittenRule = rewrittenRuleFromRule(rule, rules),
        reducedRule = reducedRuleFromRule(rule, rules),
        repeatedRule = repeatedRuleFromRule(rule, rules),
        reducedRuleEmpty = reducedRule.isEmpty();

  if (reducedRuleEmpty) {
    throw new Error(`The '${ruleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
  }

  const leftRecursiveDefinition = directlyLeftRecursiveDefinition,  ///
        rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
        repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

  rewrittenRule.replaceDefinition(placeHolderDefinition, rewrittenDefinition);

  repeatedRule.addDefinition(repeatedDefinition);
}

function rewriteIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition, placeHolderDefinition, rules) {
  const ruleName = indirectlyLeftRecursiveDefinition.getRuleName(),
        rule = findRule(ruleName, rules),
        leftRecursiveDefinition = indirectlyLeftRecursiveDefinition,  ///
        rewrittenDefinition = RewrittenDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition);

  rule.replaceDefinition(placeHolderDefinition, rewrittenDefinition);

  const leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName(),
        repeatedDefinition = RepeatedDefinition.fromLeftRecursiveDefinition(leftRecursiveDefinition),
        repeatedRule = repeatedRuleFromLeftRecursiveRuleName(leftRecursiveRuleName, rules);

  repeatedRule.addDefinition(repeatedDefinition);

  const implicitlyLeftRecursiveDefinition = leftRecursiveDefinition.getImplicitlyLeftRecursiveDefinition(),
        definition = implicitlyLeftRecursiveDefinition.getDefinition(),
        implicitlyLeftRecursiveRuleName = leftRecursiveRuleName,  ///
        implicitlyLeftRecursiveRule = findRule(implicitlyLeftRecursiveRuleName, rules),
        reducedLeftRecursiveRule = reducedRuleFromRule(implicitlyLeftRecursiveRule, rules);

  implicitlyLeftRecursiveRule.addDefinition(definition, -1);

  reducedLeftRecursiveRule.removeDefinition(definition);

  const reducedLeftRecursiveRuleName = reducedLeftRecursiveRule.getName(),
        reducedLeftRecursiveRuleNameDefinition = RuleNameDefinition.fromRuleName(reducedLeftRecursiveRuleName);

  implicitlyLeftRecursiveRule.addDefinition(reducedLeftRecursiveRuleNameDefinition);

  const reducedLeftRecursiveRuleEmpty = reducedLeftRecursiveRule.isEmpty();

  // if (reducedLeftRecursiveRuleEmpty) {
  //   const implicitlyLeftRecursiveRuleName = implicitlyLeftRecursiveRule.getName();
  //
  //   throw new Error(`The '${implicitlyLeftRecursiveRuleName}' rule has no non-recursive definitions and therefore cannot be rewritten.`);
  // }
}
