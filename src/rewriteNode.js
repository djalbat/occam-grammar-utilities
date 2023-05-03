"use strict";

import { NonTerminalNode } from "occam-parsers";

import ReducedNode from "./node/reduced";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

import { ruleNameFromIndirectlyRepeatedRuleName } from "./utilities/ruleName";
import { front, first, last, tail, push, backwardsForEach } from "./utilities/array";

export default function rewriteNode(node) {  ///
  replaceReducedNodesAndDirectlyRepeatedNodes(node);

  rearrangeIndirectlyRepeatedNodes(node);
}

function replaceReducedNodesAndDirectlyRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  const nonTerminalNode = node; ///

  let childNodes = nonTerminalNode.getChildNodes();

  const firstChildNode = first(childNodes);

  if (firstChildNode instanceof ReducedNode) {
    const parentNode = nonTerminalNode, ///
          reducedNode = firstChildNode, ///
          childNodesTail = tail(childNodes),
          directlyRepeatedNodes = childNodesTail, ///
          reducedNodeChildNodes = reducedNode.getChildNodes(),
          replacementChildNodes = [
            ...reducedNodeChildNodes
          ];

    backwardsForEach(directlyRepeatedNodes, (directlyRepeatedNode) => {
      const directlyRepeatedNodeChildNodes = directlyRepeatedNode.getChildNodes();

      push(replacementChildNodes, directlyRepeatedNodeChildNodes);
    });

    replaceAllChildNodes(parentNode, replacementChildNodes);
  }

  childNodes = nonTerminalNode.getChildNodes();

  let index = 0,
      childNode = childNodes[index] || null;

  while (childNode !== null) {
    if (childNode instanceof DirectlyRepeatedNode) {
      const parentNode = nonTerminalNode, ///
            replacedChildNode = childNode,  ///
            childNodeChildNodes = childNode.getChildNodes(),
            replacementChildNodes = childNodeChildNodes; ///

      replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
    }

    index++;

    childNode = childNodes[index] || null;
  }

  childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    replaceReducedNodesAndDirectlyRepeatedNodes(node);
  });
}

function rearrangeIndirectlyRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  let nonTerminalNode = node, ///
      childNodes = nonTerminalNode.getChildNodes();

  const lastChildNode = last(childNodes);

  if (lastChildNode instanceof IndirectlyRepeatedNode) {
    const parentNode = nonTerminalNode, ///
          frontChildNodes = front(childNodes),
          indirectlyRepeatedNode = lastChildNode, ///
          indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);  ///

    childNodes = frontChildNodes; ///

    nonTerminalNode = new NonTerminalNode(ruleName, childNodes);

    childNodes = indirectlyRepeatedNode.getChildNodes();

    const childNode = nonTerminalNode,  ///
          replacementChildNodes = [
            childNode,
            ...childNodes
          ];

    replaceAllChildNodes(parentNode, replacementChildNodes);
  }

  nonTerminalNode = node; ///

  childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    rearrangeIndirectlyRepeatedNodes(node);
  });
}

function replaceAllChildNodes(parentNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        start = 0,
        deleteCount = Infinity;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNode(parentNode, childNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(childNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}
