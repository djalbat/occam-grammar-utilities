"use strict";

const { arrayUtilities } = require("necessary"),
      { rulesUtilities, parserUtilities } = require("occam-parsers");

const { eliminateLeftRecursion } = require("../../lib");

const { first } = arrayUtilities,
      { rulesFromBNF } = parserUtilities,
      { rulesAsString } = rulesUtilities;

function ruleFromBNF(bnf) {
  const rules = rulesFromBNF(bnf),
        firstRule = first(rules),
        rule = firstRule;

  return rule;
}

function definitionFromBNF(bnf) {
  const rule = ruleFromBNF(bnf),
        definitions = rule.getDefinitions(),
        firstDefinition = first(definitions),
        definition = firstDefinition; ///

  return definition;
}

function rewrittenBNFFromBNF(bnf) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        rewrittenBNF = rulesString;  ///

  return rewrittenBNF;
}

function rewrittenBNFFromRules(rules) {
  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        rewrittenBNF = rulesString;  ///

  return rewrittenBNF;
}

module.exports = {
  ruleFromBNF,
  definitionFromBNF,
  rewrittenBNFFromBNF,
  rewrittenBNFFromRules
};
