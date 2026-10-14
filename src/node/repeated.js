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

  isCut() {
    const cutIndex = this.findCutIndex(),
          cut = (cutIndex > -1);

    return cut;
  }

  getIndex() {
    const childNode = this,  ///
          parentNode = this.getParentNode(),
          index = parentNode.indexOfChildNode(childNode);

    return index;
  }

  findCutIndex() {
    let cutIndex = -1;

    this.findChildNode((childNode, index) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeCutNode = terminalNode.isCutNode();

        if (terminalNodeCutNode) {
          cutIndex = index; ///

          return true;
        }
      }
    });

    return cutIndex;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}
