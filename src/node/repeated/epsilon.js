"use strict";

import RepeatedNode from "../repeated";

export default class EpsilonRepeatedNode extends RepeatedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return RepeatedNode.fromRuleNameAndChildNodes(EpsilonRepeatedNode, ruleName, childNodes); }
}
