"use strict";

import { NonTerminalNode } from "occam-parsers";

import simpliciationMixins from  "../../mixins/simpliciation";

import { ruleNameFromIncidentallyRewrittenRuleName } from "../../utilities/ruleName";

class IncidentallyRewrittenNode extends NonTerminalNode {
  rewrite(state) {
    const nonTerminalNode = this; ///

    return nonTerminalNode;
  }

  simplify(state) {
    this.simplifyChildNodes(state);

    this.overwrite(state);
  }

  getBaseRuleName() {
    let ruleName;

    ruleName = this.getRuleName();

    const incidentallyRewrittenRuleName = ruleName; ///

    ruleName = ruleNameFromIncidentallyRewrittenRuleName(incidentallyRewrittenRuleName);  ///

    const baseRuleName = ruleName;  ///

    return baseRuleName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(IncidentallyRewrittenNode, ruleName, childNodes, precedence, opacity); }
}

Object.assign(IncidentallyRewrittenNode.prototype, simpliciationMixins);

export default IncidentallyRewrittenNode;
