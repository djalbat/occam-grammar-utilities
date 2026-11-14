"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromDirectlyRewrittenRuleName } from "../../utilities/ruleName";

class DirectlyRewrittenNode extends NonTerminalNode {
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

    const directlyRewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromDirectlyRewrittenRuleName(directlyRewrittenRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyRewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(DirectlyRewrittenNode.prototype, simpliciationMixins);

export default DirectlyRewrittenNode;
