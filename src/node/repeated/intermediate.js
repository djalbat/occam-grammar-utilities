"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../../mixins/restore";

import { restoreChildNodes } from "../../utilities/restore";
import { ruleNameFromIntermediateRepeatedRuleName } from "../../utilities/ruleName";

class IntermediateRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    const terminate = true,
          remamingChildNodes = this.ascend();

    this.overwrite(state);

    restoreChildNodes(remamingChildNodes, alternate, state);

    return terminate;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const intermediateRepeatedRuleName = ruleName; ///

    ruleName = ruleNameFromIntermediateRepeatedRuleName(intermediateRepeatedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateRepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IntermediateRepeatedNode.prototype, restoreMixins);

export default IntermediateRepeatedNode;
