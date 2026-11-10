"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";
import simpliciationMixins from  "../mixins/simpliciation";

class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    nonTerminalNode = this.createNonTerminalNode(state);

    nonTerminalNode = this.rewriteNonTerminalNode(nonTerminalNode, state);  ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.liftRewrittenNode();
  }

  liftRewrittenNode() {
    const singleChildNode = this.getSingleChildNode(),
          rewrittenNode = singleChildNode,  //
          precedence = rewrittenNode.getPrecedence(),
          childNodes = rewrittenNode.removeChildNodes(),
          replacedChildNode = rewrittenNode, ///
          replacementChildNodes = childNodes; ///

    this.setPrecedence(precedence);

    this.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  createNonTerminalNode(state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName();

    state = State.fromRuleNameAndOpacity(ruleName, opacity, state);  ///

    const replacementNode = this.clone(); ///

    replacementNode.simplify(state);

    const precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    return nonTerminalNode;
  }

  rewriteNonTerminalNode(nonTerminalNode, state) {
    let relevantNode;

    const node = nonTerminalNode; ///

    relevantNode = findRelevantNode(node);

    if (relevantNode === nonTerminalNode) {
      nonTerminalNode = nonTerminalNode.rewrite(state); ///
    } else {
      const oldRelevantNode = relevantNode, ///
            newRelevantNode = relevantNode.rewrite(state);

      if (newRelevantNode !== null) {
        const parentNode = oldRelevantNode.getParentNode(),
              replacedNode = oldRelevantNode,  ///
              replacementNodes = [
                newRelevantNode
              ];

        parentNode.replaceChildNode(replacedNode, replacementNodes);
      } else {
        nonTerminalNode = null;
      }
    }

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReplacementNode.prototype, simpliciationMixins);

export default ReplacementNode;

function findRelevantNode(node) {
  let relevantNode;

  const nodeRelevant = node.isRelevant();

  if (nodeRelevant) {
    relevantNode = node;  ///
  } else {
    const singleChildNode = node.getSingleChildNode();

    node = singleChildNode; ///

    relevantNode = findRelevantNode(node);
  }

  return relevantNode;
}
