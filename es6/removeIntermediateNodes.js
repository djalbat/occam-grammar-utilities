'use strict';

const ReducedNode = require('./node/reduced'),
      RepeatedNode = require('./node/repeated'),
      ruleNameUtilities = require('./utilities/ruleName');

const { ruleNameFromReducedRuleName, checkReducedRuleNameMatchesRuleName } = ruleNameUtilities;

function removeIntermediateNodes(node) {
  removeOrRenameReducedNodes(node);

  removeRepeatedNodes(node);
}

module.exports = removeIntermediateNodes;

function removeRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeRepeatedChildNodes(childNodes);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

function removeRepeatedChildNodes(childNodes) {
  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeRepeatedNode = (childNode instanceof RepeatedNode);

    if (childNodeRepeatedNode) {
      let childNodeChildNodes = childNode.getChildNodes();

      childNodeChildNodes = removeRepeatedChildNodes(childNodeChildNodes);

      childNodes = childNodes.concat(childNodeChildNodes);
    } else {
      removeRepeatedNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;
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
            reducedRuleNameMatchesRuleName = checkReducedRuleNameMatchesRuleName(reducedRuleName, ruleName);

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
