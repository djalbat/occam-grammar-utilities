"use strict";

import RepeatedNode from "../repeated";

export default class DirectlyRepeatedNode extends RepeatedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return RepeatedNode.fromRuleNameAndChildNodes(DirectlyRepeatedNode, ruleName, childNodes); }
}
