"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromIndirectlyRewrittenRuleName } from "../../utilities/ruleName";

class IndirectlyRewrittenNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.overwrite(state);
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const indirectlyRewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromIndirectlyRewrittenRuleName(indirectlyRewrittenRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyRewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IndirectlyRewrittenNode.prototype, simpliciationMixins);

export default IndirectlyRewrittenNode;
