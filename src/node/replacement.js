"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";

export default class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let replacementNode;

    replacementNode = this.clone(); ///

    state = State.fromReplacementNode(replacementNode, state);  ///

    replacementNode.simplify(state);

    const precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes();

    let nonTerminalNode;

    nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    nonTerminalNode = nonTerminalNode.rewrite(state);

    return nonTerminalNode;
  }

  simplify(state) {
    this.someChildNode((childNode) => {
      const rewrittenNode = childNode;  ///

      rewrittenNode.simplify(state);

      rewrittenNode.lift(state);

      return true;
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}
