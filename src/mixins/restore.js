"use strict";

function ascend() {
  const parentNode = this.getParentNode(),
        grandparentNode = parentNode.getParentNode(), ///
        replacedChildNode = parentNode, ///
        replacementChildNode = this,  ///
        replacementChildNodes = [
          replacementChildNode
        ];

  this.remove();

  grandparentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const removedChildNodes = this.removeChildNodes(),
        prependedChildNode = parentNode;  ///

  this.prependChildNode(prependedChildNode);

  const appendedChildNodes = removedChildNodes; ///

  parentNode.appendChildNodes(appendedChildNodes);

  const remainingChildNodes = appendedChildNodes; ///

  return remainingChildNodes;
}

function rotate() {
  const parentNode = this.getParentNode(),
        grandparentNode = parentNode.getParentNode(),
        replacedChildNode = parentNode, ///
        replacementChildNode = this, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  this.remove();

  grandparentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const childNodes = this.getChildNodes(),
        prependedChildNode = replacedChildNode,
        remainingChildNodes = [
          ...childNodes
        ]

  this.prependChildNode(prependedChildNode)

  return remainingChildNodes;
}

function flatten() {
  const parentNode = this.getParentNode(),
        removedChildNodes = this.removeChildNodes(),
        replacedChildNode = this,  ///
        replacementChildNodes = removedChildNodes; ///

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const remainingChildNodes = replacementChildNodes;  ///

  return remainingChildNodes;
}

function liftLast() {
  const index = this.getIndex(),
        parentNode = this.getParentNode(),
        childNodes = this.getChildNodes(),
        grandparentNode = parentNode.getParentNode(),
        startIndex = 0,
        deleteCount = index,  ///
        removedChildNodes = parentNode.spliceChildNodes(startIndex, deleteCount),
        prependedChildNodes = removedChildNodes; ///

  this.prependChildNodes(prependedChildNodes);

  const replacedChildNode = parentNode, ///
        replacementChildNode = this, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  this.remove();

  grandparentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const remainingChildNodes = [
    ...childNodes
  ]

  return remainingChildNodes;
}

function liftFirst() {
  const index = this.getIndex(),
        parentNode = this.getParentNode(),
        grandparentNode = parentNode.getParentNode(),
        startIndex = index + 1,
        removedChildNodes = parentNode.spliceChildNodes(startIndex),
        appendedChildNodes = removedChildNodes; ///

  this.appendChildNodes(appendedChildNodes);

  const replacedChildNode = parentNode, ///
        replacementChildNode = this, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  this.remove();

  grandparentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const childNodes = this.getChildNodes(),
        remainingChildNodes = [
          ...childNodes
        ]

  return remainingChildNodes;
}

function overwrite(state) {
  const opacity = this.getOpacity(),
        parentNode = this.getParentNode(),
        precedence = this.getPrecedence(),
        baseRuleName = this.getBaseRuleName(),
        removedChildNOdes = this.removeChildNodes(),
        ruleName = baseRuleName,  ///
        childNodes = removedChildNOdes, ///
        nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
        replacedChildNode = this, ///
        replacementChildNode = nonTerminalNode, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  return childNodes;
}

const restoreMixins = {
  ascend,
  rotate,
  flatten,
  liftLast,
  liftFirst,
  overwrite
};

export default restoreMixins;
