"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RewrittenNode from "./node/rewritten";
import DirectlyReducedNode from "./node/reduced/directly";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyReducedNode from "./node/reduced/indirectly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

const { last, first, front, filter, unshift } = arrayUtilities;

export default function rewriteNodes(node) {  ///
  const nonTerminalNode = node; ///

  rewrite(nonTerminalNode);

  removeEpsilons(nonTerminalNode);
}

function rewrite(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      rewrite(nonTerminalNode);
    }
  });

  rewriteIndirectReduction(nonTerminalNode);

  rewriteDirectRecursionAndTrailingIndirectRepetition(nonTerminalNode);
}

function removeEpsilons(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes();

  filter(childNodes, (childNode) => {
    const childNodeEpsilonNode = (childNode instanceof EpsilonNode);

    if (!childNodeEpsilonNode) {
      return true;
    }
  });

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;

      removeEpsilons(nonTerminalNode);
    }
  });
}

function rewriteDirectRecursion(nonTerminalNode) {
  let childNodes;

  childNodes = nonTerminalNode.getChildNodes();

  const firstChildNode = first(childNodes),
        directlyRepeatedChildNodes = childNodes.filter((childNode) => (childNode instanceof DirectlyRepeatedNode)),
        firstDirectlyReducedChildNode = firstChildNode, ///
        directlyRepeatedChildNodesLength = directlyRepeatedChildNodes.length;

  nonTerminalNode = rewriteTrailingDirectRepetition(nonTerminalNode); ///

  nonTerminalNode = rewriteLeadingIndirectRepetition(nonTerminalNode);  ///

  childNodes = nonTerminalNode.getChildNodes();

  if (directlyRepeatedChildNodesLength > 1) {
    const directlyRepeatedChildNodesFront = front(directlyRepeatedChildNodes);

    unshift(childNodes, directlyRepeatedChildNodesFront);
  }

  childNodes.unshift(firstDirectlyReducedChildNode);

  rewrite(nonTerminalNode);
}

function rewriteDirectReduction(nonTerminalNode) {
  const ruleName = nonTerminalNode.getRuleName(),
        childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstDirectlyReducedChildNode = firstChildNode, ///
        reducedNode = firstDirectlyReducedChildNode,  ///
        rewrittenNode = RewrittenNode.fromReducedNode(reducedNode),
        childNodesLength = childNodes.length,
        rewrittenNodeRuleName = rewrittenNode.getRuleName(),
        start = 0,
        deleteCount = 1;

  if ((childNodesLength === 1) && (ruleName === rewrittenNodeRuleName)) {
    const rewrittenNodeChildNodes = rewrittenNode.getChildNodes();

    childNodes.splice(start, deleteCount, ...rewrittenNodeChildNodes);
  } else {
    childNodes.splice(start, deleteCount, rewrittenNode);
  }
}

function rewriteIndirectReduction(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstChildNodeIndirectlyReducedNode = (firstChildNode instanceof IndirectlyReducedNode);

  if (firstChildNodeIndirectlyReducedNode) {
    const firstIndirectlyReducedChildNode = firstChildNode, ///
          reducedNode = firstIndirectlyReducedChildNode,  ///
          rewrittenNode = RewrittenNode.fromReducedNode(reducedNode),
          start = 0,
          deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);
  }
}

function rewriteTrailingDirectRepetition(nonTerminalNode) {
  const ruleName = nonTerminalNode.getRuleName(),
        childNodes = nonTerminalNode.getChildNodes(),
        directlyRepeatedChildNodes = childNodes.filter((childNode) => (childNode instanceof DirectlyRepeatedNode)),
        directlyRepeatedChildNodesLength = directlyRepeatedChildNodes.length,
        lastDirectlyRepeatedChildNode = last(directlyRepeatedChildNodes),
        trailingDirectlyRepeatedNode = lastDirectlyRepeatedChildNode, ///
        repeatedNode = trailingDirectlyRepeatedNode,  ///
        rewrittenNode = RewrittenNode.fromRepeatedNode(repeatedNode),
        childNodesLength = childNodes.length,
        rewrittenNodeRuleName = rewrittenNode.getRuleName(),
        start = 0,
        deleteCount = 1 + directlyRepeatedChildNodesLength;

  if ((childNodesLength === 1) && (ruleName === rewrittenNodeRuleName)) {
    const rewrittenNodeChildNodes = rewrittenNode.getChildNodes();

    childNodes.splice(start, deleteCount, ...rewrittenNodeChildNodes);
  } else {
    childNodes.splice(start, deleteCount, rewrittenNode);

    nonTerminalNode = rewrittenNode;
  }

  childNodes.splice(start, deleteCount, rewrittenNode);

  return nonTerminalNode;
}

function rewriteLeadingIndirectRepetition(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstChildNodeIndirectlyRepeatedNode = (firstChildNode instanceof IndirectlyRepeatedNode);

  if (firstChildNodeIndirectlyRepeatedNode) {
    const leadingIndirectlyRepeatedNode = firstChildNode, ///
          repeatedNode = leadingIndirectlyRepeatedNode, ///
          rewrittenNode = RewrittenNode.fromRepeatedNode(repeatedNode),
          start = 0,
          deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);

    nonTerminalNode = rewrittenNode;  ///

    nonTerminalNode = rewriteLeadingIndirectRepetition(nonTerminalNode);
  }

  return nonTerminalNode;
}

function rewriteTrailingIndirectRepetition(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        lastChildNode = last(childNodes),
        lastChildNodeIndirectlyRepeatedNode = (lastChildNode instanceof IndirectlyRepeatedNode);

  if (lastChildNodeIndirectlyRepeatedNode) {
    const trailingIndirectlyRepeatedChildNode = lastChildNode,  ///
          childNodesLength = childNodes.length,
          start = childNodesLength - 1,
          deleteCount = 1,
          indirectlyRepeatedNodeChildNodes = trailingIndirectlyRepeatedChildNode.getChildNodes();

    childNodes.splice(start, deleteCount, ...indirectlyRepeatedNodeChildNodes);
  }
}

function rewriteDirectRecursionAndTrailingIndirectRepetition(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstChildNodeDirectlyReducedChildNode = (firstChildNode instanceof DirectlyReducedNode);

  if (firstChildNodeDirectlyReducedChildNode) {
    rewriteTrailingIndirectRepetition(nonTerminalNode);

    const childNodes = nonTerminalNode.getChildNodes(),
          directlyRepeatedChildNodes = childNodes.filter((childNode) => (childNode instanceof DirectlyRepeatedNode)),
          directlyRepeatedChildNodesLength = directlyRepeatedChildNodes.length;

    (directlyRepeatedChildNodesLength === 0) ?
      rewriteDirectReduction(nonTerminalNode) :
        rewriteDirectRecursion(nonTerminalNode);
  }
}
