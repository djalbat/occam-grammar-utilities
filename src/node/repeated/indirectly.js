"use strict";

import { EpsilonNode, NonTerminalNode } from "occam-parsers";

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  isNullary() {
    let nullary = false;

    const singular = this.isSingular();

    if (singular) {
      nullary = this.everyChildNode((childNode) => {
        if (childNode instanceof EpsilonNode) {
          return true;
        }
      });
    }

    return nullary;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, opacity, precedence); }
}
