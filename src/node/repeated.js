"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromRepeatedRuleName } from "../utilities/ruleName";

let count = Infinity;

class RepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    if (count-- === 0) {
      return;
    }

    const remamingChildNodes = this.rotate();

    simplifyChildNodes(remamingChildNodes, state);

    this.overwrite(state);

    const terminate = true;

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

function simplifyChildNodes(childNodes, state) {
  childNodes.some((childNode) => {
    const terminate = childNode.simplify(state);

    if (terminate) {
      return true;
    }
  });
}
