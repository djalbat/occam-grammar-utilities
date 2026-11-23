"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../../mixins/restore";

import { restoreChildNodes } from "../../utilities/restore";
import { ruleNameFromIndirectlyReducedRuleName } from "../../utilities/ruleName";

class IndirectlyReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    let terminate = true;

    const single = this.isSingle(),
          childNodes = this.overwrite(state);

    restoreChildNodes(childNodes, alternate, state);

    if (!single) {
      terminate = null;
    }

    return terminate;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const indirectlyReducedRuleName = ruleName; ///

    ruleName = ruleNameFromIndirectlyReducedRuleName(indirectlyReducedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IndirectlyReducedNode.prototype, restoreMixins);

export default IndirectlyReducedNode;
