"use strict";

const parsers = require("occam-parsers");

const { NonTerminalNode } = parsers;

class ReducedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(ReducedNode, ruleName, childNodes); }
}

module.exports = ReducedNode;
