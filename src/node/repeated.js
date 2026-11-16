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

    const childNodes = this.rotate();

    simplifyChildNodes(childNodes, state);

    this.overwrite(state);
  }

  rotate() {
    let parentNode;

    parentNode = this.getParentNode();

    const replacedChildNode = parentNode, ///
          replacementChildNode = this, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode = parentNode.getParentNode();

    this.remove();

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    let childNodes;

    childNodes = this.getChildNodes();

    childNodes = [
      ...childNodes
    ];

    const prependedChildNode = replacedChildNode;  ///

    this.prependChildNode(prependedChildNode)

    return childNodes;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const repeatedRuleName = ruleName; ///

    ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
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