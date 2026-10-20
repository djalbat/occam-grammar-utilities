"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class IntermediateNode extends NonTerminalNode {
  isMutable() {
    const mutable = true;

    return mutable;
  }

  isUnprecedented() {
    const unprecedented = false;

    return unprecedented;
  }

  getIntermediateRuleName() {
    const ruleName = this.getRuleName(),
          intermediateRuleName = ruleName;  ///

    return intermediateRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}
