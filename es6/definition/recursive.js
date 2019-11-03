'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      definitionUtilities = require('../utilities/definition');

const { first } = arrayUtilities,
      { partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { recursiveRuleNamesFromDefinition, leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition) {
    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
  }

  getImplicitlyLeftRecursiveDefinition() {
    return this.implicitlyLeftRecursiveDefinition;
  }

  getParts() { return this.definition.getParts(); }

  getFirstPart() {
    const parts = this.getParts(),
          firstPart = first(parts);

    return firstPart;
  }

  isLookAhead() {
    const firstPart = this.getFirstPart(),
          lookAhead = firstPart.isLookAhead();

    return lookAhead;
  }

  isRewritable() {
    const firstPart = this.getFirstPart(),
          firstPartType = firstPart.getType(),
          firstPartTypeRuleNamePartType = (firstPartType === RuleNamePartType),
          firstPartRuleNamePart = firstPartTypeRuleNamePartType,  ///
          rewritable = firstPartRuleNamePart; ///

    return rewritable;
  }

  isLeftRecursive() {
    const leftRecursive = (this.leftRecursiveRuleName !== null);

    return leftRecursive;
  }

  isDirectlyLeftRecursive() {
    let directlyLeftRecursive = false;

    const leftRecursive = this.isLeftRecursive();

    if (leftRecursive) {
      directlyLeftRecursive = (this.leftRecursiveRuleName === this.ruleName);
    }

    return directlyLeftRecursive;
  }

  setImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition) {
    this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    let recursiveDefinition = null;

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = (recursiveRuleNamesLength > 0);

    if (definitionRecursive) {
      const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            implicitlyLeftRecursiveDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, implicitlyLeftRecursiveDefinition);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
