'use strict';

const parsers = require('occam-parsers');

const { NonTerminalNode } = parsers;

class NonLeftRecursiveNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(NonLeftRecursiveNode, ruleName, childNodes); }
}

module.exports = NonLeftRecursiveNode;
