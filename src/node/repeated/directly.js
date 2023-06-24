"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DirectlyRepeatedNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(DirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
