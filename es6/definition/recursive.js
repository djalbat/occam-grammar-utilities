'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      definitionUtilities = require('../utilities/definition');

const { first } = arrayUtilities,
      { partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { recursiveRuleNamesFromDefinition, leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(ruleName, definition, implicitDefinition, recursiveRuleNames, leftRecursiveRuleName) {
    this.ruleName = ruleName;
    this.definition = definition;
    this.implicitDefinition = implicitDefinition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
  }

  getRuleName() {
    return this.ruleName;
  }

  getDefinition() {
    return this.definition;
  }

  getImplicitDefinition() {
    return this.implicitDefinition;
  }

  getRecursiveRuleNames() {
    return this.recursiveRuleNames;
  }

  getLeftRecursiveRuleName() {
    return this.leftRecursiveRuleName;
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

  isStrictlyLeftRecursive() {
    let strictlyLeftRecursive = false;

    const leftRecursive = this.isLeftRecursive();

    if (leftRecursive) {
      strictlyLeftRecursive = (this.leftRecursiveRuleName === this.ruleName);
    }

    return strictlyLeftRecursive;
  }

  isNonStrictlyLeftRecursive() {
    let nonStrictlyLeftRecursive = false;

    const leftRecursive = this.isLeftRecursive();

    if (leftRecursive) {
      nonStrictlyLeftRecursive = (this.leftRecursiveRuleName !== this.ruleName);
    }

    return nonStrictlyLeftRecursive;
  }

  matchDefinition(definition) {
    const matches = (this.definition === definition);

    return matches;
  }

  setImplicitDefinition(implicitDefinition) {
    this.implicitDefinition = implicitDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    let recursiveDefinition = null;

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = (recursiveRuleNamesLength > 0);

    if (definitionRecursive) {
      const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            implicitDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(ruleName, definition, implicitDefinition, recursiveRuleNames, leftRecursiveRuleName);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
