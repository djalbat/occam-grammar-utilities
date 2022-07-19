"use strict";

import { arrayUtilities } from "necessary";

import ReducedNode from "./node/reduced";
import RepeatedNode from "./node/repeated";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName, repeatedRuleNameFromRuleName } from "./utilities/ruleName";

const { first, unshift } = arrayUtilities;

export default function rewriteNodes(node) {
  rearrangeNodes(node);

  removeRepeatedNodes(node);

  renameReducedNodesAndRepeatedNodes(node);
}

function rearrangeNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      rearrangeNodes(node);
    });

    let rearranged = rearrangeChildNodes(childNodes);

    while (rearranged) {
      childNodes = nonTerminalNode.getChildNodes();

      rearranged = rearrangeChildNodes(childNodes)
    }
  }
}

function removeRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      removeRepeatedNodes(node);
    });

    const childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            childNode = firstChildNode,
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const ruleName = node.getRuleName(),
              repeatedNode = childNode,
              repeatedNodeRuleName = repeatedNode.getRuleName(),
              repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

        if (repeatedNodeRuleName === repeatedRuleName) {
          const repeatedNodeChildNodes = repeatedNode.getChildNodes(),
                start = 0,
                deleteCount = 1;

          childNodes.splice(start, deleteCount, ...repeatedNodeChildNodes);
        }
      }
    }
  }
}

function rearrangeChildNodes(childNodes) {
  const rearranged = childNodes.some((childNode, index) => {
    if (index > 0) {
      const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const start = 0,
              deleteCount = index;  ///

        childNodes = childNodes.splice(start, deleteCount);

        const repeatedNode = childNode, ///
              repeatedNodeChildNodes = repeatedNode.getChildNodes();

        unshift(repeatedNodeChildNodes, childNodes);

        return true;
      }
    }
  });

  return rearranged;
}

function renameReducedNodesAndRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeReducedNode = (childNode instanceof ReducedNode),
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (false) {
        ///
      } else if (childNodeReducedNode) {
        const reducedNode = childNode,  ///
              reducedNodeRuleName = reducedNode.getRuleName(),
              reducedRuleName = reducedNodeRuleName,  ///
              ruleName = ruleNameFromReducedRuleName(reducedRuleName);

        reducedNode.setRuleName(ruleName);
      } else if (childNodeRepeatedNode) {
        const repeatedNode = childNode,  ///
              repeatedNodeRuleName = repeatedNode.getRuleName(),
              repeatedRuleName = repeatedNodeRuleName,  ///
              ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

        repeatedNode.setRuleName(ruleName);
      }
      renameReducedNodesAndRepeatedNodes(childNode);
    });
  }
}
