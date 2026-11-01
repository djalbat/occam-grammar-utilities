"use strict";

import State from "../state";
import rewriteMixins from  "../mixins/rewrite";
import NonTerminalNode from "../nonTerminalNode";

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

    this.liftSingleChildNode();
  }

  liftSingleChildNode() {
    const singleChildNode = this.getSingleChildNode(),
          precedence = singleChildNode.getPrecedence(),
          childNodes = singleChildNode.removeChildNodes(),
          replacedChildNode = singleChildNode, ///
          replacementChildNodes = childNodes; ///

    this.setPrecedence(precedence);

    this.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReplacementNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReplacementNode.prototype, rewriteMixins);

export default ReplacementNode;
