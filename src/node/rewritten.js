"use strict";

import NonTerminalNode from "../nonTerminalNode";
import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromRewrittenRuleName } from "../utilities/ruleName";

class RewrittenNode extends NonTerminalNode {
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

    const rewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromRewrittenRuleName(rewrittenRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RewrittenNode.prototype, simpliciationMixins);

export default RewrittenNode;
