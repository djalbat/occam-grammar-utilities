"use strict";

import { arrayUtilities } from "necessary";
import { EpsilonNode, NonTerminalNode } from "occam-parsers";

const { first } = arrayUtilities;

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(IndirectlyRepeatedNode, ruleName, childNodes, opacity); }
}
