"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { simplifyChildNodes } from "../../utilities/simplification";

class IndirectlyReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    const terminate = true;

    this.simplifyChildNodes(state);

    const remainingChildNodes = this.disappear();

    simplifyChildNodes(remainingChildNodes, state);

    return terminate;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IndirectlyReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IndirectlyReducedNode.prototype, simpliciationMixins);

export default IndirectlyReducedNode;
