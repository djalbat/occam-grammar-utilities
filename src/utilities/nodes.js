"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import RewrittenNode from "../node/rewritten";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push, filter, unshift, find, backwardsSome } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let parentNode;

  const childNodes = nonTerminalNode.getChildNodes(),
        indirectlyRepeatedNodes = find(childNodes, (childNode) => {
          const childNodeIndirectlyRepeatedNode = (childNode instanceof IndirectlyRepeatedNode);

          if (childNodeIndirectlyRepeatedNode) {
            return true;
          }
        });

  parentNode = nonTerminalNode; ///

  backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
    let childNodes = parentNode.getChildNodes();

    const frontChildNodes = front(childNodes),
          indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    childNodes = frontChildNodes; ///

    const precedence = indirectlyRepeatedNode.getPrecedence(),
          rewrittenNode = RewrittenNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence),
          indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
          replacementChildNodes = [
            rewrittenNode,
            ...indirectlyRepeatedNodeChildNodes
          ];

    replaceAllChildNodes(parentNode, replacementChildNodes);

    parentNode = rewrittenNode; ///
  });

  return parentNode;
}

export function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes(),
      directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes),
      directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  while (directlyRepeatedNodesLength > 0) {
    const replacementChildNodes = [],
          replacedChildNodes = directlyRepeatedNodes; ///

    directlyRepeatedNodes.forEach((directlyRepeatedNodes) => {
      const directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();

      unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });

    replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes);

    childNodes = nonTerminalNode.getChildNodes();

    directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);

    directlyRepeatedNodesLength = directlyRepeatedNodes.length;
  }
}

export function rewriteReducedNodes(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes();

  const firstChildNode = first(childNodes),
        firstChildNodeReducedNode = (firstChildNode instanceof ReducedNode);

  if (firstChildNodeReducedNode) {
    const parentNode = nonTerminalNode, ///
          reducedNode = firstChildNode, ///
          replacedChildNode = reducedNode, ///
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

    replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
  }
}

export function removeEpsilonNodes(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes();

  filter(childNodes, (childNode) => {
    const childNodeEpsilonNode = (childNode instanceof EpsilonNode);

    if (!childNodeEpsilonNode) {
      return true;
    }
  });
}

function findDirectlyRepeatedNodes(childNodes) {
  const directlyRepeatedNodes = [];

  const lastIndex = childNodes.findLastIndex((childNode) => {
    const childNodeDirectlyRepeatedNode = (childNode instanceof DirectlyRepeatedNode);

    if (childNodeDirectlyRepeatedNode) {
      return true;
    }
  });

  if (lastIndex !== null) {
    for (let index = lastIndex; index >= 0; index--) {
      const childNode = childNodes[index],
            childNodeDirectlyRepeatedNode = (childNode instanceof DirectlyRepeatedNode);

      if (!childNodeDirectlyRepeatedNode) {
        break;
      }

      const directlyRepeatedNode = childNode; ///

      directlyRepeatedNodes.unshift(directlyRepeatedNode);
    }
  }

  return directlyRepeatedNodes;
}

function replaceAllChildNodes(parentNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        start = 0,
        deleteCount = Infinity;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes) {
  const replacedChildNodesLength = replacedChildNodes.length;

  if (replacedChildNodesLength === 0) {
    return;
  }

  const firstReplacedChildNode = first(replacedChildNodes),
        firstIndex = childNodes.indexOf(firstReplacedChildNode),
        start = firstIndex, ///
        deleteCount = replacedChildNodesLength; ///

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}
