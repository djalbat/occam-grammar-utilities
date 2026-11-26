"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class RewrittenBNFTextarea extends Textarea {
  getRewrittenBNF() {
    const value = this.getValue(),
          rewrittenBNF = value; ///

    return rewrittenBNF;
  }

  setRewrittenBNF(rewrittenBNF) {
    const value = rewrittenBNF;  ///

    this.setValue(value);
  }

  parentContext() {
    const getRewrittenBNF = this.getRewrittenBNF.bind(this),
          setRewrittenBNF = this.setRewrittenBNF.bind(this);

    return ({
      getRewrittenBNF,
      setRewrittenBNF
    });
  }

  static defaultProperties = {
    className: "rewritten-bnf",
    spellCheck: "false",
    readOnly: false
  };
}

export default withStyle(RewrittenBNFTextarea)`

  height: 56rem;
  
`;