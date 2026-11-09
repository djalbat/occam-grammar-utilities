"use strict";

import { Definition } from "occam-parsers";

import { partsfromDefinition } from "../../utilities/definition";

export default class IncidentallyRewrittenDefinition extends Definition {
  static fromDefinition(definition, context) {
    const parts = partsfromDefinition(definition, context),
          precedence = definition.getPrecedence(),
          incidentallyRewrittenDefinition = new IncidentallyRewrittenDefinition(parts, precedence);

    return incidentallyRewrittenDefinition;
  }
}

export function incidentallyRewrittenDefinitionsFromDefinitions(definitions, context) {
  const incidentallyRewrittenDefinitions = definitions.map((definition) => {
    const incidentallyRewrittenDefinition = IncidentallyRewrittenDefinition.fromDefinition(definition, context);

    return incidentallyRewrittenDefinition;
  });

  return incidentallyRewrittenDefinitions;
}
