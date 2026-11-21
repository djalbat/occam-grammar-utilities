"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { simplifyChildNodes } from "../../utilities/simplification";
import { ruleNameFromIntermediateRepeatedRuleName } from "../../utilities/ruleName";

class IntermediateRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(alternate, state) {
    const terminate = true,
          remamingChildNodes = this.ascend();

    this.overwrite(state);

    simplifyChildNodes(remamingChildNodes, alternate, state);

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

Object.assign(IntermediateRepeatedNode.prototype, simpliciationMixins);

export default IntermediateRepeatedNode;
