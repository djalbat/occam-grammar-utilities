"use strict";

import NonTerminalNode from "../../nonTerminalNode";
import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromIndirectlyRepeatedRuleName } from "../../utilities/ruleName";

class IndirectlyRepeatedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    const parentNode = this.getParentNode(),
          removedChildNodes = parentNode.removeAllButLastChildNode(),
          addedChildNodes = removedChildNodes,  ///
          startIndex = 0;

    this.addChildNodes(addedChildNodes, startIndex);

    this.overwrite(state);
  }

  getBaseRuleName() {
    const ruleName = this.getRuleName(),
          indirectlyRepeatedRuleName = ruleName,  ///
          baseRuleName = ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName);

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyRepeatedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IndirectlyRepeatedNode.prototype, simpliciationMixins);

export default IndirectlyRepeatedNode;