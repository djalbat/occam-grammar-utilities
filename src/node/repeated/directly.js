"use strict";

import { NonTerminalNode } from "occam-parsers";

import { rewriteDirectlyRepeatedNodes } from "../../utilities/rewrite";

export default class DirectlyRepeatedNode extends NonTerminalNode {
  constructor(ruleName, parentNode, childNodes, opacity, precedence, unprecedented) {
    super(ruleName, parentNode, childNodes, opacity, precedence);

    this.unprecedented = unprecedented;
  }

  isUnprecedented() {
    const unprecedented = (this.unprecedented !== null) ?
                             this.unprecedented :
                               super.isUnprecedented();

    return unprecedented;
  }

  rewrite(state) {
    const nonTerminalNode = this.clone();

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
    const unprecedented = null,
          directlyRepeatedNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DirectlyRepeatedNode, ruleName, childNodes, opacity, precedence, unprecedented);

    return directlyRepeatedNode;
  }
}
