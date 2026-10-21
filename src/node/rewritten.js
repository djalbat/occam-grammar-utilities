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

  lift(state) {
    const parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = childNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode.setPrecedence(precedence);
  }

  restore(state) {
    this.simplify(state);

    const precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    return nonTerminalNode;
  }

  simplify(state) {
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

      accumulatorNode = reducedNode.accumulate(state);

      repeatedNodes.forEach((repeatedNode, index) => {
        const initial = (index === 0);

        accumulatorNode = repeatedNode.lift(accumulatorNode, initial, state);
      });
    }
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
