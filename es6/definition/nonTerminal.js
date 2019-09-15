'use strict';

class NonTerminalDefinition {
  constructor(definition, rule) {
    this.definition = definition;

    this.rule = rule;
  }

  getDefinition() {
    return this.definition;
  }

  getRule() {
    return this.rule;
  }

  getParts() {
    let parts = this.definition.getParts();

    parts = parts.reduce((parts, part) => {
      const partNonTerminalPart = part.isNonTerminalPart();

      if (partNonTerminalPart) {
        parts.push(part);
      }

      return parts;
    });

    return parts;
  }

  forEachPart(callback) {
    const parts = this.getParts();

    parts.forEach(callback);
  }

  static fromDefinitionAndRule(definition, rule) {
    let nonTerminalDefinition = null;

    const parts = definition.getParts(),
          nonTerminal = parts.some((part) => {
            const partNonTerminalPart = part.isNonTerminalPart();

            if (partNonTerminalPart) {
              return true;
            }
          });

    if (nonTerminal) {
      nonTerminalDefinition = new NonTerminalDefinition(definition, rule);
    }

    return nonTerminalDefinition;
  }
}

module.exports = NonTerminalDefinition;
