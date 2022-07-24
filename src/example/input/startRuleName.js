"use strict";

import withStyle from "easy-with-style";  ///

import { Input } from "easy";

class StartRuleNameInput extends Input {
  getStartRuleName() {
    const value = this.getValue(),
          startRuleName = value; ///

    return startRuleName;
  }

  setStartRuleName(startRuleName) {
    const value = startRuleName; ///

    this.setValue(value);
  }

  parentContext() {
    const getStartRuleName = this.getStartRuleName.bind(this),
          setStartRuleName = this.setStartRuleName.bind(this);

    return ({
      getStartRuleName,
      setStartRuleName
    });
  }

  static defaultProperties = {
    className: "start-rule-name",
    spellCheck: "false"
  };
}

export default withStyle(StartRuleNameInput)`

  border: 1px solid darkgrey;
  padding: 0.25rem;
  font-size: 1.2rem;
  font-family: monospace;
  
`;
