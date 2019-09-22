'use strict';

const parsers = require('occam-parsers');

const { NonTerminalNode } = parsers;

class RepeatedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(RepeatedNode, ruleName, childNodes); }
}

module.exports = RepeatedNode;
