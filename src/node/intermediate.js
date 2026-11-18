"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { simplifyChildNodes } from "../utilities/simplification";
import { ruleNameFromIntermediateRuleName } from "../utilities/ruleName";

let count = Infinity;

class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    if (count-- === 0) {
      return;
    }

    const terminate = true,
          remainingChildNodes = this.rotate();

    simplifyChildNodes(remainingChildNodes, state);

    this.overwrite(state);

    return terminate;
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
