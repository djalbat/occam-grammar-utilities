"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import RewrittenNode from "./node/rewritten";
import DirectlyReducedNode from "./node/reduced/directly";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyReducedNode from "./node/reduced/indirectly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

const { last, first, filter, unshift, backwardsSome } = arrayUtilities;

export default function rewriteNodes(node) {  ///
  const nonTerminalNode = node; ///

  rewrite(nonTerminalNode);

  removeEpsilons(nonTerminalNode);

  removeIntermediaries(nonTerminalNode);
}

function rewrite(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes();

  rewriteIndirectRepetition(nonTerminalNode);

  rewriteDirectRepetition(nonTerminalNode);

  rewriteDirectReduction(nonTerminalNode);

  rewriteIndirectReduction(nonTerminalNode);

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
  const ruleName = nonTerminalNode.getRuleName(),
        childNodes = nonTerminalNode.getChildNodes(),
        singularNonTerminalNodes = [];

  for (;;) {
    const childNodes = nonTerminalNode.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength > 1) {
      break;
    }

    const firstChildNode = first(childNodes),
          firstChildNodeTerminalNode = firstChildNode.isTerminalNode();

    if (firstChildNodeTerminalNode) {
      break;
    }

    const singularNonTerminalNode = firstChildNode; ///

    singularNonTerminalNodes.push(singularNonTerminalNode);

    nonTerminalNode = singularNonTerminalNode; ///
  }

  nonTerminalNode = null;

  backwardsSome(singularNonTerminalNodes, (singularNonTerminalNode) => {
    const singularNonTerminalNodeRuleName = singularNonTerminalNode.getRuleName();

    if (singularNonTerminalNodeRuleName === ruleName) {
      nonTerminalNode = singularNonTerminalNode;  ///

      return true;
    }
  });

  if (nonTerminalNode !== null) {
    const nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(),
          start = 0,
          deleteCount = 1;

    childNodes.splice(start, deleteCount, ...nonTerminalNodeChildNodes);
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
