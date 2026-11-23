"use strict";

import { NonTerminalNode } from "occam-parsers";

import restoreMixins from  "../mixins/restore";

import { restoreChildNodes } from "../utilities/restore";
import { ruleNameFromIntermediateRuleName } from "../utilities/ruleName";

class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  restore(alternate, state) {
    const terminate = true,
          remainingChildNodes = alternate ?
                                  this.liftLast() :
                                    this.rotate();

    this.overwrite(state);

    alternate = false;

    restoreChildNodes(remainingChildNodes, alternate, state);

    return terminate;
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const intermediateRuleName = ruleName;  ///

    ruleName = ruleNameFromIntermediateRuleName(intermediateRuleName);

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IntermediateNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IntermediateNode.prototype, restoreMixins);

export default IntermediateNode;
