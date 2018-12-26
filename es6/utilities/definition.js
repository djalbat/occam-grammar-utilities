'use strict';

const parsers = require('occam-parsers');

const { parts } = parsers,
      { RuleNamePart } = parts,
      { type } = RuleNamePart,
      ruleNamePartType = type;  ///

function isFirstPartRuleNamePart(rule) {
  let firstPartRuleNamePart;

  const firstPart = rule.getFirstPart(),
        firstPartTerminalPart = firstPart.isTerminalPart(),
        firstPartNonTerminalPart = !firstPartTerminalPart;

  if (firstPartNonTerminalPart) {
    const nonTerminalPart = firstPart,  ///
          nonTerminalPartType = nonTerminalPart.getType(),
          nonTerminalPartTypeRuleNamePartType = (nonTerminalPartType === ruleNamePartType),
          nonTerminalPartRuleNamePart = nonTerminalPartTypeRuleNamePartType;  ///

    firstPartRuleNamePart = nonTerminalPartRuleNamePart;  ///
  }

  return firstPartRuleNamePart;
}

module.exports = {
  isFirstPartRuleNamePart
};
