"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { ruleNameFromRewrittenRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state, topmost = false) {
    this.simplifyChildNodes(state);

    const nonTerminalNode = this.overwrite(state);

    if (topmost) {
      nonTerminalNode.lift();
    }
  }

  overwrite(state) {
    const opacity = this.getOpacity(),
          parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes();

    let ruleName;

    ruleName = this.getRuleName();

    const rewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromRewrittenRuleName(rewrittenRuleName);  ///

    const nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    return nonTerminalNode;
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
