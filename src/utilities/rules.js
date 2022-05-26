"use strict";

import { BNFLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";
import { BNFParser, rulesUtilities } from "occam-parsers";

const { filter } = arrayUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRules } = rulesUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export function rulesFromBNF(bnf) {
  const tokens = bnfLexer.tokensFromBNF(bnf),
        rules = bnfParser.rulesFromTokens(tokens);

  return rules;
}

export function rulesFromStartRuleAndRuleMap(startRule, ruleMap) {
  const rules = Object.values(ruleMap),
        startRuleName = startRule.getName();

  filter(rules, (rule) => {
    const ruleName = rule.getName();

    if (ruleName !== startRuleName) {
      return true;
    }
  });

  rules.unshift(startRule);

  return rules;
}

export function startRuleFromRulesAndStartRuleName(rules, startRuleName) {
  let startRule = rules.find((rule) => {
    const ruleName = rule.getName();

    if (ruleName === startRuleName) {
      return true;
    }
  }) || null; ///

  if (startRule === null) {
    startRule = startRuleFromRules(rules);
  }

  return startRule;
}

export default {
  rulesFromBNF,
  rulesAsString,
  ruleMapFromRules,
  startRuleFromRules,
  rulesFromStartRuleAndRuleMap,
  startRuleFromRulesAndStartRuleName
};
