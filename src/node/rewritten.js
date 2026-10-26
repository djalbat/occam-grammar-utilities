"use strict";

import { NonTerminalNode } from "occam-parsers";

import { ruleNameFromRewrittenRuleName } from "../utilities/ruleName";

export default class RewrittenNode extends NonTerminalNode {
  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(index, state, topmost = false) {
    this.simplifyChildNodes(state);

    const nonTerminalNode = this.overwrite(state);

    if (topmost) {
      const withPrecedence = true;

      nonTerminalNode.lift(withPrecedence);
    }
  }

  overwrite(state) {
    const opacity = this.getOpacity(),
          parentNode = this.getParentNode(),
          precedence = this.getPrecedence(),
          childNodes = this.removeChildNodes();

    let ruleName;

    ruleName = this.getRuleName();

    const rewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromRewrittenRuleName(rewrittenRuleName);  ///

    const nonTerminalNode = state.createNonTerminalNode(ruleName, childNodes, precedence, opacity),
          replacedChildNode = this, ///
          replacementChildNode = nonTerminalNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    return nonTerminalNode;
  }

  findReducedNode() {
    let reducedNode;

    this.someChildNode((childNode) => {
      reducedNode = childNode;  ///

      return true;
    });

    return reducedNode;
  }

  findRepeatedNodes() {
    const repeatedNodes = [];

    this.someChildNode((childNode, index) => {
      const initial = (index === 0);

      if (!initial) {
        const repeatedNode = childNode;  ///

        repeatedNodes.push(repeatedNode);
      }
    });

    return repeatedNodes;
  }

  simplifyChildNodes(state) {
    this.forEachChildNode((childNode, index) => {
      childNode.simplify(index, state);
    });
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
