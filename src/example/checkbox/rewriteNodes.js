"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

class RewriteNodesCheckbox extends Checkbox {
  parentContext() {
    const isRewriteNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRewriteNodesCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "rewrite-nodes",
    spellCheck: "false"
  };
}

export default withStyle(RewriteNodesCheckbox)`

  zoom: 1.5;
  margin-right: 0.5rem;
  vertical-align: bottom;
  
`;
