"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

class RewriteNodeCheckbox extends Checkbox {
  parentContext() {
    const isRewriteNodeCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRewriteNodeCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "rewrite-node",
    spellCheck: "false"
  };
}

export default withStyle(RewriteNodeCheckbox)`

  zoom: 1.5;
  margin-right: 0.5rem;
  vertical-align: bottom;
  
`;
