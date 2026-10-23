"use strict";

export default class State {
  constructor(ruleName, opacity, parser) {
    this.ruleName = ruleName;
    this.opacity = opacity;
    this.parser = parser;
  }

  getRulename() {
    return this.ruleName;
  }

  getOpacity() {
    return this.opacity;
  }

  getParser() {
    return this.parser;
  }

  NonTerminalNodeFromRuleName(ruleName) { return this.parser.NonTerminalNodeFromRuleName(ruleName); }

  createNonTerminalNode(ruleName, childNodes, precedence, opacity) {
    if (opacity === undefined) {
      opacity = this.opacity;

      precedence = childNodes;  ///

      childNodes = ruleName;  ///

      ruleName = this.ruleName;
    }

    const NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromReplacementNode(replacementNode, state) {
    const ruleName = replacementNode.getRuleName(),
          opacity = replacementNode.getOpacity(),
          parser = state.getParser();

    state = new State(ruleName, opacity, parser);  ///

    return state;
  }
}
