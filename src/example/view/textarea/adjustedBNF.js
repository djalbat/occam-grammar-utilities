"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

class AdjustedBNFTextarea extends Textarea {
  getAdjustedBNF() {
    const value = this.getValue(),
          adjustedBNF = value; ///

    return adjustedBNF;
  }

  setAdjustedBNF(adjustedBNF) {
    const value = adjustedBNF;  ///

    this.setValue(value);
  }

  parentContext() {
    const getAdjustedBNF = this.getAdjustedBNF.bind(this),
          setAdjustedBNF = this.setAdjustedBNF.bind(this);

    return ({
      getAdjustedBNF,
      setAdjustedBNF
    });
  }

  static defaultProperties = {
    className: "adjusted-bnf",
    spellCheck: "false",
    readOnly: false
  };
}

export default withStyle(AdjustedBNFTextarea)`

  height: 48rem;
  
`;