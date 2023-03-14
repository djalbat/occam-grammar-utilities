"use strict";

import ReducedNode from "../reduced";

export default class ImplicitlyReducedNode extends ReducedNode {
  static fromRuleNameAndChildNodes(ruleName, childNodes) { return ReducedNode.fromRuleNameAndChildNodes(ImplicitlyReducedNode, ruleName, childNodes); }
}
