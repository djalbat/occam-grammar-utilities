"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntriesString = value, ///
          lexicalEntries = JSON.parse(lexicalEntriesString);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const lexicalEntriesString = JSON.stringify(lexicalEntries, null, "  "),
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

  height: 24rem;
  
`;
