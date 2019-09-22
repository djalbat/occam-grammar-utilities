'use strict';

const parsers = require('occam-parsers');

const RepeatedNode = require('../node/repeated');

const { Rule } = parsers;

class RepeatedRule extends Rule {
  static fromRepeatedRuleName(repeatedRuleName) {
    const name = repeatedRuleName,  ///
          definitions = [],
          NonTerminalNode = RepeatedNode, ///
          repeatedRule = new RepeatedRule(name, definitions, NonTerminalNode);

    return repeatedRule;
  }
}

module.exports = RepeatedRule;
