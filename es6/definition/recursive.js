'use strict';

const parsers = require('occam-parsers');

const arrayUtilities = require('../utilities/array'),
      definitionUtilities = require('../utilities/definition');

const { first } = arrayUtilities,
      { partTypes } = parsers,
      { RuleNamePartType } = partTypes,
      { recursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromDefinition } = definitionUtilities;

class RecursiveDefinition {
  constructor(ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    this.ruleName = ruleName;
    this.definition = definition;
    this.recursiveRuleNames = recursiveRuleNames;
    this.leftRecursiveRuleNames = leftRecursiveRuleNames;
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

  getLeftRecursiveRuleNames() {
    return this.leftRecursiveRuleNames;
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
    const leftRecursiveRuleNamesLength = this.leftRecursiveRuleNames.length,
          leftRecursive = (leftRecursiveRuleNamesLength > 0);

    return leftRecursive;
  }

  isDirectlyLeftRecursive() {
    let directlyLeftRecursive = false;

    const leftRecursive = this.isLeftRecursive();

    if (leftRecursive) {
      const leftRecursiveRuleNamesIncludesRuleName = this.leftRecursiveRuleNames.includes(this.ruleName);

      directlyLeftRecursive = leftRecursiveRuleNamesIncludesRuleName; ///
    }

    return directlyLeftRecursive;
  }

  getLeftRecursiveRuleName() {
    let leftRecursiveRuleName = null;

    const leftRecursiveRuleNamesLength = this.leftRecursiveRuleNames.length;

    if (leftRecursiveRuleNamesLength > 0) {
      const firstLeftRecursiveFileName = first(this.leftRecursiveRuleNames);

      leftRecursiveRuleName = firstLeftRecursiveFileName; ///
    }

    return leftRecursiveRuleName;
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
      const leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
            implicitlyLeftRecursiveDefinition = null; ///

      recursiveDefinition = new RecursiveDefinition(ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
    }

    return recursiveDefinition;
  }
}

module.exports = RecursiveDefinition;
