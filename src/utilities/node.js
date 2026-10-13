"use strict";

import { arrayUtilities } from "necessary";

const { first, tail } = arrayUtilities;

export function rewriteRewrittenNode(rewrittenNode, state) {
  let childNodes,
      precedence;

  childNodes = rewrittenNode.removeChildNodes();

  precedence = rewrittenNode.getPrecedence();

  const opacity = rewrittenNode.getOpacity(),
        ruleName = rewrittenNode.getRuleName(),
        foldedNonTerminalNode = foldNonTerminalNode(ruleName, childNodes, precedence, opacity, state);

  childNodes = foldedNonTerminalNode.removeChildNodes();

  precedence = foldedNonTerminalNode.getPrecedence();

  rewrittenNode.addChildNodes(childNodes);

  rewrittenNode.setPrecedence(precedence);
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
          repeatedNode = firstRepeatedNode, ///
          repeateNodeCut = isRepeatedNodeCut(repeatedNode),
          repeatedNodeChildNodes = repeatedNode.removeChildNodes(),
          childNodes = [
            accumulatorNode,
            ...repeatedNodeChildNodes
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

function isRepeatedNodeCut(repeatedNode) {
  const cutNodes = repeatedNode.filterChildNode((childNode) => {
          const childNodeTerminalNode = childNode.isTerminalNode();

          if (childNodeTerminalNode) {
            const terminalNode = childNode, ///
                  terminalNodeCutNode = terminalNode.isCutNode();

            if (terminalNodeCutNode) {
              return true;
            }
          }
        }),
        cutNodesLength = cutNodes.length,
        repeatedNodeCut = (cutNodesLength > 0);

  cutNodes.forEach((cutNode) => {
    const childNode = cutNode;  ///

    repeatedNode.removeChildNode(childNode);
  });

  return repeatedNodeCut;
}
