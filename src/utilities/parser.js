"use strict";

import { rulesUtilities } from "occam-parsers";

import eliminateLeftRecursion  from "../eliminateLeftRecursion";

import { startRuleFromRulesAndStartRuleName } from "../utilities/rules";

const { ruleMapFromRules, startRuleFromRules } = rulesUtilities;

export function parserFromRules(Class, rules) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules);

  eliminateLeftRecursion(startRule, ruleMap);

  const parser = new Class(startRule, ruleMap);

  return parser;
}

export function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);

  eliminateLeftRecursion(startRule, ruleMap);

  const parser = new Class(startRule, ruleMap);

  return parser;
}

export default {
  parserFromRules,
  parserFromRulesAndStartRuleName
};
