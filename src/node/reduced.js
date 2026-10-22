"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  lift(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeAndRestoreChildNodes(state),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.lift(state);
  }

  accumulate(state) {
    let accumulatorNode;

    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeAndRestoreChildNodes(state),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    accumulatorNode = nonTerminalNode; ///

    return accumulatorNode;
  }

  removeAndRestoreChildNodes(state) {
    let childNodes;

    childNodes = this.removeChildNodes();

    childNodes = childNodes.map((childNode) => {
      childNode = childNode.restore(state); ///

      return childNode;
    });

    return childNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}
