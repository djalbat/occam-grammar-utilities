"use strict";

import Operation from "../operation";

export default class DefinitionOperation extends Operation {
  constructor(rule, definition) {
    super();

    this.rule = rule;
    this.definition = definition;
  }

  getRule() {
    return this.rule;
  }

  getDefinition() {
    return this.definition;
  }

  compare(definitionOperation) {
    const definition = definitionOperation.getDefinition(),
          comparesTo = (this.definition === definition);

    return comparesTo;
  }
}
