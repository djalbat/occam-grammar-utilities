"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { REPEATED_NODE_INITIAL_INDEX } from "../constants";

class RepeatedNode extends NonTerminalNode {
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

    this.lift();
  }

  isInitial() {
    const index = this.getIndex(),
          initial = (index === REPEATED_NODE_INITIAL_INDEX);

    return initial;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RepeatedNode.prototype, simpliciationMixins);

export default RepeatedNode;
