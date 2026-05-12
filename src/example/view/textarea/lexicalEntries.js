"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    let lexicalEntries = {};

    try {
      const value = this.getValue(),
            jsonString = value, ///
            json = JSON.parse(jsonString);

      lexicalEntries = json; ///
    } catch (error) {
      ///
    }

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const json = lexicalEntries,  ///
          jsonString = JSON.stringify(json, null, 2),
          value = jsonString; ///

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

  height: 13rem;

`;
