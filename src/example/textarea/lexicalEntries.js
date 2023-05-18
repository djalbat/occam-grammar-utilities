"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { DOUBLE_SPACE } from "../constants";

class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    let lexicalEntries = {};

    try {
      const value = this.getValue(),
            lexicalEntriesString = value; ///

      lexicalEntries = JSON.parse(lexicalEntriesString);
    } catch (error) {
      ///
    }

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const lexicalEntriesString = JSON.stringify(lexicalEntries, null, DOUBLE_SPACE),
          value = lexicalEntriesString; ///

    this.setValue(value);
  }

  parentContext() {
    const getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

    return ({
      getLexicalEntries,
      setLexicalEntries
    });
  }

  static defaultProperties = {
    className: "lexical-entries",
    spellCheck: "false"
  };
}

export default withStyle(LexicalEntriesTextarea)`

  height: 32rem;

`;
