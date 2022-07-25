"use strict";

import { arrayUtilities } from "necessary";
import { EpsilonNode, NonTerminalNode } from "occam-parsers";

import DirectlyReducedNode from "./node/reduced/directly";
import DirectlyRepeatedNode from "./node/repeated/directly";
import IndirectlyReducedNode from "./node/reduced/indirectly";
import IndirectlyRepeatedNode from "./node/repeated/indirectly";

import { ruleNameFromReducedRuleName, ruleNameFromRepeatedRuleName } from "./utilities/ruleName";

const { push, last, first, front, filter, forwardsSome } = arrayUtilities;

export default function rewriteNodes(node) {
  rewriteRepeatedNodes(node);

  rewriteReducedNodes(node);

  removeEpsilonNodes(node);
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

function rewriteReducedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          nonTerminalNodeIndirectlyReducedNode = (nonTerminalNode instanceof IndirectlyReducedNode);

    if (nonTerminalNodeIndirectlyReducedNode) {
      const indirectlyReducedNode = nonTerminalNode,  ///
            indirectlyReducedNodeRuleName = indirectlyReducedNode.getRuleName(),
            reducedRuleName = indirectlyReducedNodeRuleName,  ///
            ruleName = ruleNameFromReducedRuleName(reducedRuleName);

      indirectlyReducedNode.setRuleName(ruleName);
    }

    const firstChildNode = first(childNodes),
          firstChildNodeDirectlyReducedNode = (firstChildNode instanceof DirectlyReducedNode);

    if (firstChildNodeDirectlyReducedNode) {
      const directlyReducedNode = firstChildNode,  ///
            start = 0,
            deleteCount = 1,
            directlyReducedNodeChildNodes = directlyReducedNode.getChildNodes();

      childNodes.splice(start, deleteCount, ...directlyReducedNodeChildNodes);
    }

    childNodes.forEach((childNode) => {
      const node = childNode;

      rewriteReducedNodes(node);
    });
  }
}

function rewriteRepeatedNodes(node) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          lastChildNode = last(childNodes),
          lastChildNodeDirectlyRepeatedNode = (lastChildNode instanceof DirectlyRepeatedNode),
          lastChildNodeIndirectlyRepeatedNode = (lastChildNode instanceof IndirectlyRepeatedNode);

    if (lastChildNodeDirectlyRepeatedNode) {
      const directlyRepeatedNode = lastChildNode, ///
            directlyRepeatedNodeRuleName = directlyRepeatedNode.getRuleName(),
            repeatedRuleName = directlyRepeatedNodeRuleName,  ///
            ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName),
            childNodesFront = front(childNodes),
            start = 0,
            deleteCount = Infinity,
            newNonTerminalNode = new NonTerminalNode(ruleName, childNodesFront),
            directlyRepeatedNodeChildNodes = directlyRepeatedNode.getChildNodes();

      childNodes.splice(start, deleteCount, newNonTerminalNode, ...directlyRepeatedNodeChildNodes);
    }

    if (lastChildNodeIndirectlyRepeatedNode) {
      const firstChildNode = first(childNodes),
            directlyReducedNode = firstChildNode, ///
            indirectlyRepeatedNode = lastChildNode, ///
            directlyReducedNodeRuleName = directlyReducedNode.getRuleName(),
            reducedRuleName = directlyReducedNodeRuleName,  ///
            ruleName = ruleNameFromReducedRuleName(reducedRuleName),
            childNodesLength = childNodes.length,
            start = 0,
            deleteCount = childNodesLength - 1,
            newNonTerminalNodeChildNodes = childNodes.splice(start, deleteCount),
            indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
            newNonTerminalNode = new NonTerminalNode(ruleName, newNonTerminalNodeChildNodes);

      childNodes.pop();

      push(childNodes, [
         newNonTerminalNode,
        ...indirectlyRepeatedNodeChildNodes
      ]);
    }

    forwardsSome(childNodes, (childNode, index) => {
      const childNodeIndirectlyRepeatedNode = (childNode instanceof IndirectlyRepeatedNode);

      if (childNodeIndirectlyRepeatedNode) {
        const indirectlyRepeatedNode = childNode, ///
              indirectlyRepeatedNodeChildNodes = indirectlyRepeatedNode.getChildNodes(),
              indirectlyRepeatedNodeRuleName = indirectlyRepeatedNode.getRuleName(),
              repeatedRuleName = indirectlyRepeatedNodeRuleName,  ///
              ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName),
              start = 0,
              deleteCount = index,  ///
              leadingChildNodes = childNodes.splice(start, deleteCount),
              newNonTerminalNodeChildNodes = [
                ...leadingChildNodes,
                ...indirectlyRepeatedNodeChildNodes
              ],
              newNonTerminalNode = new NonTerminalNode(ruleName, newNonTerminalNodeChildNodes);

        childNodes.shift();

        childNodes.unshift(newNonTerminalNode);

        return true;
      }
    });

    childNodes.forEach((childNode) => {
      const node = childNode; ///

      rewriteRepeatedNodes(node);
    });
  }
}
