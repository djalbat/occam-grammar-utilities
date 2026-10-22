"use strict";

export default class State {
  constructor(replacementNode, NonTerminalNode) {
    this.replacementNode = replacementNode;
    this.NonTerminalNode = NonTerminalNode;
  }

  getReplacementNode() {
    return this.replacementNode;
  }

  getNonTerminalNode() {
    return this.NonTerminalNode;
  }

  getRuleName() { return this.replacementNode.getRuleName(); }

  getOpacity() { return this.replacementNode.getOpacity(); }

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
