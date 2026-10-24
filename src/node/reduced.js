"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(singular, state) {
    this.simplifyChildNodes(state);

    if (singular) {
      this.lift();

      return;
    }

    this.overwrite(state);
  }

  lift() {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  overwrite(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    return replacementChildNode;
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}
