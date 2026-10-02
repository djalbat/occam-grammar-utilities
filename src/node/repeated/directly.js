"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../../utilities/rewrite";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite(context) {
    const nonTerminalNode = this.clone(); ///

    rewriteDirectlyRepeatedNodes(nonTerminalNode, context);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}
