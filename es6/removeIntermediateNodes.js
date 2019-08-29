'use strict';

const NonRecursiveNode = require('./node/nonRecursive'),
      ruleNameUtilities = require('./utilities/ruleName'),
      RightRecursiveNode = require('./node/rightRecursive');

const { ruleNameFromNonRecursiveRuleName, checkNonRecursiveRuleNameMatchesRuleName } = ruleNameUtilities;

function removeIntermediateNodes(node) {
  removeRightRecursiveNodes(node);

  removeOrRenameNonRecursiveNodes(node);
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

function removeOrRenameNonRecursiveNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName();

    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = removeOrRenameNonRecursiveChildNodes(childNodes, ruleName);

    nonTerminalNode.setChildNodes(childNodes)
  }
}

function removeOrRenameNonRecursiveChildNodes(childNodes, ruleName) {
  childNodes = childNodes.reduce((childNodes, childNode) => {
    const childNodeNonRecursiveNode = (childNode instanceof NonRecursiveNode);

    if (childNodeNonRecursiveNode) {
      const nonRecursiveNode = childNode, ///
            nonRecursiveNodeRuleName = nonRecursiveNode.getRuleName(),
            nonRecursiveRuleName = nonRecursiveNodeRuleName,
            nonRecursiveRuleNameMatchesRuleName = checkNonRecursiveRuleNameMatchesRuleName(nonRecursiveRuleName, ruleName);

      if (nonRecursiveRuleNameMatchesRuleName) {
        let childNodeChildNodes = childNode.getChildNodes();

        childNodeChildNodes = removeOrRenameNonRecursiveChildNodes(childNodeChildNodes);

        childNodes = childNodes.concat(childNodeChildNodes);
      } else {
        const ruleName = ruleNameFromNonRecursiveRuleName(nonRecursiveRuleName);

        childNode.setRuleName(ruleName);

        removeOrRenameNonRecursiveNodes(childNode);

        childNodes.push(childNode);
      }
    } else {
      removeOrRenameNonRecursiveNodes(childNode);

      childNodes.push(childNode);
    }

    return childNodes;
  }, []);

  return childNodes;

}
