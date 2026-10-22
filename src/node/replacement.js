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

    nonTerminalNode = replacementNode.createNonTerminalNode(state);

    state = savedState; ///

    nonTerminalNode = nonTerminalNode.rewrite(state); ///

    return nonTerminalNode;
  }

  simplify(state) {
    const rewrittenNode = this.findRewrittenNode();

    rewrittenNode.simplify(state);

    rewrittenNode.lift(state);
  }

  findRewrittenNode() {
    let rewrittenNode;

    this.someChildNode((childNode) => {
      rewrittenNode = childNode;  ///

      return true;
    });

    return rewrittenNode;
  }

  createNonTerminalNode(state) {
    const precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}
