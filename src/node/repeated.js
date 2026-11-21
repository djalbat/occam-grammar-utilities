"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { simplifyChildNodes } from "../utilities/simplification";
import { ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(alternate, state) {
    const terminate = true;

    if (alternate) {
      const remainingChildNodes = this.flatten();

      simplifyChildNodes(remainingChildNodes, alternate, state);
    } else {
      const remainingChildNodes = this.rotate();

      this.overwrite(state);

      simplifyChildNodes(remainingChildNodes, alternate, state);
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

Object.assign(RepeatedNode.prototype, simpliciationMixins);

export default RepeatedNode;
