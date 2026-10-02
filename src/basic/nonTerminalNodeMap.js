"use strict";

import { NonTerminalNode as NonTerminalNodeBase } from "occam-parsers";

import NonTerminalNode from "../nonTerminalNode";

class S extends NonTerminalNode { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(S, ruleName, childNodes, precedence, opacity); } }

class T extends NonTerminalNode { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(T, ruleName, childNodes, precedence, opacity); } }

class A extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(A, ruleName, childNodes, precedence, opacity); } }

class B extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(B, ruleName, childNodes, precedence, opacity); } }

class C extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(C, ruleName, childNodes, precedence, opacity); } }

class D extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(D, ruleName, childNodes, precedence, opacity); } }

class E extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(E, ruleName, childNodes, precedence, opacity); } }

class F extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(F, ruleName, childNodes, precedence, opacity); } }

class U extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(T, ruleName, childNodes, precedence, opacity); } }

class V extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(V, ruleName, childNodes, precedence, opacity); } }

class X extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(X, ruleName, childNodes, precedence, opacity); } }

class Y extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Y, ruleName, childNodes, precedence, opacity); } }

class Z extends NonTerminalNodeBase { static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNodeBase.fromRuleNameChildNodesPrecedenceAndOpacity(Z, ruleName, childNodes, precedence, opacity); } }

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
