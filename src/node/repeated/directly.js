"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromDirectlyRepeatedRuleName } from "../../utilities/ruleName";
import node from "occam-parsers/lib/mixins/node";

let count = Infinity;

class DirectlyRepeatedNode extends NonTerminalNode {
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

    const directlyRepeatedRuleName = ruleName; ///

    ruleName = ruleNameFromDirectlyRepeatedRuleName(directlyRepeatedRuleName);  ///

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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(DirectlyRepeatedNode.prototype, simpliciationMixins);

export default DirectlyRepeatedNode;

function simplifyChildNodes(childNodes, state) {
  childNodes.forEach((childNode) => {
    childNode.simplify(state);
  });
}