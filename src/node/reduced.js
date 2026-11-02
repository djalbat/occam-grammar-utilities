"use strict";

import NonTerminalNode from "../nonTerminalNode";
import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

class ReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    const single = this.isSingle();

    single ?
      this.lift() :
        this.overwrite(state);
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const reducedRuleName = ruleName; ///

    ruleName = ruleNameFromReducedRuleName(reducedRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReducedNode.prototype, simpliciationMixins);

export default ReducedNode;
