"use strict";

import { arrayUtilities } from "necessary";

const { first, tail } = arrayUtilities;

export function rewriteNonTerminalNode(nonTerminalNode, state) {
  let childNodes,
      precedence;

  childNodes = nonTerminalNode.removeChildNodes();

  precedence = nonTerminalNode.getPrecedence();

  const opacity = nonTerminalNode.getOpacity(),
        ruleName = nonTerminalNode.getRuleName(),
        foldedNonTerminalNode = foldNonTerminalNode(ruleName, childNodes, precedence, opacity, state);

  childNodes = foldedNonTerminalNode.removeChildNodes();

  precedence = foldedNonTerminalNode.getPrecedence();

  nonTerminalNode.addChildNodes(childNodes);

  nonTerminalNode.setPrecedence(precedence);
}

function foldNonTerminalNode(ruleName, childNodes, precedence, opacity, state) {
  const firstChildNode = first(childNodes),
        childNodesTail = tail(childNodes),
        reducedNode = firstChildNode, ///
        repeatedNodes = childNodesTail,
        accumulatorNode = accumulatorNodeFromReducedNode(reducedNode, ruleName, state),
        foldedNonTerminalNode = foldRepeatedNodes(accumulatorNode, repeatedNodes, ruleName, opacity, state);

  return foldedNonTerminalNode;
}

function foldRepeatedNodes(accumulatorNode, repeatedNodes, ruleName, opacity, state) {
  let foldedNonTerminalNode;

  const repeatedNodesLength = repeatedNodes.length;

  if (repeatedNodesLength === 0) {
    foldedNonTerminalNode = accumulatorNode;  ///
  } else {
    const firstRepeatedNode = first(repeatedNodes),
          firstRepeatedNodeChildNodes = firstRepeatedNode.removeChildNodes(),
          childNodes = [
            accumulatorNode,
            ...firstRepeatedNodeChildNodes
          ],
          precedence = firstRepeatedNode.getPrecedence(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    accumulatorNode = nonTerminalNode; ///

    const repeatedNodesTail = tail(repeatedNodes);

    repeatedNodes = repeatedNodesTail;  ///

    foldedNonTerminalNode = foldRepeatedNodes(accumulatorNode, repeatedNodes, ruleName, opacity, state);
  }

  return foldedNonTerminalNode;
}

function accumulatorNodeFromReducedNode(reducedNode, ruleName, state) {
  const opacity = reducedNode.getOpacity(),
        precedence = reducedNode.getPrecedence(),
        childNodes = reducedNode.removeChildNodes(),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
        nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity),
        accumulatorNode = nonTerminalNode; ///

  return accumulatorNode;
}
