"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import ReducedNode from "../node/reduced";
import LeftRecursiveNode from "../node/leftRecursive";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push } = arrayUtilities;

export function rewriteReducedNodes(nonTerminalNode) {
  let childNodes = nonTerminalNode.getChildNodes();

  const firstChildNode = first(childNodes),
        firstChildNodeReducedNode = (firstChildNode instanceof ReducedNode);

  if (!firstChildNodeReducedNode) {
    return;
  }

  let replacementChildNodes;

  const parentNode = nonTerminalNode, ///
        reducedNode = firstChildNode, ///
        replacedChildNode = reducedNode, ///
        parentNodeRuleName = parentNode.getRuleName(),
        reducedNodeOpacity = reducedNode.getOpacity(),
        reducedNodeRuleName = reducedNode.getRuleName(),
        reducedNodePrecedence = reducedNode.getPrecedence(),
        reducedRuleName = reducedNodeRuleName,  ///
        parentRuleName = parentNodeRuleName,  ///
        precedence = reducedNodePrecedence, ///
        opacity = reducedNodeOpacity, ///
        ruleName = ruleNameFromReducedRuleName(reducedRuleName),
        removedChildNodes = reducedNode.removeChildNodes();

  if (ruleName === parentRuleName) {
    replacementChildNodes = removedChildNodes;  ///

    parentNode.setPrecedence(precedence);
  } else {
    const childNodes = removedChildNodes, ///
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);

    nonTerminalNode.setPrecedence(nonTerminalNode);

    replacementChildNodes = [
      nonTerminalNode
    ];
  }

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}

export function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
  let directlyRepeatedNodesReplaced;

  directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);

  while (directlyRepeatedNodesReplaced) {
    directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);
  }
}

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let parentNode = nonTerminalNode; ///

  const indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(nonTerminalNode);

  indirectlyRepeatedNodes.forEach((indirectlyRepeatedNode) => {
    const leftRecursiveNode = leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode),
          childNodes = childNodesFromLeftRecursiveNodeNodeAndIndirectlyRepeatedNode(leftRecursiveNode, indirectlyRepeatedNode);

    adjustParentNodePrecedence(parentNode, indirectlyRepeatedNode);

    parentNode.setChildNodes(childNodes);

    parentNode = leftRecursiveNode; ///
  });

  return parentNode;
}

function findRepeatedNodes(nonTerminalNode, RepeatedNode) {
  const repeatedNodes = [];

  let lastIndex = null;

  const childNodes = nonTerminalNode.getChildNodes(),
        length = childNodes.length;

  for (let index = length - 1; index >= 0; index--) {
    const childNode = childNodes[index],
          childNodeRepeatedNode = (childNode instanceof RepeatedNode);

    if (childNodeRepeatedNode) {
      lastIndex = index;  ///

      break;
    }
  }

  if (lastIndex !== null) {
    for (let index = lastIndex; index >= 0; index--) {
      const childNode = childNodes[index],
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (!childNodeRepeatedNode) {
        break;
      }

      const repeatedNode = childNode;  ///

      repeatedNodes.unshift(repeatedNode);
    }
  }

  return repeatedNodes;
}

function findDirectlyRepeatedNodes(nonTerminalNode) {
  const directlyRepeatedNodes = findRepeatedNodes(nonTerminalNode, DirectlyRepeatedNode);

  return directlyRepeatedNodes;
}

function findIndirectlyRepeatedNodes(nonTerminalNode) {
  const indirectlyRepeatedNodes = findRepeatedNodes(nonTerminalNode, IndirectlyRepeatedNode);

  indirectlyRepeatedNodes.reverse();

  return indirectlyRepeatedNodes;
}

function replaceDirectlyRepeatedNodes(nonTerminalNode) {
  let directlyRepeatedNodesReplaced = false;

  const directlyRepeatedNodes = findDirectlyRepeatedNodes(nonTerminalNode),
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  if (directlyRepeatedNodesLength > 0) {
    const parentNode = nonTerminalNode, ///
          replacedChildNodes = directlyRepeatedNodes, ///
          replacementChildNodes = []; ///

    directlyRepeatedNodes.forEach((directlyRepeatedNode) => {
      const directlyRepeatedNodesChildNodes = directlyRepeatedNode.getChildNodes();

      push(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });

    parentNode.replaceChildNodes(replacedChildNodes, replacementChildNodes);

    directlyRepeatedNodesReplaced = true;
  }

  return directlyRepeatedNodesReplaced;
}

function adjustParentNodePrecedence(parentNode, indirectlyRepeatedNode) {
  const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        parentNodeNodeRuleName = parentNode.getRuleName(),
        ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

  if (parentNodeNodeRuleName === ruleName) {
    const precedence = indirectlyRepeatedNode.getPrecedence();

    parentNode.setPrecedence(precedence);
  }
}

function leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode) {
  let childNodes;

  childNodes = parentNode.getChildNodes();

  const frontChildNodes = front(childNodes);

  childNodes = parentNode.removeChildNodes(frontChildNodes);

  const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedNodeOpacity = indirectlyRepeatedNode.getOpacity(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
        ruleName = leftRecursiveRuleName, ///
        opacity = indirectlyRepeatedNodeOpacity,  ///
        leftRecursiveNode = LeftRecursiveNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);

  return leftRecursiveNode;
}

function childNodesFromLeftRecursiveNodeNodeAndIndirectlyRepeatedNode(leftRecursiveNode, indirectlyRepeatedNode) {
  const childNodes = [
          leftRecursiveNode
        ],
        indirectlyRepeatedNodeNullary = indirectlyRepeatedNode.isNullary();

  if (!indirectlyRepeatedNodeNullary) {
    const removedChildNodes = indirectlyRepeatedNode.removeChildNodes();

    push(childNodes, removedChildNodes);
  }

  return childNodes;
}
