"use strict";

import { NonTerminalNode } from "occam-parsers";

import { indirectRuleNameFromIntermediateRuleName } from "../utilities/ruleName";

export default class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.swap();

    this.shuffle();

    this.overwrite(state);
  }

  swap() {
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

    const addedChildNode = replacedChildNode, ///
          addedChildNodes = [
            addedChildNode
          ];

    parentNode.addChildNodes(addedChildNodes);
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

    addedChildNodes = removedChildNodes;  ///

    parentNode = this;  ///

    parentNode.addChildNodes(addedChildNodes, startIndex);
  }

  overwrite(state) {
    let ruleName;

    ruleName = this.getRuleName();

    const intermediateRuleName = ruleName,  ///
          indirectRuleName = indirectRuleNameFromIntermediateRuleName(intermediateRuleName);

    ruleName = indirectRuleName;  ///

    const opacity = this.getOpacity(),
          precedence = this.getPrecedence(),
          parentNode = this.getParentNode(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode,
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}
