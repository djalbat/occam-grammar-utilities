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
          opacity = rewrittenNode.getOpacity(),
          precedence = rewrittenNode.getPrecedence(),
          childNodes = rewrittenNode.removeChildNodes(),
          replacedChildNode = rewrittenNode, ///
          replacementChildNodes = childNodes; ///

    this.setOpacity(opacity);

    this.setPrecedence(precedence);

    this.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  createNonTerminalNode(state) {
    state = State.fromNothing(state);  ///

    const replacementNode = this.clone(); ///

    replacementNode.simplify(state);

    const opacity = replacementNode.getOpacity(),
          ruleName = replacementNode.getRuleName(),
          precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  rewriteNonTerminalNode(nonTerminalNode, state) {
    let rewritableNode;

    rewritableNode = findRewritableNode(nonTerminalNode);

    if (rewritableNode === null) {
      ///
    } else if (rewritableNode === nonTerminalNode) {
      nonTerminalNode = nonTerminalNode.rewrite(state); ///
    } else {
      const parentNode = rewritableNode.getParentNode(),
            replacedNode = rewritableNode;  ///

      rewritableNode = rewritableNode.rewrite(state);

      if (rewritableNode !== null) {
        const replacementNode = rewritableNode, ///
              replacementNodes = [
                replacementNode
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

function findRewritableNode(nonTerminalNode) {
  let rewritableNode = null;

  const nodeRewritable = nonTerminalNode.isRewritable();

  if (nodeRewritable) {
    rewritableNode = nonTerminalNode;  ///
  } else {
    const singleChildNode = nonTerminalNode.getSingleChildNode();

    if (singleChildNode !== null) {
      const singleChildNodeNonTerminalNode = singleChildNode.isNonTerminalNode();

      if (singleChildNodeNonTerminalNode) {
        const nonTerminalNode = singleChildNode; ///

        rewritableNode = findRewritableNode(nonTerminalNode);
      }
    }
  }

  return rewritableNode;
}
