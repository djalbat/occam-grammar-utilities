"use strict";

import { NonTerminalNode } from "occam-parsers";

class A extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(A, ruleName, childNodes, opacity); }
}

class B extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(B, ruleName, childNodes, opacity); }
}

class C extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(C, ruleName, childNodes, opacity); }
}

class D extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(D, ruleName, childNodes, opacity); }
}

class E extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(E, ruleName, childNodes, opacity); }
}

class F extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(F, ruleName, childNodes, opacity); }
}

class S extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(S, ruleName, childNodes, opacity); }
}

class T extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(T, ruleName, childNodes, opacity); }
}

class V extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return NonTerminalNode.fromRuleNameChildNodesAndOpacity(V, ruleName, childNodes, opacity); }
}

const NonTerminalNodeMap = {
  A,
  B,
  C,
  D,
  E,
  F,
  S,
  T,
  V
}

export default NonTerminalNodeMap;