"use strict";

export default class State {
  constructor(replacementNode, NonTerminalNode) {
    this.replacemenetNode = replacementNode;
    this.NonTerminalNode = NonTerminalNode;
  }

  getReplacemenetNode() {
    return this.replacemenetNode;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
  }

  getRuleName() { return this.replacemenetNode.getRuleName(); }

  getOpacity() { return this.replacemenetNode.getOpacity(); }

  createNonTerminalNode(childNodes, precedence) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromReplacementNode(replacementNode, state) {
    const ruleName = replacementNode.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName);

    state = new State(replacementNode, NonTerminalNode);  ///

    return state;
  }
}
