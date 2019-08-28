'use strict';

const parsers = require('occam-parsers');

const { NonTerminalNode } = parsers;

class RightRecursiveNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RightRecursiveNode, ruleName, childNodes); }
}

module.exports = RightRecursiveNode;
