"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { ruleNameFromIntermediateRuleName } from "../utilities/ruleName";

let count = 1;

class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    if (count-- === 0) {
      return;
    }

    const parentNode = this.getParentNode(),
          lastChildNode = parentNode.getLastChildNode();

    lastChildNode.remove();

    const appendedNode = lastChildNode; ///

    this.appendChildNode(appendedNode);

    this.rotate();

    this.overwrite(state);

    const terminate = true;

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
