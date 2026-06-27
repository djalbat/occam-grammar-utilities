"use strict";

import { arrayUtilities } from "necessary";

import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { push } = arrayUtilities;

export function rewriteReducedNode(nonTerminalNode, context) {
  let reducedChildNode;

  nonTerminalNode.someChildNode((childNode, index) => {
    if (index === 0) {
      reducedChildNode = childNode; ///

      return true;
    }
  });

  const parentNode = nonTerminalNode, ///
        replacedChildNode = reducedChildNode; ///

  let replacementChildNodes;

  const reducedChildNodeRuleName = reducedChildNode.getRuleName(),
        parentNodeRuleName = parentNode.getRuleName(),
        reducedRuleName = reducedChildNodeRuleName,  ///
        parentRuleName = parentNodeRuleName,  ///
        ruleName = ruleNameFromReducedRuleName(reducedRuleName),
        opacity = reducedChildNode.getOpacity(),
        precedence = reducedChildNode.getPrecedence(),
        childNodes = reducedChildNode.removeChildNodes();

  if (ruleName === parentRuleName) {
    replacementChildNodes = childNodes;  ///

    // parentNode.setPrecedence(precedence);
  } else {
    const NonTerminalNode = context.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence),
          replacementChildNode = nonTerminalNode; ///

    replacementChildNodes = [
      replacementChildNode
    ];
  }

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}

export function rewriteDirectlyRepeatedNodes(nonTerminalNode, context) {
  let directlyRepeatedNodesReplaced;

  directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);

  while (directlyRepeatedNodesReplaced) {
    directlyRepeatedNodesReplaced = replaceDirectlyRepeatedNodes(nonTerminalNode);
  }
}

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode, context) {
  let parentNode = nonTerminalNode; ///

  const indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(nonTerminalNode);

  indirectlyRepeatedNodes.forEach((indirectlyRepeatedNode) => {
    const leftRecursiveNode = leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode, context),
          childNodes = childNodesFromLeftRecursiveNodeNodeAndIndirectlyRepeatedNode(leftRecursiveNode, indirectlyRepeatedNode);

    // adjustParentNodePrecedence(parentNode, indirectlyRepeatedNode);

    parentNode.setChildNodes(childNodes);

    parentNode = leftRecursiveNode; ///
  });

  return parentNode;
}

function findRepeatedNodes(nonTerminalNode, RepeatedNode) {
  let repeatedNodes = [];

  let endIndex = null,
      startIndex = null;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

    if (endIndex === null) {
      if (childNodeRepeatedNode) {
        endIndex = index + 1;
      }
    }

    if (endIndex !== null) {
      if (childNodeRepeatedNode) {
        startIndex = index; ///
      } else {
        return true;
      }
    }
  });

  if (startIndex !== null) {
    const childNodes = nonTerminalNode.sliceChildNodes(startIndex, endIndex);

    repeatedNodes = childNodes; ///
  }

  return repeatedNodes;
}

function removeFrontChildNodes(parentNode) {
  const multiplicity = parentNode.getMultiplicity(),
        start = 0,
        deleteCount = multiplicity - 1,
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

function leftRecursiveNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode, context) {
  let ruleName;

  ruleName = indirectlyRepeatedNode.getRuleName();

  const indirectlyRepeatedRuleName = ruleName,  ///
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

  ruleName = leftRecursiveRuleName; ///

  const removedFrontChildNodes = removeFrontChildNodes(parentNode),
        opacity = indirectlyRepeatedNode.getOpacity(),
        precedence = null,
        childNodes = removedFrontChildNodes,  ///
        NonTerminalNode = context.NonTerminalNodeFromRuleName(ruleName),
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
