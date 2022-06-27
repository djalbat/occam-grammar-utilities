"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, rulesUtilities } from "occam-parsers";

import eliminateLeftRecursion  from "../eliminateLeftRecursion";

import { startRuleFromRulesAndStartRuleName } from "../utilities/rules";

const { ruleMapFromRules, startRuleFromRules } = rulesUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function rulesFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens);

  return rules;
}

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
