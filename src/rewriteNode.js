"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "./node/reduced";
import RewrittenNode from "./node/rewritten";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName } from "./utilities/ruleName";

const { front, first, last, push } = arrayUtilities;

export default function rewriteNode(node) {  ///
  rewriteDirectlyRepeatedNodes(node);

  rewriteIndirectlyRepeatedNodes(node);

  rewriteReducedNodes(node);

  removeEpsilonNodes(node);
}

function rewriteIndirectlyRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  const nonTerminalNode = node; ///

  let childNodes = nonTerminalNode.getChildNodes();

  const lastChildNode = last(childNodes);

  if (lastChildNode instanceof IndirectlyRepeatedNode) {
    const parentNode = nonTerminalNode, ///
          frontChildNodes = front(childNodes),
          indirectlyRepeatedNode = lastChildNode, ///
          indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);  ///

    childNodes = frontChildNodes; ///

    const rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, childNodes);

    childNodes = indirectlyRepeatedNode.getChildNodes();

    const childNode = rewrittenNode,  ///
          replacementChildNodes = [
            childNode,
            ...childNodes
          ];

    replaceAllChildNodes(parentNode, replacementChildNodes);
  }

  childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    rewriteIndirectlyRepeatedNodes(node);
  });
}

function rewriteDirectlyRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  const nonTerminalNode = node; ///

  let childNodes = nonTerminalNode.getChildNodes();

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

    rewriteDirectlyRepeatedNodes(node);
  });
}

function rewriteReducedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  const nonTerminalNode = node; ///

  let childNodes = nonTerminalNode.getChildNodes();

  const firstChildNode = first(childNodes);

  if (firstChildNode instanceof ReducedNode) {
    const parentNode = nonTerminalNode, ///
          childNode = firstChildNode, ///
          reducedNode = childNode, ///
          reducedNodeRuleName = reducedNode.getRuleName(),
          parentNodeRuleName = parentNode.getRuleName(),
          reducedRuleName = reducedNodeRuleName,  ///
          parentRuleName = parentNodeRuleName,  ///
          ruleName = ruleNameFromReducedRuleName(reducedRuleName),
          replacementChildNodes = []; ///

    if (ruleName === parentRuleName) {
      const reducedNodeChildNodes = reducedNode.getChildNodes();

      push(replacementChildNodes, reducedNodeChildNodes);
    } else {
      const rewrittenNode = RewrittenNode.fromReducedNode(reducedNode);

      replacementChildNodes.push(rewrittenNode);
    }

    replaceChildNode(parentNode, childNode, replacementChildNodes);
  }

  childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    rewriteReducedNodes(node);
  });
}

function removeEpsilonNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (!nodeNonTerminalNode) {
    return;
  }

  let nonTerminalNode = node, ///
      childNodes = nonTerminalNode.getChildNodes();

  let index = 0,
      childNode = childNodes[index] || null;

  while (childNode !== null) {
    if (childNode instanceof EpsilonNode) {
      const parentNode = nonTerminalNode, ///
            removedChildNode = childNode;

      removeChildNode(parentNode, removedChildNode);
    } else {
      index++;
    }

    childNode = childNodes[index] || null;
  }

  childNodes = nonTerminalNode.getChildNodes();

  childNodes.forEach((childNode) => {
    const node = childNode; ///

    removeEpsilonNodes(node);
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

function removeChildNode(parentNode, removedChildNode) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(removedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount);
}
