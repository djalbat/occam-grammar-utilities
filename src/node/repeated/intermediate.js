"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { simplifyChildNodes } from "../../utilities/simplification";
import { ruleNameFromIntermediateRepeatedRuleName } from "../../utilities/ruleName";

let count = Infinity;

class RepeatedNodeIntermediate extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    if (count-- === 0) {
      return;
    }

    this.climb();

    const remamingChildNodes = this.ascend();

    simplifyChildNodes(remamingChildNodes, state);

    this.overwrite(state);

    const terminate = true;

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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RepeatedNodeIntermediate, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RepeatedNodeIntermediate.prototype, simpliciationMixins);

export default RepeatedNodeIntermediate;
