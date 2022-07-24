"use strict";

import RepeatedNode from "../repeated";

export default class IndirectlyRepeatedNode extends RepeatedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return RepeatedNode.fromRuleNameAndChildNodes(IndirectlyRepeatedNode, ruleName, childNodes); }
}
