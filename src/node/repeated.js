"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { REPEATED_NODE_INITIAL_INDEX } from "../constants";

export default class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    const initial = this.isInitial();

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

  isInitial() {
    const index = this.getIndex(),
          initial = (index === REPEATED_NODE_INITIAL_INDEX);

    return initial;
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
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
