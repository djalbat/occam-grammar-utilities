"use strict";

import { NonTerminalNode } from "occam-parsers";

import State from "../state";
import simpliciationMixins from  "../mixins/simpliciation";

class ReplacementNode extends NonTerminalNode {
  rewrite(state) {
    let nonTerminalNode;

    const savedState = state, ///
          replacementNode = this.clone(); ///

    state = State.fromReplacementNode(replacementNode, state);  ///

    replacementNode.simplify(state);

    const precedence = replacementNode.getPrecedence(),
          childNodes = replacementNode.removeChildNodes();

    nonTerminalNode = state.createNonTerminalNode(childNodes, precedence);

    state = savedState; ///

    nonTerminalNode = nonTerminalNode.rewrite(state); ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.leftRewrittenNode();
  }

  leftRewrittenNode() {
    const singleChildNode = this.getSingleChildNode(),
          rewrittenNode = singleChildNode,  //
          precedence = rewrittenNode.getPrecedence(),
          childNodes = rewrittenNode.removeChildNodes(),
          replacedChildNode = rewrittenNode, ///
          replacementChildNodes = childNodes; ///

    this.setPrecedence(precedence);

    this.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReplacementNode.prototype, simpliciationMixins);

export default ReplacementNode;
