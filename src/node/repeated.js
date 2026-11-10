"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { REPEATED_NODE_INITIAL_INDEX } from "../constants";
import { ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    const initial = this.isInitial();

    if (!initial) {
      const index = this.getIndex(),
            opacity = this.getOpacity(),
            parentNode = this.getParentNode(),
            baseRuleName = this.getBaseRuleName(),
            startIndex = 0,
            endIndex = index, ///
            ruleName = baseRuleName,  ///
            childNodes = parentNode.spliceChildNodes(startIndex, endIndex),
            precedence = parentNode.getPrecedence(),
            nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
            prependedChildNode = nonTerminalNode, ///
            prependedChildNodes = [
              prependedChildNode
            ];

      parentNode.prependChildNodes(prependedChildNodes);
    }

    this.simplifyChildNodes(state);

    this.lift();
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const repeatedRuleName = ruleName; ///

    ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  isInitial() {
    const index = this.getIndex(),
          initial = (index === REPEATED_NODE_INITIAL_INDEX);

    return initial;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RepeatedNode.prototype, simpliciationMixins);

export default RepeatedNode;
