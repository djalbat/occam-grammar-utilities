"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromtriviallyRewrittenRuleName } from "../../utilities/ruleName";

class TrivallyRewrittenNode extends NonTerminalNode {
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

    const trivallyRewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromtriviallyRewrittenRuleName(trivallyRewrittenRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(TrivallyRewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(TrivallyRewrittenNode.prototype, simpliciationMixins);

export default TrivallyRewrittenNode;
