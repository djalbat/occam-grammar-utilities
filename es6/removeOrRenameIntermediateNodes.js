'use strict';

const ReducedNode = require('./node/reduced'),
      RepeatedNode = require('./node/repeated'),
      classUtilities = require('./utilities/class'),
      ruleNameUtilities = require('./utilities/ruleName');

const { isInstanceOf } = classUtilities,
      { ruleNameFromReducedRuleName, checkReducedRuleNameMatchesRuleName } = ruleNameUtilities;

function removeOrRenameIntermediateNodes(node) {
  removeOrRenameReducedNodes(node);

  removeRepeatedNodes(node);
}

module.exports = removeOrRenameIntermediateNodes;

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
    const childNodeRepeatedNode = isInstanceOf(childNode, RepeatedNode);

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
    const childNodeReducedNode = isInstanceOf(childNode, ReducedNode);

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
