'use strict';

const parsers = require('occam-parsers');

const { NonTerminalNode } = parsers;

class IntermediateNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(IntermediateNode, ruleName, childNodes); }
}

module.exports = IntermediateNode;
