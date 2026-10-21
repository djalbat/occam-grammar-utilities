"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  lift(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  accumulate(replacementNode, state) {
    let accumulatorNode;

    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = replacementNode.createNonTerminalNode(childNodes, precedence, state),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    accumulatorNode = nonTerminalNode; ///

    return accumulatorNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}
