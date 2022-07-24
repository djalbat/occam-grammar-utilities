"use strict";

import ReducedNode from "../reduced";

export default class IndirectlyReducedNode extends ReducedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return ReducedNode.fromRuleNameAndChildNodes(IndirectlyReducedNode, ruleName, childNodes); }
}
