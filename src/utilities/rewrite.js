"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import ReducedNode from "../node/reduced";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { findLastIndex } from "../utilities/nodes";
import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push, clear, backwardsForEach } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let parentNode = nonTerminalNode; ///

  const childNodes = parentNode.getChildNodes(),
        indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);

  backwardsForEach(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
    nonTerminalNode = nonTerminalNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode); ///

    const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          parentNodeNodeRuleName = parentNode.getRuleName(),
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    if (parentNodeNodeRuleName === ruleName) {
      const ambiguous = indirectlyRepeatedNode.isAmbiguous(),
            precedence = indirectlyRepeatedNode.getPrecedence();

      parentNode.setAmbiguous(ambiguous);

      parentNode.setPrecedence(precedence);
    }

    const replacementChildNodes = replacementChildNodesFromNonTerminalNodeNodeAndIndirectlyRepeatedNode(nonTerminalNode, indirectlyRepeatedNode);

    replaceAllChildNodes(parentNode, replacementChildNodes);

    parentNode = nonTerminalNode; ///
  });

  return parentNode;
}

export function rewriteDirectlyRepeatedNodes(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes();

  let directlyRepeatedNodes,
      directlyRepeatedNodesLength;

  directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);

  directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  while (directlyRepeatedNodesLength > 0) {
    const replacementChildNodes = [],
          replacedChildNodes = directlyRepeatedNodes, ///
          parentNode = nonTerminalNode; ///

    directlyRepeatedNodes.forEach((directlyRepeatedNode) => {
      const directlyRepeatedNodesChildNodes = directlyRepeatedNode.getChildNodes();

      push(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });

    replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes);

    directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);

    directlyRepeatedNodesLength = directlyRepeatedNodes.length;
  }
}

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
        reducedNodeRuleName = reducedNode.getRuleName(),
        reducedNodeAmbiguous = reducedNode.isAmbiguous(),
        reducedNodePrecedence = reducedNode.getPrecedence(),
        reducedRuleName = reducedNodeRuleName,  ///
        parentRuleName = parentNodeRuleName,  ///
        precedence = reducedNodePrecedence, ///
        ambiguous = reducedNodeAmbiguous, ///
        ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  if (ruleName === parentRuleName) {
    const reducedNodeChildNodes = reducedNode.getChildNodes();

    replacementChildNodes = reducedNodeChildNodes;  ///

    parentNode.setPrecedence(precedence);

    parentNode.setAmbiguous(ambiguous);
  } else {
    const childNodes = reducedNode.getChildNodes(),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous);

    nonTerminalNode.setPrecedence(nonTerminalNode);

    replacementChildNodes = [
      nonTerminalNode
    ];
  }

  replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
}

function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes) {
  const replacedChildNodesLength = replacedChildNodes.length;

  if (replacedChildNodesLength === 0) {
    return;
  }

  const firstReplacedChildNode = first(replacedChildNodes),
        childNodes = parentNode.getChildNodes(),
        firstIndex = childNodes.indexOf(firstReplacedChildNode),
        start = firstIndex, ///
        deleteCount = replacedChildNodesLength; ///

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceAllChildNodes(parentNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes();

  clear(childNodes);

  push(childNodes, replacementChildNodes);
}

function findDirectlyRepeatedNodes(childNodes) {
  const directlyRepeatedNodes = findRepeatedNonTerminalNodes(childNodes, (childNode) => { ///
    const childNodeDirectlyRepeatedNode = (childNode instanceof DirectlyRepeatedNode);

    if (childNodeDirectlyRepeatedNode) {
      return true;
    }
  });

  return directlyRepeatedNodes;
}

function findIndirectlyRepeatedNodes(childNodes) {
  const indirectlyRepeatedNodes = findRepeatedNonTerminalNodes(childNodes, (childNode) => { ///
    const childNodeIndirectlyRepeatedNode = (childNode instanceof IndirectlyRepeatedNode);

    if (childNodeIndirectlyRepeatedNode) {
      return true;
    }
  });

  return indirectlyRepeatedNodes;
}

function findRepeatedNonTerminalNodes(childNodes, callback) {
  const repeatedNonTerminalNodes = [],
        lastIndex = findLastIndex(childNodes, callback);

  if (lastIndex !== null) {
    for (let index = lastIndex; index >= 0; index--) {
      const childNode = childNodes[index],
            childNodeRepeatedNonTerminalNode = callback(childNode);

      if (!childNodeRepeatedNonTerminalNode) {
        break;
      }

      const repeatedNonTerminalNode = childNode;  ///

      repeatedNonTerminalNodes.unshift(repeatedNonTerminalNode);
    }
  }

  return repeatedNonTerminalNodes;
}

function nonTerminalNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode) {
  let ruleName,
      childNodes,
      ambiguous;

  childNodes = parentNode.getChildNodes();

  const indirectlyRepeatedNodeAmbiguous = indirectlyRepeatedNode.isAmbiguous(),
        indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
        frontChildNodes = front(childNodes);

  ruleName = leftRecursiveRuleName; ///

  childNodes = frontChildNodes; ///

  ambiguous = indirectlyRepeatedNodeAmbiguous;  ///

  const nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous);  ///

  return nonTerminalNode;
}

function replacementChildNodesFromNonTerminalNodeNodeAndIndirectlyRepeatedNode(nonTerminalNode, indirectlyRepeatedNode) {
  const replacementChildNodes = [
          nonTerminalNode
        ],
        indirectlyRepeatedNodeNullary = indirectlyRepeatedNode.isNullary();

  if (!indirectlyRepeatedNodeNullary) {
    const indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes();

    push(replacementChildNodes, indirectlyRepeatedNodeChildNodes);
  }

  return replacementChildNodes;
}
