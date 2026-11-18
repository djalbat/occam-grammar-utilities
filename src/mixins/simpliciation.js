"use strict";

function lift() {
  const index = this.getIndex(),
        opacity = this.getOpacity(),
        parentNode = this.getParentNode(),
        precedence = this.getPrecedence(),
        removedChildNodes = this.removeChildNodes(),
        replacedChildNode = this,  ///
        replacementChildNodes = removedChildNodes; ///

  parentNode.setOpacity(opacity);

  parentNode.setPrecedence(precedence);

  const startIndex = index + 1,
        childNodes = parentNode.getChildNodes(),
        remainingChildNodes = childNodes.slice(startIndex);

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  return remainingChildNodes;
}

function climb() {
  let removedChildNodes;

  removedChildNodes = this.removeChildNodes();

  const parentNode = this.getParentNode(),
        replacedChildNode = this,  ///
        replacementChildNodes = removedChildNodes; ///

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  removedChildNodes = parentNode.removeChildNodes();

  const appendedChildNode = this; ///

  parentNode.appendChildNode(appendedChildNode);

  const appendedChildNodes = removedChildNodes; ///

  this.appendChildNodes(appendedChildNodes);

  const remainingChildNodes = appendedChildNodes; ///

  return remainingChildNodes;
}

function ascend() {
  const removedChildNodes = this.removeChildNodes();

  let parentNode;

  parentNode = this.getParentNode();

  const replacedChildNode = parentNode; ///

  parentNode = parentNode.getParentNode();

  this.remove();

  const replacementChildNode = this,  ///
        replacementChildNodes = [
          replacementChildNode
        ];

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  const appendedChildNode = replacedChildNode;  ///

  this.appendChildNode(appendedChildNode);

  parentNode = appendedChildNode; ///

  const appendedChildNodes = removedChildNodes; ///

  parentNode.appendChildNodes(appendedChildNodes);

  const remainingChildNodes = appendedChildNodes;

  return remainingChildNodes;
}

function rotate() {
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

  const childNodes = this.getChildNodes(),
        remainingChildNodes = [
          ...childNodes
        ];

  const prependedChildNode = replacedChildNode;  ///

  this.prependChildNode(prependedChildNode)

  return remainingChildNodes;
}

function overwrite(state) {
  const opacity = this.getOpacity(),
        parentNode = this.getParentNode(),
        precedence = this.getPrecedence(),
        childNodes = this.removeChildNodes(),
        baseRuleName = this.getBaseRuleName(),
        ruleName = baseRuleName,  ///
        nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
        replacedChildNode = this, ///
        replacementChildNode = nonTerminalNode, ///
        replacementChildNodes = [
          replacementChildNode
        ];

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

  return nonTerminalNode;
}

function simplifyChildNodes(state) {
  this.everyChildNode((childNode) => {
    const terminate = childNode.simplify(state);

    if (!terminate) {
      return true;
    }
  });
}

const simpliciationMixins = {
  lift,
  climb,
  ascend,
  rotate,
  overwrite,
  simplifyChildNodes
};

export default simpliciationMixins;
