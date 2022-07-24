"use strict";

import ReducedNode from "../reduced";

export default class DirectlyReducedNode extends ReducedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return ReducedNode.fromRuleNameAndChildNodes(DirectlyReducedNode, ruleName, childNodes); }
}
