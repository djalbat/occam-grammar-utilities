'use strict';

const ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveNode = require('./node/rightRecursive'),
      NonLeftRecursiveNode = require('./node/nonLeftRecursive');

const { ruleNameFromNonLeftRecursiveRuleName, checkNonLeftRecursiveRuleNameMatchesRuleName } = ruleNameUtilities;

function removeIntermediateNodes(node) {
  removeOrRenameNonLeftRecursiveNodes(node);

  removeRightRecursiveNodes(node);
}

module.exports = removeIntermediateNodes;

function removeRightRecursiveNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node; ///

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeRightRecursiveChildNodes(childNodes);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

function removeRightRecursiveChildNodes(childNodes) {
  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeRightRecursiveNode = (childNode instanceof RightRecursiveNode);

    if (childNodeRightRecursiveNode) {
      let childNodeChildNodes = childNode.getChildNodes();

      childNodeChildNodes = removeRightRecursiveChildNodes(childNodeChildNodes);

      childNodes = childNodes.concat(childNodeChildNodes);
    } else {
      removeRightRecursiveNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;
}

function removeOrRenameNonLeftRecursiveNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName();

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeOrRenameNonLeftRecursiveChildNodes(childNodes, ruleName);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

function removeOrRenameNonLeftRecursiveChildNodes(childNodes, ruleName) {
  const childNodesLength = childNodes.length;

  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeNonLeftRecursiveNode = (childNode instanceof NonLeftRecursiveNode);

    if (childNodeNonLeftRecursiveNode) {
      const nonLeftRecursiveNode = childNode, ///
            nonLeftRecursiveNodeRuleName = nonLeftRecursiveNode.getRuleName(),
            nonLeftRecursiveRuleName = nonLeftRecursiveNodeRuleName,  ///
            nonLeftRecursiveRuleNameMatchesRuleName = checkNonLeftRecursiveRuleNameMatchesRuleName(nonLeftRecursiveRuleName, ruleName);

      if (nonLeftRecursiveRuleNameMatchesRuleName) {
        if (childNodesLength > 1) {
          const ruleName = ruleNameFromNonLeftRecursiveRuleName(nonLeftRecursiveRuleName);

          childNode.setRuleName(ruleName);

          removeOrRenameNonLeftRecursiveNodes(childNode);

          childNodes.push(childNode);
        } else {
          let childNodeChildNodes = childNode.getChildNodes();

          childNodeChildNodes = removeOrRenameNonLeftRecursiveChildNodes(childNodeChildNodes);

          childNodes = childNodes.concat(childNodeChildNodes);
        }
      } else {
        const ruleName = ruleNameFromNonLeftRecursiveRuleName(nonLeftRecursiveRuleName);

        childNode.setRuleName(ruleName);

        removeOrRenameNonLeftRecursiveNodes(childNode);

        childNodes.push(childNode);
      }
    } else {
      removeOrRenameNonLeftRecursiveNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;
}
