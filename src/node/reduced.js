"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { simplifyChildNodes } from "../utilities/simplification";

class ReducedNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    const terminate = true;

    this.simplifyChildNodes(state);

    const remainingChildNodes = this.lift();

    simplifyChildNodes(remainingChildNodes, state);

    return terminate;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReducedNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(ReducedNode.prototype, simpliciationMixins);

export default ReducedNode;
