"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../mixins/restore";

import { restoreChildNodes } from "../utilities/restore";
import { ruleNameFromReducedRuleName } from "../utilities/ruleName";

class ReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    const terminate = true,
          remainingChildNodes = this.liftFirst();

    this.overwrite(state);

    restoreChildNodes(remainingChildNodes, alternate, state);

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

Object.assign(ReducedNode.prototype, restoreMixins);

export default ReducedNode;
