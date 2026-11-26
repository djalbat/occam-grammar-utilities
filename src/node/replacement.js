"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";
import restoreMixins from  "../mixins/restore";

import { restoreChildNodes } from "../utilities/restore";

class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    nonTerminalNode = this.createNonTerminalNode(state);

    nonTerminalNode = this.rewriteNonTerminalNode(nonTerminalNode, state);  ///

    return nonTerminalNode;
  }

  restore(state) {
    const alternate = false,
          childNodes = this.getChildNodes();

    restoreChildNodes(childNodes, alternate, state);

    this.liftSingleChildNode();
  }

  getBaseRuleName() {
    const baseRuleName = null;  ///

    return baseRuleName;
  }

  liftSingleChildNode() {
    const singleChildNode = this.getSingleChildNode(),
          opacity = singleChildNode.getOpacity(),
          precedence = singleChildNode.getPrecedence(),
          childNodes = singleChildNode.removeChildNodes(),
          replacedChildNode = singleChildNode, ///
          replacementChildNodes = childNodes; ///

    this.setOpacity(opacity);

    this.setPrecedence(precedence);

    this.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  createNonTerminalNode(state) {
    state = State.fromNothing(state);  ///

    const replacementNode = this.clone(); ///

    replacementNode.restore(state);

    const opacity = replacementNode.getOpacity(),
          ruleName = replacementNode.getRuleName(),
          precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  rewriteNonTerminalNode(nonTerminalNode, state) {
    let rewritableNode = findRewritableNode(nonTerminalNode);

    if (rewritableNode === null) {
      ///
    } else {
      nonTerminalNode = nonTerminalNode.mutate(rewritableNode, (rewritableNode) => {
        rewritableNode = rewritableNode.rewrite(state); ///

        return rewritableNode;
      });
    }

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReplacementNode.prototype, restoreMixins);

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
