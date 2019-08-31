'use strict';

const ruleUtilities = require('./utilities/rule');

const { findRuleByName } = ruleUtilities;

class Configuration {
  constructor(immediatelyLeftRecursiveDefinitionsMap, indirectlyLeftRecursiveDefinitionsMap, rules) {
    this.immediatelyLeftRecursiveDefinitionsMap = immediatelyLeftRecursiveDefinitionsMap;

    this.indirectlyLeftRecursiveDefinitionsMap = indirectlyLeftRecursiveDefinitionsMap;

    this.rules = rules;
  }

  getRules() {
    return this.rules;
  }

  getIndirectlyLeftRecursiveRuleNames() {
    const indirectlyLeftRecursiveRuleNames = Object.keys(this.indirectlyLeftRecursiveDefinitionsMap);

    return indirectlyLeftRecursiveRuleNames;
  }

  getImmediatelyLeftRecursiveRuleNames() {
    const immediatelyLeftRecursiveRuleNames = Object.keys(this.immediatelyLeftRecursiveDefinitionsMap);

    return immediatelyLeftRecursiveRuleNames;
  }

  getImmediatelyLeftRecursiveDefinitions(ruleName) {
    const immediatelyLeftRecursiveDefinitions = this.immediatelyLeftRecursiveDefinitionsMap[ruleName];

    return immediatelyLeftRecursiveDefinitions;
  }

  findRule(ruleName) {
    const name = ruleName,  ///
          rule = findRuleByName(name, this.rules);

    return rule;
  }

  isRulePresent(ruleName) {
    const rule = this.findRule(ruleName),
          rulePresent = (rule !== null);

    return rulePresent;
  }

  isDefinitionIndirectlyLeftRecursiveDefinition(definition, ruleName) {
    const indirectlyLeftRecursiveDefinitions = this.indirectlyLeftRecursiveDefinitionsMap[ruleName],
          indirectlyLeftRecursiveDefinitionsIncludesDefinition = indirectlyLeftRecursiveDefinitions.includes(definition),
          definitionIndirectlyRecursiveDefinition = indirectlyLeftRecursiveDefinitionsIncludesDefinition; ///

    return definitionIndirectlyRecursiveDefinition;
  }

  forEachRule(callback) {
    this.rules.forEach(callback);
  }

  forEachIndirectlyLeftRecursiveRule(callback) {
    const indirectlyLeftRecursiveRuleNames = this.getIndirectlyLeftRecursiveRuleNames();

    indirectlyLeftRecursiveRuleNames.forEach((mappedRuleName) => {
      const mappedRule = this.findRule(mappedRuleName);

      callback(mappedRule);
    });
  }

  forEachIndirectlyLeftRecursiveRuleName(callback) {
    const indirectlyLeftRecursiveRuleNames = this.getIndirectlyLeftRecursiveRuleNames();

    indirectlyLeftRecursiveRuleNames.forEach(callback);
  }

  forEachImmediatelyLeftRecursiveRule(callback) {
    const immediatelyLeftRecursiveRuleNames = this.getImmediatelyLeftRecursiveRuleNames();

    immediatelyLeftRecursiveRuleNames.forEach((mappedRuleName) => {
      const mappedRule = this.findRule(mappedRuleName);

      callback(mappedRule);
    });
  }

  forEachImmediatelyLeftRecursiveRuleName(callback) {
    const immediatelyLeftRecursiveRuleNames = this.getImmediatelyLeftRecursiveRuleNames();

    immediatelyLeftRecursiveRuleNames.forEach(callback);
  }

  addNonRecursiveRule(nonRecursiveRule) {
    const rule = nonRecursiveRule;  ///

    this.rules.push(rule);
  }

  addRightRecursiveRule(rightRecursiveRule) {
    const rule = rightRecursiveRule;  ///

    this.rules.push(rule);
  }

  mapImmediatelyLeftRecursiveDefinition(ruleName, immediatelyLeftRecursiveDefinition) {
    if (!this.immediatelyLeftRecursiveDefinitionsMap[ruleName]) {
      this.immediatelyLeftRecursiveDefinitionsMap[ruleName] = [];
    }

    const immediatelyLeftRecursiveDefinitions = this.immediatelyLeftRecursiveDefinitionsMap[ruleName];

    immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);
  }

  mapIndirectlyLeftRecursiveDefinition(ruleName, indirectlyLeftRecursiveDefinition) {
    if (!this.indirectlyLeftRecursiveDefinitionsMap[ruleName]) {
      this.indirectlyLeftRecursiveDefinitionsMap[ruleName] = [];
    }

    const indirectlyLeftRecursiveDefinitions = this.indirectlyLeftRecursiveDefinitionsMap[ruleName];

    indirectlyLeftRecursiveDefinitions.push(indirectlyLeftRecursiveDefinition);
  }

  static fromRules(rules) {
    const immediatelyLeftRecursiveDefinitionsMap = {},
          indirectlyLeftRecursiveDefinitionsMap = {},
          configuration = new Configuration(immediatelyLeftRecursiveDefinitionsMap, indirectlyLeftRecursiveDefinitionsMap, rules);

    return configuration;
  }
}

module.exports = Configuration;
