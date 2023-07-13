"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import RewrittenNode from "../node/rewritten";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push, clear, filter, backwardsSome } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes(),
      indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes),
      indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;

  while (indirectlyRepeatedNodesLength > 0) {
    backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
      const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
            indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
            frontChildNodes = front(childNodes),
            ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

      childNodes = frontChildNodes; ///

      const precedence = indirectlyRepeatedNode.getPrecedence(),
            rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, childNodes),
            indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
            replacementChildNodes = [
              rewrittenNode,
              ...indirectlyRepeatedNodeChildNodes
            ];

      nonTerminalNode.setPrecedence(precedence);

      childNodes = nonTerminalNode.getChildNodes();

      replaceAllChildNodes(childNodes, replacementChildNodes);

      removeEpsilonNodes(nonTerminalNode);

      nonTerminalNode = rewrittenNode;  ///

      childNodes = nonTerminalNode.getChildNodes();
    });

    childNodes = nonTerminalNode.getChildNodes();

    indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);

    indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;
  }

  const parentNode = nonTerminalNode; ///

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

      push(replacementChildNodes, directlyRepeatedNodesChildNodes);
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

function replaceAllChildNodes(childNodes, replacementChildNodes) {
  clear(childNodes);

  push(childNodes, replacementChildNodes);
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

function findIndirectlyRepeatedNodes(childNodes) {
  const indirectlyRepeatedNodes = findRepeatedNodes(childNodes, (childNode) => {
    const childNodeIndirectlyRepeatedNode = (childNode instanceof IndirectlyRepeatedNode);

    if (childNodeIndirectlyRepeatedNode) {
      return true;
    }
  });

  return indirectlyRepeatedNodes;
}

function findDirectlyRepeatedNodes(childNodes) {
  const directlyRepeatedNodes = findRepeatedNodes(childNodes, (childNode) => {
    const childNodeDirectlyRepeatedNode = (childNode instanceof DirectlyRepeatedNode);

    if (childNodeDirectlyRepeatedNode) {
      return true;
    }
  });

  return directlyRepeatedNodes;
}

function findRepeatedNodes(childNodes, callback) {
  const repeatedNodes = [],
        lastIndex = childNodes.findLastIndex(callback);

  if (lastIndex !== null) {
    for (let index = lastIndex; index >= 0; index--) {
      const childNode = childNodes[index],
            childNodeRepeatedNode = callback(childNode);

      if (!childNodeRepeatedNode) {
        break;
      }

      const repeatedNode = childNode; ///

      repeatedNodes.unshift(repeatedNode);
    }
  }

  return repeatedNodes;
}
