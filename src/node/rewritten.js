"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../mixins/restore";

import { restoreChildNodes } from "../utilities/restore";
import { ruleNameFromRewrittenRuleName } from "../utilities/ruleName";

class RewrittenNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    let terminate = false;

    const congruent = this.isCongruent()

    let childNodes;

    if (alternate || congruent) {
      childNodes = this.flatten(state);

      alternate = congruent;  ///

      terminate = true;
    } else {
      childNodes = this.overwrite(state);
    }

    restoreChildNodes(childNodes, alternate, state);

    return terminate;
  }

  isCongruent() {
    let congruent = false;

    const singular = this.isSingular();

    if (singular) {
      const singleChildNode = this.getSingleChildNode(),
            singleChildNodeNonTerminalNode = singleChildNode.isNonTerminalNode();

      if (singleChildNodeNonTerminalNode) {
        const singleChildNonTerminalNode = singleChildNode, ///
              singleChildNonTerminalNodeSingular = singleChildNonTerminalNode.isSingular();

        if (singleChildNonTerminalNodeSingular) {
          const singleGrandchildNode = singleChildNode.getSingleChildNode(), ///
                singleGrandchildNodeNonTerminalNode = singleGrandchildNode.isNonTerminalNode();

          if (singleGrandchildNodeNonTerminalNode) {
            const baseRuleName = this.getBaseRuleName(),
                  singleGrandchildNonTerminalNode = singleGrandchildNode, ///
                  singleGrandchildNonTerminalNodeBaseRuleName = singleGrandchildNonTerminalNode.getBaseRuleName();

            if (baseRuleName === singleGrandchildNonTerminalNodeBaseRuleName) {
              congruent = true;
            }
          }
        }
      }
    }

    return congruent;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const rewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromRewrittenRuleName(rewrittenRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(RewrittenNode.prototype, restoreMixins);

export default RewrittenNode;
