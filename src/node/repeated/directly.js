"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../../utilities/rewrite";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(DirectlyRepeatedNode, ruleName, childNodes, ambiguous); }
}
