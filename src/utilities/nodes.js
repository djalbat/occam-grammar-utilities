"use strict";

import { arrayUtilities } from "necessary";
import { EpsilonNode, NonTerminalNode } from "occam-parsers";

import ReducedNode from "../node/reduced";
import RewrittenNode from "../node/rewritten";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName, leftRecursiveRuleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, push, clear, filter, backwardsSome } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  const childNodes = nonTerminalNode.getChildNodes(),
        indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);

  backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
    const parentNode = nonTerminalNode, ///
          rewrittenNode = rewrittenNodeFromNonTerminalNodeAndIndirectlyRepeatedNode(nonTerminalNode, indirectlyRepeatedNode),
          replacementChildNodes = replacementChildNodesFromRewrittenNodeAndIndirectlyRepeatedNode(rewrittenNode, indirectlyRepeatedNode);

    const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
          leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    if (nonTerminalNodeRuleName === ruleName) {
      const precedence = indirectlyRepeatedNode.getPrecedence();

      nonTerminalNode.rewritePrecedence(precedence);
    }

    if (leftRecursiveRuleName === nonTerminalNodeRuleName) {
      const precedence = nonTerminalNode.getPrecedence();

      rewrittenNode.rewritePrecedence(precedence);
    }

    replaceAllChildNodes(parentNode, replacementChildNodes);

    nonTerminalNode = rewrittenNode;  ///
  });

  const parentNode = nonTerminalNode; ///

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
      const childNodes = reducedNode.getChildNodes(),
            precedence = reducedNode.getPrecedence(),
            nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence),
            replacementChildNode = nonTerminalNode;  ///

      replacementChildNodes.push(replacementChildNode);
    }

    replaceChildNode(parentNode, replacedChildNode, replacementChildNodes);
  }
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

function rewrittenNodeFromNonTerminalNodeAndIndirectlyRepeatedNode(nonTerminalNode, indirectlyRepeatedNode) {
  let ruleName,
      childNodes;

  childNodes = nonTerminalNode.getChildNodes();

  const indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
        indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
        nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
        leftRecursiveRuleName = leftRecursiveRuleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
        frontChildNodes = front(childNodes);

  ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

  if (nonTerminalNodeRuleName === ruleName) {
    const precedence = indirectlyRepeatedNode.getPrecedence();

    nonTerminalNode.rewritePrecedence(precedence);
  }

  ruleName = leftRecursiveRuleName; ///

  childNodes = frontChildNodes; ///

  const rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, childNodes);

  return rewrittenNode;
}

function replacementChildNodesFromRewrittenNodeAndIndirectlyRepeatedNode(rewrittenNode, indirectlyRepeatedNode) {
  const indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
        replacementChildNodes = [
          rewrittenNode,
          ...indirectlyRepeatedNodeChildNodes
        ];

  filter(replacementChildNodes, (replacementChildNode) => {
    const replacementChildNodeEpsilonNode = (replacementChildNode instanceof EpsilonNode);

    if (!replacementChildNodeEpsilonNode) {
      return true;
    }
  });

  return replacementChildNodes;
}
