'use strict';

const ruleUtilities = require('./utilities/rule');

const { findRuleByName } = ruleUtilities;

class Configuration {
  constructor(map, rules) {
    this.map = map;

    this.rules = rules;
  }

  getMap() {
    return this.map;
  }

  getRules() {
    return this.rules;
  }

  getRuleNames() {
    const ruleNames = Object.keys(this.map);

    return ruleNames;
  }

  getImmediatelyLeftRecursiveDefinitions(ruleName) {
    const immediatelyLeftRecursiveDefinitions = this.map[ruleName];

    return immediatelyLeftRecursiveDefinitions;
  }

  findRule(ruleName) {
    const name = ruleName,  ///
          rule = findRuleByName(name, this.rules);

    return rule;
  }

  forEachRule(callback) {
    this.rules.forEach(callback);
  }

  forEachRuleName(callback) {
    const ruleNames = this.getRuleNames();

    ruleNames.forEach(callback);
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
    if (!this.map[ruleName]) {
      this.map[ruleName] = [];
    }

    const immediatelyLeftRecursiveDefinitions = this.map[ruleName];

    immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);
  }

  static fromRules(rules) {
    const map = {},
          configuration = new Configuration(map, rules);

    return configuration;
  }
}

module.exports = Configuration;
