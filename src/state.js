"use strict";

export default class State {
  constructor(parser) {
    this.parser = parser;
  }

  getParser() {
    return this.parser;
  }

  createNonTerminalNode(ruleName, childNodes, precedence, opacity) {
    const NonTerminalNode = this.parser.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromNothing(state) {
    const parser = state.getParser();

    state = new State(parser);  ///

    return state;
  }
}
