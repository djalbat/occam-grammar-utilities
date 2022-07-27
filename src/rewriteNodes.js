"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RewrittenNode from "./node/rewritten";
import DirectlyReducedNode from "./node/reduced/directly";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyReducedNode from "./node/reduced/indirectly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

const { last, first, filter, unshift } = arrayUtilities;

export default function rewriteNodes(node) {  ///
  const nonTerminalNode = node; ///

  rewrite(nonTerminalNode);

  removeEpsilons(nonTerminalNode);

  removeIntermediaries(nonTerminalNode);
}

function rewrite(nonTerminalNode) {
  rewriteIndirectRepetition(nonTerminalNode);

  rewriteDirectRepetition(nonTerminalNode);

  rewriteDirectReduction(nonTerminalNode);

  rewriteIndirectReduction(nonTerminalNode);

  const childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      rewrite(nonTerminalNode);
    }
  });
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
      const nonTerminalNode = childNode;  ///

      removeEpsilons(nonTerminalNode);
    }
  });
}

function removeIntermediaries(nonTerminalNode) {
  const nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes();

  let childNodes = nonTerminalNodeChildNodes, ///
      childNodesLength = childNodes.length;

  while (childNodesLength === 1) {
    const firstChildNode = first(childNodes),
          firstChildNodeNonTerminalNode = firstChildNode.isNonTerminalNode();

    if (!firstChildNodeNonTerminalNode) {
      break;
    }

    const nonTerminalNode = firstChildNode, ///
          ruleName = nonTerminalNode.getRuleName();

    childNodes = nonTerminalNode.getChildNodes();

    if (ruleName === nonTerminalNodeRuleName) {
      const start = 0,
            deleteCount = 1;

      nonTerminalNodeChildNodes.splice(start, deleteCount, ...childNodes);

      break;
    }

    childNodesLength = childNodes.length;
  }

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      removeIntermediaries(nonTerminalNode);
    }
  });
}

function rewriteDirectReduction(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        firstChildNode = first(childNodes),
        firstChildNodeReducedNode = (firstChildNode instanceof DirectlyReducedNode);

  if (firstChildNodeReducedNode) {
    const firstDirectlyReducedChildNode = firstChildNode, ///
          reducedNode = firstDirectlyReducedChildNode,  ///
          rewrittenNode = RewrittenNode.fromReducedNode(reducedNode),
          start = 0,
          deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);
  }
}

function rewriteDirectRepetition(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes();

  const directlyRepeatedChildNodes = childNodes.filter((childNode) => (childNode instanceof DirectlyRepeatedNode)),
        directlyRepeatedChildNodesLength = directlyRepeatedChildNodes.length;

  if (directlyRepeatedChildNodesLength > 0) {
    const lastDirectlyRepeatedChildNode = last(directlyRepeatedChildNodes),
          index = childNodes.indexOf(lastDirectlyRepeatedChildNode),
          start = 0,
          deleteCount = index + 1,
          repeatedNode = lastDirectlyRepeatedChildNode,  ///
          rewrittenNode = RewrittenNode.fromRepeatedNode(repeatedNode),
          deletedChildNodes = childNodes.splice(start, deleteCount, rewrittenNode);

    nonTerminalNode = rewrittenNode;  ///

    childNodes = nonTerminalNode.getChildNodes(); ///

    deletedChildNodes.pop();

    unshift(childNodes, deletedChildNodes);

    rewriteDirectRepetition(nonTerminalNode);
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

function rewriteIndirectRepetition(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        indirectlyRepeatedChildNode = childNodes.find((childNode) => (childNode instanceof IndirectlyRepeatedNode)) || null;

  if (indirectlyRepeatedChildNode !== null) {
    const index = childNodes.indexOf(indirectlyRepeatedChildNode),
          start = index,  ///
          deleteCount = 1,
          indirectlyRepeatedChildNodeChildNodes = indirectlyRepeatedChildNode.getChildNodes();

    childNodes.splice(start, deleteCount, ...indirectlyRepeatedChildNodeChildNodes);
  }
}
