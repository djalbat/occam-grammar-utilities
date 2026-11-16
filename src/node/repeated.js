"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

let count = Infinity;

class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    if (count === 0) {
      return;
    }

    count--;

    let opacity,
        precedence,
        removedChildNodes;

    const parentNode = this.getParentNode(),
          baseRuleName = this.getBaseRuleName();

    opacity = parentNode.getOpacity();

    precedence = parentNode.getPrecedence();

    removedChildNodes = parentNode.removeAllButLastChildNode();

    const ruleName = baseRuleName,  ///
          childNodes = removedChildNodes, ///
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          prependedChildNode = nonTerminalNode, ///
          prependedChildNodes = [
            prependedChildNode
          ];

    parentNode.prependChildNodes(prependedChildNodes);

    opacity = this.getOpacity();

    precedence = this.getPrecedence();

    removedChildNodes = this.removeChildNodes();

    const replacedChildNode = this, ///
          replacementChildNodes = removedChildNodes;  ///

    parentNode.setOpacity(opacity);

    parentNode.setPrecedence(precedence);

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    simplifyChildNodes(replacementChildNodes, state);
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const repeatedRuleName = ruleName; ///

    ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  removeLastChildNode() {
    let lastChildNode;

    this.backwardsSomeChildNode((childNode) => {
      lastChildNode = childNode;  ///

      return true;
    });

    return lastChildNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RepeatedNode.prototype, simpliciationMixins);

export default RepeatedNode;

function simplifyChildNodes(childNodes, state) {
  childNodes.forEach((childNode) => {
    childNode.simplify(state);
  });
}