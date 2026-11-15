"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromDirectlyReducedRuleName } from "../../utilities/ruleName";

class DirectlyReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.lift();
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const directlyReducedRuleName = ruleName; ///

    ruleName = ruleNameFromDirectlyReducedRuleName(directlyReducedRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(DirectlyReducedNode.prototype, simpliciationMixins);

export default DirectlyReducedNode;
