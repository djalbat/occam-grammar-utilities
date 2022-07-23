"use strict";

import { EpsilonNode } from "occam-parsers";
import { arrayUtilities } from "necessary";

import ReducedNode from "./node/reduced";
import RepeatedNode from "./node/repeated";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName } from "./utilities/ruleName";

const { last, first, filter, unshift, separate } = arrayUtilities;

export default function rewriteNodes(node) {
  flattenNodes(node);

  expandNodes(node);

  renameRepeatedNodes(node);

  renameReducedNodes(node);

  removeEpsilonNodes(node);

  removeSingularNodes(node);
}

function flattenNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      flattenNodes(node);
    });

    let index = 0,
        childNodesLength = childNodes.length;

    while (index < childNodesLength) {
      const childNode = childNodes[index],
            childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const repeatedNode = childNode, ///
              repeatedNodes = [],
              nonRepeatedNodes = [],
              repeatedNodeChildNodes = repeatedNode.getChildNodes(),
              lastRepeatedNodeChildNode = last(repeatedNodeChildNodes),
              lastRepeatedNodeChildNodeRepeatedNode = (lastRepeatedNodeChildNode instanceof RepeatedNode);

        if (lastRepeatedNodeChildNodeRepeatedNode) {
          separate(repeatedNodeChildNodes, repeatedNodes, nonRepeatedNodes, (repeatedNodeChildNode) => {
            const repeatedNodeChildNodeRepeatedNode = (repeatedNodeChildNode instanceof RepeatedNode);

            if (repeatedNodeChildNodeRepeatedNode) {
              return true;
            }
          });

          const nonRepeatedNodesLength = nonRepeatedNodes.length;

          if (nonRepeatedNodesLength > 0) {
            const start = index + 1,
                  deleteCount = 0,
                  repeatedNodesLength = repeatedNodes.length;

            childNodes.splice(start, deleteCount, ...repeatedNodes);

            childNodesLength = childNodes.length;

            index += repeatedNodesLength;

            const repeatedNodeChildNodes = nonRepeatedNodes;  ///

            repeatedNode.setChildNodes(repeatedNodeChildNodes);
          }
        }
      }

      index++;
    }
  }
}

function expandNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    let index = 0,
        childNodesLength = childNodes.length;

    while (index < childNodesLength) {
      if (index > 0) {
        const childNode = childNodes[ index ],
              childNodeRepeatedNode = (childNode instanceof RepeatedNode);

        if (childNodeRepeatedNode) {
          const start = 0,
                deleteCount = index,  ///
                repeatedNode = childNode, ///
                deletedChildNodes = childNodes.splice(start, deleteCount),
                repeatedNodeChildNodes = repeatedNode.getChildNodes();

          unshift(repeatedNodeChildNodes, deletedChildNodes);

          childNodesLength = childNodes.length;

          index = -1;
        }
      }

      index++;
    }

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      expandNodes(node);
    });
  }
}

function removeEpsilonNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    filter(childNodes, (childNode) => {
      const childNodeEpsilonNode = (childNode instanceof EpsilonNode);

      if (!childNodeEpsilonNode) {
        return true;
      }
    });

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      removeEpsilonNodes(node);
    });
  }
}

function renameReducedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeReducedNode = (childNode instanceof ReducedNode);

      if (childNodeReducedNode) {
        const reducedNode = childNode,  ///
              reducedNodeRuleName = reducedNode.getRuleName(),
              reducedRuleName = reducedNodeRuleName,  ///
              ruleName = ruleNameFromReducedRuleName(reducedRuleName);

        reducedNode.setRuleName(ruleName);
      }

      renameReducedNodes(childNode);
    });
  }
}

function renameRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const repeatedNode = childNode,  ///
              repeatedNodeRuleName = repeatedNode.getRuleName(),
              repeatedRuleName = repeatedNodeRuleName,  ///
              ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

        repeatedNode.setRuleName(ruleName);
      }

      renameRepeatedNodes(childNode);
    });
  }
}

function removeSingularNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          childNodes = nonTerminalNode.getChildNodes(),
          childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(childNodes),
            childNode = firstChildNode, ///
            childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const childNodeRuleName = childNode.getRuleName();

        if (childNodeRuleName === ruleName) {
          const singularNode = childNode, ///
                singularNodeChildNodes = singularNode.getChildNodes(),
                start = 0,
                deleteCount = 1;

          childNodes.splice(start, deleteCount, ...singularNodeChildNodes);
        }
      }
    }

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      removeSingularNodes(node);
    });
  }
}
