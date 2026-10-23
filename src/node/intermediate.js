"use strict";

import { NonTerminalNode } from "occam-parsers";

import { indirectRuleNameFromIntermediateRuleName } from "../utilities/ruleName";

export default class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(state) {
    let ruleName;

    ruleName = this.getRuleName();

    const intermediateRuleName = ruleName,  ///
          indirectRuleName = indirectRuleNameFromIntermediateRuleName(intermediateRuleName);

    ruleName = indirectRuleName;  ///

    const opacity = this.getOpacity(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}
