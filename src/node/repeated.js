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

  lift(accumulatorNode, replacementNode, initial, state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence();

    let childNodes;

    if (initial) {
      childNodes = this.removeChildNodes();
    } else {
      const index = this.getIndex(),
            endIndex = index, ///
            startIndex = 0;

      childNodes = parentNode.spliceChildNodes(startIndex, endIndex);

      const nonTerminalNode = replacementNode.createNonTerminalNode(childNodes, precedence, state);

      childNodes = this.removeChildNodes();

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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
