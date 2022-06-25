"use strict";

import ReducedNode from "./node/reduced";
import RepeatedNode from "./node/repeated";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName, doesReducedRuleNameMatchRuleName } from "./utilities/ruleName";

export default function removeOrRenameIntermediateNodes(node) {
  removeOrRenameReducedNodes(node);

  renameRepeatedNodes(node);
}

function renameRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node,
          childNodes = nonTerminalNode.getChildNodes();

    childNodes.forEach((childNode) => {
      const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

      if (childNodeRepeatedNode) {
        const repeatedNode = childNode, ///
              repeatedNodeRuleName = repeatedNode.getRuleName(),
              repeatedRuleName = repeatedNodeRuleName,  ///
              ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

        childNode.setRuleName(ruleName);
      }

      renameRepeatedNodes(childNode);
    })
  }
}

function removeOrRenameReducedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName();

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeOrRenameReducedChildNodes(childNodes, ruleName);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

function removeOrRenameReducedChildNodes(childNodes, ruleName) {
  const childNodesLength = childNodes.length;

  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeReducedNode = (childNode instanceof ReducedNode);

    if (childNodeReducedNode) {
      const reducedNode = childNode, ///
            reducedNodeRuleName = reducedNode.getRuleName(),
            reducedRuleName = reducedNodeRuleName,  ///
            reducedRuleNameMatchesRuleName = doesReducedRuleNameMatchRuleName(reducedRuleName, ruleName);

      if (reducedRuleNameMatchesRuleName) {
        if (childNodesLength > 1) {
          const ruleName = ruleNameFromReducedRuleName(reducedRuleName);

          childNode.setRuleName(ruleName);

          removeOrRenameReducedNodes(childNode);

          childNodes.push(childNode);
        } else {
          let childNodeChildNodes = childNode.getChildNodes();

          childNodeChildNodes = removeOrRenameReducedChildNodes(childNodeChildNodes);

          childNodes = childNodes.concat(childNodeChildNodes);
        }
      } else {
        const ruleName = ruleNameFromReducedRuleName(reducedRuleName);

        childNode.setRuleName(ruleName);

        removeOrRenameReducedNodes(childNode);

        childNodes.push(childNode);
      }
    } else {
      removeOrRenameReducedNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;
}
