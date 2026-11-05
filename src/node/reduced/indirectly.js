"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

class IndirectlyReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.lift();
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IndirectlyReducedNode.prototype, simpliciationMixins);

export default IndirectlyReducedNode;
