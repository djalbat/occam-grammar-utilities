"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

const { first, tail } = arrayUtilities;

export default class RewrittenNode extends NonTerminalNode {
  rewrite() {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  lift() {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          removedChildNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = removedChildNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  simplify(replacementNode, state) {
    const singular = this.isSingular(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          reducedNode = firstChildNode; ///

    if (singular) {
      reducedNode.lift(state);
    } else {
      const tailChildNodes = tail(childNodes),
            repeatedNodes = tailChildNodes; ///

      let accumulatorNode;

      accumulatorNode = reducedNode.accumulate(replacementNode, state);

      repeatedNodes.forEach((repeatedNode, index) => {
        const initial = (index === 0);

        accumulatorNode = repeatedNode.lift(accumulatorNode, replacementNode, initial, state);
      });
    }

    this.lift(state);
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
