"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../mixins/restore";

import { restoreChildNodes } from "../utilities/restore";
import { ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    const terminate = true;

    if (alternate) {
      const remainingChildNodes = this.flatten();

      restoreChildNodes(remainingChildNodes, alternate, state);
    } else {
      const remainingChildNodes = this.rotate();

      this.overwrite(state);

      restoreChildNodes(remainingChildNodes, alternate, state);
    }

    return terminate;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const repeatedRuleName = ruleName; ///

    ruleName = ruleNameFromRepeatedRuleName(repeatedRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RepeatedNode.prototype, restoreMixins);

export default RepeatedNode;
