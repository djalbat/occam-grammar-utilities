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

  static fromRuleNameAndChildNodes(ruleName, childNodes) { return NonTerminalNode.fromRuleNameAndChildNodes(IndirectlyRepeatedNode, ruleName, childNodes); }

  static fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) { return NonTerminalNode.fromRuleNameChildNodesAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, precedence); }
}
