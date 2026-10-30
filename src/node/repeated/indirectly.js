"use strict";

import NonTerminalNode from "../../nonTerminalNode";

import { ruleNameFromIndirectlyRepeatedRuleName } from "../../utilities/ruleName";

export default class IndirectlyRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    const parentNode = this.getParentNode(),
          removedChildNodes = parentNode.removeAllButLastChildNode(),
          addedChildNodes = removedChildNodes,  ///
          startIndex = 0;

    this.addChildNodes(addedChildNodes, startIndex);

    this.overwrite(state);
  }

  overwrite(state) {
    let ruleName;

    ruleName = this.getRuleName();

    const indirectlyRepeatedRuleName = ruleName;  ///

    ruleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    const opacity = this.getOpacity(),
          precedence = this.getPrecedence(),
          parentNode = this.getParentNode(),
          childNodes = this.removeChildNodes(),
          nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode,
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode) => {
      childNode.simplify(state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}
