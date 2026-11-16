"use strict";

function lift() {
  const opacity = this.getOpacity(),
        parentNode = this.getParentNode(),
        precedence = this.getPrecedence(),
        childNodes = this.removeChildNodes(),
        replacedChildNode = this,  ///
        replacementChildNodes = childNodes; ///

  parentNode.setOpacity(opacity);

  parentNode.setPrecedence(precedence);

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
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

function forEachChildNode(callback) {
  const multiplicity = this.getMultiplicity();

  for (let index = 0; index < multiplicity; index++) {
    const childNodes = this.getChildNodes(),
          childNode = childNodes[index];

    callback(childNode, index);
  }
}

function simplifyChildNodes(state) {
  this.forEachChildNode((childNode) => {
    childNode.simplify(state);
  });
}

const simpliciationMixins = {
  lift,
  overwrite,
  forEachChildNode,
  simplifyChildNodes
};

export default simpliciationMixins;
