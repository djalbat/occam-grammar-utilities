"use strict";

import { NonTerminalNode } from "occam-parsers";
import { rewriteDirectlyRepeatedNodes } from "../../utilities/nodes";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode);

    return nonTerminalNode;
  }

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(DirectlyRepeatedNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(DirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
