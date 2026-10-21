"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RepeatedNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  getIndex() {
    const childNode = this,  ///
          parentNode = this.getParentNode(),
          index = parentNode.indexOfChildNode(childNode);

    return index;
  }

  lift(accumulatorNode, initial, state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence();

    let childNodes;

    if (initial) {
      childNodes = this.removeAndRestoreChildNodes(state);
    } else {
      const index = this.getIndex(),
            endIndex = index, ///
            startIndex = 0;

      childNodes = parentNode.spliceChildNodes(startIndex, endIndex);

      const nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

      childNodes = this.removeAndRestoreChildNodes(state);

      childNodes = [  ///
        nonTerminalNode,
        ...childNodes
      ];
    }

    const replacedChildNode = this,  ///
          replacementChildNodes = childNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);

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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
