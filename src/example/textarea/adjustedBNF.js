"use strict";

import Textarea from "../textarea";

export default class AdjustedBNFTextarea extends Textarea {
  getAdjustedBNF() {
    const value = this.getValue(),
          adjustedBNF = value; ///

    return adjustedBNF;
  }

  setAdjustedBNF(adjustedBNF) {
    const value = adjustedBNF;  ///

    this.setValue(value);
  }

  clearAdjustedBNF() {
    const value = "";

    this.setValue(value);
  }

  parentContext() {
    const getAdjustedBNF = this.getAdjustedBNF.bind(this),
          setAdjustedBNF = this.setAdjustedBNF.bind(this),
          clearAdjustedBNF = this.clearAdjustedBNF.bind(this);

    return ({
      getAdjustedBNF,
      setAdjustedBNF,
      clearAdjustedBNF
    });
  }

  static defaultProperties = {
    className: "adjusted-bnf",
    spellCheck: "false",
    readOnly: false
  };
}
