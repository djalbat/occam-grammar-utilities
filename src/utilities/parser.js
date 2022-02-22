"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

import eliminateLeftRecursion  from "../eliminateLeftRecursion";

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