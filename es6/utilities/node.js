'use strict';

const IntermediateNode = require('../node/intermediate');

function removeIntermediateNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeIntermediateChildNodes(childNodes);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

module.exports = {
  removeIntermediateNodes
};

function removeIntermediateChildNodes(childNodes) {
  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeIntermediateNode = (childNode instanceof IntermediateNode);

    if (childNodeIntermediateNode) {
      let childNodeChildNodes = childNode.getChildNodes();

      childNodeChildNodes = removeIntermediateChildNodes(childNodeChildNodes);

      childNodes = childNodes.concat(childNodeChildNodes);
    } else {
      removeIntermediateNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;
}
