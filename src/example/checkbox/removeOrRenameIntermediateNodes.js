"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

class RemoveOrRenameIntermediateNodesCheckbox extends Checkbox {
  parentContext() {
    const isRemoveOrRenameIntermediateNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRemoveOrRenameIntermediateNodesCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "remove-or-rename-intermediate-nodes",
    spellCheck: "false"
  };
}

export default withStyle(RemoveOrRenameIntermediateNodesCheckbox)`

  zoom: 1.5;
  margin-right: 0.5rem;
  vertical-align: bottom;
  
`;
