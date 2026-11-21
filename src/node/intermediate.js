"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../mixins/simpliciation";

import { simplifyChildNodes } from "../utilities/simplification";
import { ruleNameFromIntermediateRuleName } from "../utilities/ruleName";

class IntermediateNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(alternate, state) {
    const terminate = true,
          remainingChildNodes = alternate ?
                                  this.liftLast() :
                                    this.rotate();

    this.overwrite(state);

    alternate = false;

    simplifyChildNodes(remainingChildNodes, alternate, state);

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

Object.assign(IntermediateNode.prototype, simpliciationMixins);

export default IntermediateNode;
