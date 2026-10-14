"use strict";

import { first, tail, move, separate } from "../utilities/array";

function foldChildNodes(leadingChildNodes, trailingChildNodes, ruleName, precedence, opacity, state) {
  let childNodes;

  const trailingChildNodesLength = trailingChildNodes.length;

  if (trailingChildNodesLength === 0) {
    childNodes = leadingChildNodes; ///
  } else {
    let rewrittenNodeIndex;

    rewrittenNodeIndex = findNodeIndex(trailingChildNodes, ruleName);

    if (rewrittenNodeIndex === -1) {
      childNodes = [
        ...leadingChildNodes,
        ...trailingChildNodes
      ];
    } else {
      move(leadingChildNodes, trailingChildNodes, rewrittenNodeIndex);

      const rewrittenNode = trailingChildNodes.shift();

      rewrittenNodeIndex = findNodeIndex(rewrittenNode, ruleName);

      if (rewrittenNodeIndex === -1) {
        leadingChildNodes.push(rewrittenNode);
      } else {
        const rewrittenNodeChildNodes = rewrittenNode.removeChildNodes(),
              firstRewrittenNodeChildNode = first(rewrittenNodeChildNodes),
              tailRewrittenNodeChildNodesTail = tail(rewrittenNodeChildNodes);

        trailingChildNodes = [  ///
          ...tailRewrittenNodeChildNodesTail,
          ...trailingChildNodes
        ];

        childNodes = [  ///
          ...leadingChildNodes,
          firstRewrittenNodeChildNode
        ];

        const NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
              nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

        leadingChildNodes = [ ///
          nonTerminalNode
        ];
      }

      childNodes = foldChildNodes(leadingChildNodes, trailingChildNodes, ruleName, precedence, opacity, state);
    }
  }

  return childNodes;
}

function foldRepeatedNodes(accumulatorNode, repeatedNodes, ruleName, opacity, state) {
  let foldedNonTerminalNode;

  const repeatedNodesLength = repeatedNodes.length;

  if (repeatedNodesLength === 0) {
    foldedNonTerminalNode = accumulatorNode;  ///
  } else {
    const firstRepeatedNode = first(repeatedNodes),
          repeatedNode = firstRepeatedNode, ///
          precedence = repeatedNode.getPrecedence(),
          cutNodeIndex = findCutNodeIndex(repeatedNode),
          repeatedNodeChildNodes = repeatedNode.removeChildNodes();

    let childNodes;

    if (cutNodeIndex > -1) {
      const leadingRepeatedNodeChildNodes = [],
            treilingRepeatedNodeChildNodes = [];

      separate(repeatedNodeChildNodes, leadingRepeatedNodeChildNodes, treilingRepeatedNodeChildNodes, cutNodeIndex);

      const leadingChildNodes = [
              accumulatorNode,
              ...leadingRepeatedNodeChildNodes
            ],
            trailingChildNodes = treilingRepeatedNodeChildNodes;  ///

      childNodes = foldChildNodes(leadingChildNodes, trailingChildNodes, ruleName, precedence, opacity, state);
    } else {
      childNodes = [
        accumulatorNode,
        ...repeatedNodeChildNodes
      ];
    }

    const NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    accumulatorNode = nonTerminalNode; ///

    const repeatedNodesTail = tail(repeatedNodes);

    repeatedNodes = repeatedNodesTail;  ///

    foldedNonTerminalNode = foldRepeatedNodes(accumulatorNode, repeatedNodes, ruleName, opacity, state);
  }

  return foldedNonTerminalNode;
}

function findNodeIndex(nodeOrNodes, ruleName) {
  let nodeIndex;

  const nodeOrNodesArray = Array.isArray(nodeOrNodes);

  if (nodeOrNodesArray) {
    const nodes = nodeOrNodes;  ///

    nodeIndex = nodes.findIndex((node) => {
      const ruleNameMatches = matchRuleName(node, ruleName);

      if (ruleNameMatches) {
        return true;
      }
    });
  } else {
    const node = nodeOrNodes; ///

    nodeIndex = -1;

    node.someChildNode((childNode, index) => {
      const node = childNode, ///
            ruleNameMatches = matchRuleName(node, ruleName);

      if (ruleNameMatches) {
        nodeIndex = 1;

        return true;
      }
    });
  }

  return nodeIndex;

  function matchRuleName(node) {
    let ruleNameMatches = false;

    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node, ///
            nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

      if (nonTerminalNodeRuleName === ruleName) {
        ruleNameMatches = true;
      }
    }

    return ruleNameMatches;
  }
}
