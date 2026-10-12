"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this.clone(); ///

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
