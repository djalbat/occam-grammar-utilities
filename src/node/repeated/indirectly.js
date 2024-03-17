"use strict";

import { arrayUtilities } from "necessary";
import { EpsilonNode, NonTerminalNode } from "occam-parsers";

const { first } = arrayUtilities;

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  isNullary() {
    let nullary = false;

    const childNodes = this.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            firstChildNodeEpsilonNode = (firstChildNode instanceof EpsilonNode);

      if (firstChildNodeEpsilonNode) {
        nullary = true;
      }
    }

    return nullary;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(IndirectlyRepeatedNode, ruleName, childNodes, opacity); }
}
