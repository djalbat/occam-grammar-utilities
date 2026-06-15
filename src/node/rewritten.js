"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNonTerminalNodeUnprecedented } from "../utilities/precedence";
import { rewriteReducedNodes, rewriteDirectlyRepeatedNodes, rewriteIndirectlyRepeatedNodes } from "../utilities/rewrite";

export default class RewrittenNode extends NonTerminalNode {
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
    let nonTerminalNode;

    const ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

    nonTerminalNode = this.clone();

    const opacity = nonTerminalNode.getOpacity(),
          childNodes = nonTerminalNode.getChildNodes(),
          precedence = nonTerminalNode.getPrecedence();

    nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence);

    console.log(">>>")

    console.log(nonTerminalNode.asParseTree(state.getTokens()).asString())

    rewriteDirectlyRepeatedNodes(nonTerminalNode, state);

    const parentNode = rewriteIndirectlyRepeatedNodes(nonTerminalNode, state);

    {
      const nonTerminalNode = parentNode; ///

      rewriteReducedNodes(nonTerminalNode, state);
    }

    console.log(nonTerminalNode.asParseTree(state.getTokens()).asString())

    console.log("<<<")

    console.log()

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
    const unprecedented = null,
          directlyRepeatedNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RewrittenNode, ruleName, childNodes, opacity, precedence, unprecedented);

    return directlyRepeatedNode;
  }
}
