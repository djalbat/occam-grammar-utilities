"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import ReducedNode from "../node/reduced";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push, clear, backwardsSome } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let parentNode = nonTerminalNode; ///

  const childNodes = parentNode.getChildNodes(),
        indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);

  backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
    nonTerminalNode = nonTerminalNodeFromParentNodeAndIndirectlyRepeatedNode(parentNode, indirectlyRepeatedNode); ///

    const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          parentNodeNodeRuleName = parentNode.getRuleName(),
          leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    if (parentNodeNodeRuleName === ruleName) {
      const recursively = false,
            precedence = indirectlyRepeatedNode.getPrecedence(recursively);

      parentNode.setPrecedence(precedence);
    }

    if (leftRecursiveRuleName === parentNodeNodeRuleName) {
      const recursively = false,
            precedence = parentNode.getPrecedence(recursively);

      // nonTerminalNode.setPrecedence(precedence);
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
        reducedNodePrecedence = reducedNode.getPrecedence(),
        reducedRuleName = reducedNodeRuleName,  ///
        parentRuleName = parentNodeRuleName,  ///
        precedence = reducedNodePrecedence, ///
        ruleName = ruleNameFromReducedRuleName(reducedRuleName);

  if (ruleName === parentRuleName) {
    const reducedNodeChildNodes = reducedNode.getChildNodes();

    replacementChildNodes = reducedNodeChildNodes;  ///

    parentNode.setPrecedence(precedence);
  } else {
    const childNodes = reducedNode.getChildNodes(),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence);

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
        lastIndex = childNodes.findLastIndex(callback);

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
      childNodes;

  childNodes = parentNode.getChildNodes();

  const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
        frontChildNodes = front(childNodes);

  ruleName = leftRecursiveRuleName; ///

  childNodes = frontChildNodes; ///

  const nonTerminalNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);  ///

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
