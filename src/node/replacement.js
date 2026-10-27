"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";

export default class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    const savedState = state, ///
          replacementNode = this.clone(); ///

    state = State.fromReplacementNode(replacementNode, state);  ///

    replacementNode.simplify(state);

    const precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes();

    nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    state = savedState; ///

    nonTerminalNode = nonTerminalNode.rewrite(state); ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);
  }

  simplifyChildNodes(state) {
    const topmost = true;

    this.forEachChildNode((childNode) => {
      childNode.simplify(state, topmost);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}
