"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { simplifyChildNodes } from "../utilities/simplification";
import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

class ReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(alternate, state) {
    const terminate = true,
          remainingChildNodes = this.liftFirst();

    this.overwrite(state);

    simplifyChildNodes(remainingChildNodes, alternate, state);

    return terminate;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const reducedRuleName = ruleName; ///

    ruleName = ruleNameFromReducedRuleName(reducedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReducedNode.prototype, simpliciationMixins);

export default ReducedNode;
