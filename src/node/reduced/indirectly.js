"use strict";

import rewriteMixins from  "../../mixins/rewrite";
import NonTerminalNode from "../../nonTerminalNode";

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

Object.assign(IndirectlyReducedNode.prototype, rewriteMixins);

export default IndirectlyReducedNode;
