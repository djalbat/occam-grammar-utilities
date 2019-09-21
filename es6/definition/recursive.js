'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      definitionUtilities = require('../utilities/definition');

const { first } = arrayUtilities,
      { partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { recursiveRuleNamesFromDefinition, leftRecursiveRuleNameFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition) {
    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleName = leftRecursiveRuleName;
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  getParts() { return this.definition.getParts(); }

  getFirstPart () {
    const parts = this.getParts(),
          firstPart = first(parts);

    return firstPart;
  }

  isLookAhead() {
    const firstPart = this.getFirstPart(),
          lookAhead = firstPart.isLookAhead();

    return lookAhead;
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

  getIndirectlyLeftRecursiveDefinition() {
    return this.indirectlyLeftRecursiveDefinition;
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
    const strictlyLeftRecursive = (this.leftRecursiveRuleName === this.ruleName);

    return strictlyLeftRecursive;
  }

  isNonStrictlyLeftRecursive() {
    let nonStrictlyLeftRecursive = false;

    const leftRecursive = this.isLeftRecursive();

    if (leftRecursive) {
      const strictlyLeftRecursive = this.isStrictlyLeftRecursive();

      nonStrictlyLeftRecursive = !strictlyLeftRecursive;
    }

    return nonStrictlyLeftRecursive;
  }

  matchDefinition(definition) {
    const matches = (this.definition === definition);

    return matches;
  }

  setIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
    this.indirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition;
  }

  static fromDefinitionAndRuleName(definition, ruleName) {
    let recursiveDefinition = null;

    const recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursive = (recursiveRuleNamesLength > 0);

    if (definitionRecursive) {
      const leftRecursiveRuleName = leftRecursiveRuleNameFromDefinition(definition),
            indirectlyLeftRecursiveDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleName, indirectlyLeftRecursiveDefinition);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
