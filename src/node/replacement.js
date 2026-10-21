"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let replacementNode;

    replacementNode = this.clone(); ///

    replacementNode.simplify(replacementNode, state);

    let nonTerminalNode;

    nonTerminalNode = replacementNode.createNonTerminalNode(state);

    nonTerminalNode = nonTerminalNode.rewrite(state);

    return nonTerminalNode;
  }

  simplify(replacementNode, state) {
    this.someChildNode((childNode) => {
      const rewrittenNode = childNode;  ///

      rewrittenNode.simplify(replacementNode, state);

      return true;
    });
  }

  createNonTerminalNode(childNodes, precedence, state) {
    if (state === undefined) {
      state = childNodes; ///

      precedence = this.getPrecedence();

      childNodes = this.removeChildNodes();
    }

    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}
