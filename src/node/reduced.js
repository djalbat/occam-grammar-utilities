"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  isMutable() {
    const mutable = true;

    return mutable;
  }

  isUnprecedented() {
    const unprecedented = false;

    return unprecedented;
  }

  lift(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  restore(rewrittenNode, state) {
    const nonTerminalNode = this; ///

    rewrittenNode.replaceNonTerminalNode(nonTerminalNode, state);
  }

  accumulate(rewrittenNode, state) {
    let accumulatorNode;

    const nonTerminalNode = this; ///

    rewrittenNode = rewrittenNode.replaceNonTerminalNode(nonTerminalNode, state);

    accumulatorNode = rewrittenNode; ///

    return accumulatorNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}
