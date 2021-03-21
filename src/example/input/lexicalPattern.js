"use strict";

import withStyle from "easy-with-style";  ///

import { Input } from "easy";

class LexicalPatternInput extends Input {
  getLexicalPattern() {
    const value = this.getValue(),
          lexicalPattern = value; ///

    return lexicalPattern;
  }

  setLexicalPattern(lexicalPattern) {
    const value = lexicalPattern; ///

    this.setValue(value);
  }

  parentContext() {
    const getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this);

    return ({
      getLexicalPattern,
      setLexicalPattern
    });
  }

  static defaultProperties = {
    className: "lexical-pattern",
    spellCheck: "false"
  };
}

export default withStyle(LexicalPatternInput)`

  border: 1px solid darkgrey;
  padding: 0.25rem;
  font-size: 1.2rem;
  font-family: monospace;
  
`;
