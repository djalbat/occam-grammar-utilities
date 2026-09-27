"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import NonTerminalNode from "../nonTerminalNode";

class S extends NonTerminalNode { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(S, ruleName, childNodes, opacity, precedence); } }

class T extends NonTerminalNode { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(T, ruleName, childNodes, opacity, precedence); } }

class A extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(A, ruleName, childNodes, opacity, precedence); } }

class B extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(B, ruleName, childNodes, opacity, precedence); } }

class C extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(C, ruleName, childNodes, opacity, precedence); } }

class D extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(D, ruleName, childNodes, opacity, precedence); } }

class E extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(E, ruleName, childNodes, opacity, precedence); } }

class F extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(F, ruleName, childNodes, opacity, precedence); } }

class U extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(T, ruleName, childNodes, opacity, precedence); } }

class V extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(V, ruleName, childNodes, opacity, precedence); } }

class X extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(X, ruleName, childNodes, opacity, precedence); } }

class Y extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Y, ruleName, childNodes, opacity, precedence); } }

class Z extends NonTerminalNodeBase { static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNodeBase.fromRuleNameChildNodesOpacityAndPrecedence(Z, ruleName, childNodes, opacity, precedence); } }

const NonTerminalNodeMap = {
  T,
  A,
  B,
  C,
  D,
  E,
  F,
  S,
  U,
  V,
  X,
  Y,
  Z
}

export default NonTerminalNodeMap;
