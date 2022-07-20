"use strict";

import { arrayUtilities } from "necessary";

import ReducedNode from "./node/reduced";
import RepeatedNode from "./node/repeated";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName, repeatedRuleNameFromRuleName } from "./utilities/ruleName";

const { first, unshift } = arrayUtilities;

export default function rewriteNodes(node) {
  rearrangeNode(node);

  removeRepeatedNodes(node);

  renameReducedNodesAndRepeatedNodes(node);
}

function rearrangeNode(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    let childNodes;

    const nonTerminalNode = node; ///

    childNodes = nonTerminalNode.getChildNodes();

    rearrangeChildNodes(childNodes);

    childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      rearrangeNode(node);
    });
  }
}

function removeRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    let childNodes;

    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName();

    childNodes = nonTerminalNode.getChildNodes();

    const childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            childNode = firstChildNode,
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const repeatedNode = childNode, ///
              repeatedNodeChildNodes = repeatedNode.getChildNodes(),
              start = 0,
              deleteCount = 1;

        childNodes.splice(start, deleteCount, ...repeatedNodeChildNodes);
      }
    }

    childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode, index) => {
      const node = childNode; ///

      removeRepeatedNodes(node);

      const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const repeatedNode = childNode, ///
              repeatedNodeRuleName = repeatedNode.getRuleName(),
              repeatedRuleName = repeatedRuleNameFromRuleName(ruleName);

        if (repeatedNodeRuleName === repeatedRuleName) {
          const repeatedNodeChildNodes = repeatedNode.getChildNodes(),
                repeatedNodeChildNodesLength = repeatedNodeChildNodes.length;

          if (repeatedNodeChildNodesLength === 1) {
            const start = index,
                  deleteCount = 1;

            childNodes.splice(start, deleteCount, ...repeatedNodeChildNodes);
          }
        }
      }
    });
  }
}

function rearrangeChildNodes(childNodes) {
  let index = 0,
      childNodesLength = childNodes.length;

  while (index < childNodesLength) {
    if (index > 0) {
      const childNode = childNodes[ index ],
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const start = 0,
              deleteCount = index,  ///
              deletedChildNodes = childNodes.splice(start, deleteCount);

        const repeatedNode = childNode, ///
              repeatedNodeChildNodes = repeatedNode.getChildNodes();

        unshift(repeatedNodeChildNodes, deletedChildNodes);

        childNodesLength = childNodes.length;

        index = -1;
      }
    }

    index++;
  }
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
