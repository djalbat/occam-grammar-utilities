"use strict";

import withStyle from "easy-with-style";  ///

import { Checkbox } from "easy";

class RemoveOrRenameReducedNodesCheckbox extends Checkbox {
  parentContext() {
    const isRemoveOrRenameReducedNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isRemoveOrRenameReducedNodesCheckboxChecked
    });
  }

  static defaultProperties = {
    className: "remove-or-rename-reduced-nodes",
    spellCheck: "false"
  };
}

export default withStyle(RemoveOrRenameReducedNodesCheckbox)`

  zoom: 1.5;
  margin-right: 0.5rem;
  vertical-align: bottom;
  
`;
