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
        directlyReducedNode = childNodes.find((childNode) => (childNode instanceof DirectlyReducedNode)) || null;

  if (directlyReducedNode !== null) {
    const index = childNodes.indexOf(directlyReducedNode),
          reducedNode = directlyReducedNode,  ///
          rewrittenNode = RewrittenNode.fromReducedNode(reducedNode),
          start = index,  ///
          deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);
  }
}

function rewriteDirectRepetition(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes();

  const directlyRepeatedNodes = childNodes.filter((childNode) => (childNode instanceof DirectlyRepeatedNode)),
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  if (directlyRepeatedNodesLength > 0) {
    const lastDirectlyRepeatedNode = last(directlyRepeatedNodes),
          index = childNodes.indexOf(lastDirectlyRepeatedNode),
          start = 0,
          deleteCount = index + 1,
          repeatedNode = lastDirectlyRepeatedNode,  ///
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
        indirectlyReducedNode = childNodes.find((childNode) => (childNode instanceof IndirectlyReducedNode)) || null;

  if (indirectlyReducedNode !== null) {
    const index = childNodes.indexOf(indirectlyReducedNode),
          reducedNode = indirectlyReducedNode,  ///
          rewrittenNode = RewrittenNode.fromReducedNode(reducedNode),
          start = index,  ///
          deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);
  }
}

function rewriteIndirectRepetition(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        indirectlyRepeatedNode = childNodes.find((childNode) => (childNode instanceof IndirectlyRepeatedNode)) || null;

  if (indirectlyRepeatedNode !== null) {
    const indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
          directlyRepeatedNode = indirectlyRepeatedNodeChildNodes.find((indirectlyRepeatedNodeChildNode) => (indirectlyRepeatedNodeChildNode instanceof DirectlyRepeatedNode)) || null;

    if (directlyRepeatedNode !== null) {
      let index = indirectlyRepeatedNodeChildNodes.indexOf(directlyRepeatedNode),
          start = index,  ///
          deleteCount = Infinity;

      const directlyRepeatedNodes = indirectlyRepeatedNodeChildNodes.splice(start, deleteCount);

      index = childNodes.indexOf(indirectlyRepeatedNode);

      start = index + 1;

      deleteCount = 0;

      childNodes.splice(start, deleteCount, ...directlyRepeatedNodes);
    }

    const repeatedNode = indirectlyRepeatedNode,  ///
          rewrittenNode = RewrittenNode.fromRepeatedNode(repeatedNode);

    let index = childNodes.indexOf(indirectlyRepeatedNode),
        start = index,
        deleteCount = 1;

    childNodes.splice(start, deleteCount, rewrittenNode);

    start = 0;

    deleteCount = index;  ///

    const deleteChildNodes = childNodes.splice(start, deleteCount),
          rewrittenNodeChildNodes = rewrittenNode.getChildNodes();

    unshift(rewrittenNodeChildNodes, deleteChildNodes);
  }
}
