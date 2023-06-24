"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(IndirectlyRepeatedNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
