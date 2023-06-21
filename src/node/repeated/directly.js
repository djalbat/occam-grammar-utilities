"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(DirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
