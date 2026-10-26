"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RepeatedNode extends NonTerminalNode {
  getIndex() {
    const childNode = this,  ///
          parentNode = this.getParentNode(),
          index = parentNode.indexOfChildNode(childNode);

    return index;
  }

  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(index, state) {
    const initial = (index === 1);

    if (!initial) {
      const index = this.getIndex(),
            parentNode = this.getParentNode(),
            startIndex = 0,
            endIndex = index, ///
            childNodes = parentNode.spliceChildNodes(startIndex, endIndex),
            precedence = parentNode.getPrecedence(),
            nonTerminalNode = state.createNonTerminalNode(childNodes, precedence),
            addedChildNode = nonTerminalNode, ///
            addedChildNodes = [
              addedChildNode
            ];

      parentNode.addChildNodes(addedChildNodes, startIndex);
    }

    this.simplifyChildNodes(state);

    const childNodes = this.removeChildNodes();

    this.overwrite(childNodes);
  }

  overwrite(childNodes) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode, index) => {
      childNode.simplify(index, state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
