"use strict";

import Operation from "../operation";

export default class DefinitionOperation extends Operation {
  constructor(definition) {
    super();

    this.definition = definition;
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
