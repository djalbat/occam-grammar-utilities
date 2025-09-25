"use strict";

import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { push } = arrayUtilities;

export function rewriteReducedNodes(nonTerminalNode, state) {
  let reducedChildNode;

  const firstChildNodeReducedNode = nonTerminalNode.someChildNode((childNode, index) => {
    if (index === 0) {
      if (childNode instanceof ReducedNode) {
        reducedChildNode = childNode; ///

        return true;
      }
    }
  })

  if (!firstChildNodeReducedNode) {
    return;
  }

  const parentNode = nonTerminalNode, ///
        replacedChildNode = reducedChildNode, ///
        replacedChildNodeOpacity = replacedChildNode.getOpacity(),
        replacedChildNodeRuleName = replacedChildNode.getRuleName(),
        replacedChildNodePrecedence = replacedChildNode.getPrecedence(),
        replacedChildNodeChildNodes = replacedChildNode.removeChildNodes(),
        parentNodeRuleName = parentNode.getRuleName(),
        reducedRuleName = replacedChildNodeRuleName,  ///
        parentRuleName = parentNodeRuleName,  ///
        precedence = replacedChildNodePrecedence, ///
        opacity = replacedChildNodeOpacity, ///
        ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  let replacementChildNodes;

  if (ruleName === parentRuleName) {
    replacementChildNodes = replacedChildNodeChildNodes;  ///

    parentNode.setPrecedence(precedence);
  } else {
    const childNodes = replacedChildNodeChildNodes, ///
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence),
          replacementChildNode = nonTerminalNode; ///

    replacementChildNodes = [
      replacementChildNode
    ];
  }

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}

export function rewriteDirectlyRepeatedNodes(nonTerminalNode, state) {
  let directlyRepeatedNodesReplaced;

  directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);

  while (directlyRepeatedNodesReplaced) {
    directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);
  }
}

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode, state) {
  let parentNode = nonTerminalNode; ///

  const indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(nonTerminalNode);

  indirectlyRepeatedNodes.forEach((indirectlyRepeatedNode) => {
    const leftRecursiveNode = leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode, state),
          childNodes = childNodesFromLeftRecursiveNodeNodeAndIndirectlyRepeatedNode(leftRecursiveNode, indirectlyRepeatedNode);

    adjustParentNodePrecedence(parentNode, indirectlyRepeatedNode);

    parentNode.setChildNodes(childNodes);

    parentNode = leftRecursiveNode; ///
  });

  return parentNode;
}

function findRepeatedNodes(nonTerminalNode, RepeatedNode) {
  let repeatedNodes;

  let endIndex = -1;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

    if (childNodeRepeatedNode) {
      endIndex = index + 1;

      return true;
    }
  });

  if (endIndex === -1) {
    repeatedNodes = [];
  } else {
    let startIndex;

    nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
      const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (!childNodeRepeatedNode) {
        if (index < endIndex) {
          return true;
        }
      }

      startIndex = index; ///
    });

    const childNodes = nonTerminalNode.sliceChildNodes(startIndex, endIndex);

    repeatedNodes = childNodes; ///
  }

  return repeatedNodes;
}

function removeFrontChildNodes(parentNode) {
  const multiplicity = parentNode.getMultiplicity(),
        deleteCount = multiplicity - 1,
        start = 0,
        removedFrontChildNodes = parentNode.spliceChildNodes(start, deleteCount);

  return removedFrontChildNodes;
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
      const directlyRepeatedNodesChildNodes = directlyRepeatedNode.removeChildNodes();

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

function leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode, state) {
  const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedNodeOpacity = indirectlyRepeatedNode.getOpacity(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        removedFrontChildNodes = removeFrontChildNodes(parentNode),
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
        ruleName = leftRecursiveRuleName, ///
        childNodes = removedFrontChildNodes,  ///
        opacity = indirectlyRepeatedNodeOpacity,  ///
        precedence = null,
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
        nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence),
        leftRecursiveNode = nonTerminalNode;  ///

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
