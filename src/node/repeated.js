"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class RepeatedNode extends NonTerminalNode {
  lift(accumulatorNode, rewrittenNode, state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedNode = this,  ///
          replacementNodes = childNodes;

    parentNode.replaceChildNode(replacedNode, replacementNodes);

    parentNode.setPrecedence(precedence);

    return accumulatorNode;
  }

  isCut() {
    const cutIndex = this.findCutIndex(),
          cut = (cutIndex > -1);

    return cut;
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
