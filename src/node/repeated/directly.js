"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../../utilities/rewrite";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite(context) {
    const nonTerminalNode = this.clone(); ///

    rewriteDirectlyRepeatedNodes(nonTerminalNode, context);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DirectlyRepeatedNode, ruleName, childNodes, opacity, precedence); }
}
