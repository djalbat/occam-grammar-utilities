"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { indirectRuleNameFromIntermediateRuleName } from "../utilities/ruleName";

class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.bubble();

    this.shuffle();

    this.overwrite(state);
  }

  bubble() {
    let parentNode,
        replacedChildNode,
        replacementChildNodes;

    parentNode = this.getParentNode();

    const removedChildNodes = this.removeChildNodes();

    replacedChildNode = this;  ///

    replacementChildNodes = removedChildNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    replacedChildNode = parentNode;  ///

    parentNode = parentNode.getParentNode();  ///

    const replacementChildNode = this;  ///

    replacementChildNodes = [
      replacementChildNode
    ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    parentNode = this;  ///

    const prependedChildNodes = [
            replacedChildNode
          ];

    parentNode.prependChildNodes(prependedChildNodes);
  }

  shuffle() {
    let parentNode,
        addedChildNodes,
        removedChildNodes,
        replacedChildNode,
        replacementChildNodes;

    parentNode = this.getParentNode();

    replacedChildNode = this; ///

    removedChildNodes = this.removeChildNodes();

    replacementChildNodes = removedChildNodes; ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    const startIndex = 0,
          deleteCount = 1,
          addedChildNode = this;  ///

    addedChildNodes = [
      addedChildNode
    ];

    removedChildNodes = parentNode.spliceChildNodes(startIndex, deleteCount, addedChildNodes);

    parentNode = this;  ///

    const prependedChildNodes = removedChildNodes;  ///

    parentNode.prependChildNodes(prependedChildNodes);
  }

  getBaseRuleName() {
    const ruleName = this.getRuleName(),
          intermediateRuleName = ruleName,  ///
          indirectRuleName = indirectRuleNameFromIntermediateRuleName(intermediateRuleName),
          baseRuleName = indirectRuleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IntermediateNode.prototype, simpliciationMixins);

export default IntermediateNode;
