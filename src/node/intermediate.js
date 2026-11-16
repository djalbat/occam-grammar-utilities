"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromIntermediateRuleName } from "../utilities/ruleName";

class IntermediateNode extends NonTerminalNode {
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

    const intermediateRuleName = ruleName;  ///

    ruleName = ruleNameFromIntermediateRuleName(intermediateRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IntermediateNode.prototype, simpliciationMixins);

export default IntermediateNode;