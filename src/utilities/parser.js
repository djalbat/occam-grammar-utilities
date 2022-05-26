"use strict";

import { rulesUtilities } from "occam-parsers";

import { startRuleFromRulesAndStartRuleName } from "../utilities/rules";

import eliminateLeftRecursion  from "../eliminateLeftRecursion";

const { rulesFromBNF, ruleMapFromRules, startRuleFromRules } = rulesUtilities;

export function parserFromRules(Class, rules) {
  const ruleMap = ruleMapFromRules(rules);

  let startRule = startRuleFromRules(rules);

  startRule = eliminateLeftRecursion(startRule, ruleMap);

  const parser = new Class(startRule, ruleMap);

  return parser;
}

export function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules);

  let startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);

  startRule = eliminateLeftRecursion(startRule, ruleMap);

  const parser = new Class(startRule, ruleMap);

  return parser;
}

export default {
  rulesFromBNF,
  parserFromRules,
  parserFromRulesAndStartRuleName
};
