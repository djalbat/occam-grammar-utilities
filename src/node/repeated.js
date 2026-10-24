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

  simplify(initial, state) {
    this.simplifyChildNodes(state);

    let childNodes;

    if (initial) {
      childNodes = this.removeChildNodes();
    } else {
      const index = this.getIndex(),
            parentNode = this.getParentNode(),
            startIndex = 0,
            endIndex = index; ///

      childNodes = parentNode.spliceChildNodes(startIndex, endIndex);

      const precedence = parentNode.getPrecedence(),
            nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

      childNodes = this.removeChildNodes();

      childNodes = [  ///
        nonTerminalNode,
        ...childNodes
      ];
    }

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
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
