"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  isNullary() {
    let nullary = false;

    const singular = this.isSingular();

    if (singular) {
      nullary = this.everyChildNode((childNode) => {
        const childNodeTerminalNode = childNode.isTerminalNode();

        if (childNodeTerminalNode) {
          const terminalNode = childNode, ///
                terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          if (terminalNodeEpsilonNode) {
            return true;
          }
        }
      });
    }

    return nullary;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}
