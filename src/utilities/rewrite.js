"use strict";

import { arrayUtilities } from "necessary";

import RepeatedNode from "../node/repeated";

import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

const { push } = arrayUtilities;

export function rewriteRepeatedNodes(nonTerminalNode, state) {
  let directlyRepeatedNodesReplaced;

  directlyRepeatedNodesReplaced = replaceRepeatedNodes(nonTerminalNode);

  while (directlyRepeatedNodesReplaced) {
    directlyRepeatedNodesReplaced = replaceRepeatedNodes(nonTerminalNode);
  }
}

export function rewriteReducedChildNode(nonTerminalNode, state) {
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

    parentNode.setPrecedence(precedence);
  } else {
    const NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity),
          replacementChildNode = nonTerminalNode; ///

    replacementChildNodes = [
      replacementChildNode
    ];
  }

  parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
}

function _findRepeatedNodes(nonTerminalNode, RepeatedNode) {
  let repeatedNodes = [];

  let endIndex = null,
      startIndex = null;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    const childNodeRepeatedNode = RepeatedNode.prototype.isPrototypeOf(childNode);

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

function findRepeatedNodes(nonTerminalNode) {
  const directlyRepeatedNodes = findRepeatedNodes(nonTerminalNode, RepeatedNode);

  return directlyRepeatedNodes;
}

function replaceRepeatedNodes(nonTerminalNode) {
  let directlyRepeatedNodesReplaced = false;

  const directlyRepeatedNodes = findRepeatedNodes(nonTerminalNode),
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
