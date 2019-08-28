'use strict';

const parsers = require('occam-parsers');

const { NonTerminalNode } = parsers;

class NonRecursiveNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NonRecursiveNode, ruleName, childNodes); }
}

module.exports = NonRecursiveNode;
