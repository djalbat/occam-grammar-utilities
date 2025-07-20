"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../../utilities/rewrite";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(DirectlyRepeatedNode, ruleName, childNodes, opacity); }
}
