"use strict";

import { NonTerminalNode } from "occam-parsers";

export default class ReducedNode extends NonTerminalNode {
  static fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous) { return NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ReducedNode, ruleName, childNodes, ambiguous); }
}
