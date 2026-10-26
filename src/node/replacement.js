"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";

export default class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    const index = 0,
          savedState = state, ///
          replacementNode = this.clone(); ///

    state = State.fromReplacementNode(replacementNode, state);  ///

    replacementNode.simplify(index, state);

    const precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes();

    nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    state = savedState; ///

    nonTerminalNode = nonTerminalNode.rewrite(state); ///

    return nonTerminalNode;
  }

  simplify(index, state) {
    this.simplifyChildNodes(state);
  }

  findRewrittenNode() {
    let rewrittenNode;

    this.someChildNode((childNode) => {
      rewrittenNode = childNode;  ///

      return true;
    });

    return rewrittenNode;
  }

  simplifyChildNodes(state) {
    const topmost = true;

    this.forEachChildNode((childNode, index) => {
      childNode.simplify(index, state, topmost);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}
