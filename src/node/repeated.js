"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RepeatedNode extends NonTerminalNode {
  lift(accumulatorNode, rewrittenNode, initial, state) {
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

      const nonTerminalNode = rewrittenNode.createNonTerminalNode(childNodes, precedence, state);

      childNodes = this.removeChildNodes();

      childNodes = [  ///
        nonTerminalNode,
        ...childNodes
      ];
    }

    const replacedNode = this,  ///
          replacementNodes = childNodes;  ///

    parentNode.replaceChildNode(replacedNode, replacementNodes);

    parentNode.setPrecedence(precedence);

    return accumulatorNode;
  }

  getIndex() {
    const childNode = this,  ///
          parentNode = this.getParentNode(),
          index = parentNode.indexOfChildNode(childNode);

    return index;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
