"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "../node/reduced";
import RewrittenNode from "../node/rewritten";
import DirectlyRepeatedNode from "../node/repeated/directly";
import IndirectlyRepeatedNode from "../node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromIndirectlyRepeatedRuleName } from "../utilities/ruleName";

const { front, first, last, push, filter, unshift, find, backwardsSome } = arrayUtilities;

export function rewriteIndirectlyRepeatedNodes(nonTerminalNode) {
  let parentNode = nonTerminalNode; ///

  const childNodes = nonTerminalNode.getChildNodes(),
        indirectlyRepeatedNodes = find(childNodes, (childNode) => {
          const childNodeIndirectlyRepeatedNode = (childNode instanceof IndirectlyRepeatedNode);

          if (childNodeIndirectlyRepeatedNode) {
            return true;
          }
        });

  backwardsSome(indirectlyRepeatedNodes, (indirectlyRepeatedNode) => {
    const childNodes = parentNode.getChildNodes(),
          frontChildNodes = front(childNodes),
          indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
          indirectlyRepeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
          ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName),
          rewrittenNode = RewrittenNode.fromRuleNameAndChildNodes(ruleName, frontChildNodes), ///
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
  const childNodes = nonTerminalNode.getChildNodes(),
        directlyRepeatedNodes = find(childNodes, (childNode) => {
          const childNodeDirectlyRepeatedNode = (childNode instanceof DirectlyRepeatedNode);

          if (childNodeDirectlyRepeatedNode) {
            return true;
          }
        }),
        directlyRepeatedNodesLength = directlyRepeatedNodes.length;

  if (directlyRepeatedNodesLength > 0) {
    const parentNode = nonTerminalNode, ///
          replacedChildNodes = directlyRepeatedNodes, ///
          replacementChildNodes = [];

    directlyRepeatedNodes.forEach((directlyRepeatedNodes) => {
      const directlyRepeatedNodesChildNodes = directlyRepeatedNodes.getChildNodes();

      unshift(replacementChildNodes, directlyRepeatedNodesChildNodes);
    });

    replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes);
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

function replaceAllChildNodes(parentNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        start = 0,
        deleteCount = Infinity;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNodes(parentNode, replacedChildNodes, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        lastReplacedChildNode = last(replacedChildNodes),
        firstReplacedChildNode = first(replacedChildNodes),
        firstIndex = childNodes.indexOf(firstReplacedChildNode),
        lastIndex = childNodes.indexOf(lastReplacedChildNode),
        start = firstIndex, ///
        deleteCount = lastIndex - firstIndex + 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function replaceChildNode(parentNode, replacedChildNode, replacementChildNodes) {
  const childNodes = parentNode.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}
