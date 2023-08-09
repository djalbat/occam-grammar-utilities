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
  let precedence,
      childNodes,
      indirectlyRepeatedNodes,
      indirectlyRepeatedNodesLength;

  precedence = nonTerminalNode.getPrecedence();

  childNodes = nonTerminalNode.getChildNodes();

  indirectlyRepeatedNodes = findIndirectlyRepeatedNodes(childNodes);

  indirectlyRepeatedNodesLength = indirectlyRepeatedNodes.length;

  while (indirectlyRepeatedNodesLength > 0) {
    backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
      const indirectlyRepeatedNodePrecedence = indirectlyRepeatedNode.getPrecedence(),
            indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
            indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
            frontChildNodes = front(childNodes),
            ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

      childNodes = frontChildNodes; ///

      const rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, childNodes),
            indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
            replacementChildNodes = [
              rewrittenNode,
              ...indirectlyRepeatedNodeChildNodes
            ];

      rewrittenNode.rewritePrecedence(precedence);

      precedence = indirectlyRepeatedNodePrecedence;  ///

      childNodes = nonTerminalNode.getChildNodes();

      nonTerminalNode.rewritePrecedence(precedence);

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
  const childNodes = nonTerminalNode.getChildNodes();

  let directlyRepeatedNodes,
      directlyRepeatedNodesLength;

  directlyRepeatedNodes = findDirectlyRepeatedNodes(childNodes);

  directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  while (directlyRepeatedNodesLength > 0) {
    const replacementChildNodes = [],
          replacedChildNodes = directlyRepeatedNodes; ///

    directlyRepeatedNodes.forEach((directlyRepeatedNode) => {
      const directlyRepeatedNodesChildNodes = directlyRepeatedNode.getChildNodes();

      push(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });

    replaceChildNodes(childNodes, replacedChildNodes, replacementChildNodes);

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

function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

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

function replaceAllChildNodes(childNodes, replacementChildNodes) {
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
    let ruleName = null;

    for (let index = lastIndex; index >= 0; index--) {
      const childNode = childNodes[index],
            childNodeRepeatedNonTerminalNode = callback(childNode);

      if (!childNodeRepeatedNonTerminalNode) {
        break;
      }

      const repeatedNonTerminalNode = childNode,  ///
            repeatedNonTerminalNodeRuleName = repeatedNonTerminalNode.getRuleName();

      if (ruleName === null) {
        ruleName = repeatedNonTerminalNodeRuleName; ///
      } else {
        if (repeatedNonTerminalNodeRuleName !== ruleName) {
          break;
        }
      }

      repeatedNonTerminalNodes.unshift(repeatedNonTerminalNode);
    }
  }

  return repeatedNonTerminalNodes;
}
