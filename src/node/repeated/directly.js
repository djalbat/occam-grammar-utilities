"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromDirectlyRepeatedRuleName } from "../../utilities/ruleName";

class DirectlyRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  getBaseRuleName() {
    const ruleName = this.getRuleName(),
          directlyRepeatedRuleName = ruleName,  ///
          baseRuleName = ruleNameFromDirectlyRepeatedRuleName(directlyRepeatedRuleName);

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(DirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(DirectlyRepeatedNode.prototype, simpliciationMixins);

export default DirectlyRepeatedNode;