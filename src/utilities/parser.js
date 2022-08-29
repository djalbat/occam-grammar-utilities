"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, rulesUtilities } from "occam-parsers";

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
  const startRule = startRuleFromRules(rules),
        ruleMap = ruleMapFromRules(rules),
        parser = new Class(startRule, ruleMap);

  return parser;
}

export function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
  const startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        ruleMap = ruleMapFromRules(rules),
        parser = new Class(startRule, ruleMap);

  return parser;
}

export default {
  rulesFromBNF,
  parserFromRules,
  parserFromRulesAndStartRuleName
};
