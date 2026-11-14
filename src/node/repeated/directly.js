"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromDirectlyRepeatedRuleName } from "../../utilities/ruleName";

class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.rotate(state);

    this.simplifyChildNodes(state);
  }

  rotate(state) {
    const index = this.getIndex(),
          opacity = this.getOpacity(),
          precedence = this.getPrecedence(),
          baseRuleName = this.getBaseRuleName(),
          startIndex = 0,
          endIndex = index, ///
          ruleName = baseRuleName,  ///
          parentNode = this.getParentNode(),
          childNodes = parentNode.spliceChildNodes(startIndex, endIndex),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          prependedChildNode = nonTerminalNode, ///
          prependedChildNodes = [
            prependedChildNode
          ];

    parentNode.prependChildNodes(prependedChildNodes);

    this.lift();
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const directlyRepeatedRuleName = ruleName; ///

    ruleName = ruleNameFromDirectlyRepeatedRuleName(directlyRepeatedRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(DirectlyRepeatedNode.prototype, simpliciationMixins);

export default DirectlyRepeatedNode;

// isInitial() {
//   const index = this.getIndex(),
//     initial = (index === REPEATED_NODE_INITIAL_INDEX);
//
//   return initial;
// }
//
// simplify(state) {
//   const initial = this.isInitial();
//
//   if (!initial) {
//   }
//
//   this.simplifyChildNodes(state);
//
//   this.lift();
// }
