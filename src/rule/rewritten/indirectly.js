"use strict";

import { arrayUtilities } from "necessary";
import { Rule, Definition } from "occam-parsers";

import IndirectlyRewrittenNode from "../../node/rewritten";

import { CYCLE_LENGTH_2 } from "../../constants";
import { isRuleRepeatable } from "../../utilities/rule";
import { partsfromDefinition } from "../../utilities/definition";
import { rewrittenRuleNameFromRuleName } from "../../utilities/ruleName";

const { front } = arrayUtilities;

export default class IndirectlyRewrittenRule extends Rule {
  NonTerminalNodeFromRuleName(ruleName, state) {
    const NonTerminalNode = IndirectlyRewrittenNode; ///

    return NonTerminalNode;
  }

  mergedWith(indirectlyRewrittenRule) {
    let definitions;

    definitions = this.getDefinitions();

    const frontDefinitions = front(definitions);

    definitions = indirectlyRewrittenRule.getDefinitions();

    definitions = [ ///
      ...frontDefinitions,
      ...definitions
    ];

    const name = this.getName(),
          opacity = this.getOpacity();

    indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);  ///

    return indirectlyRewrittenRule;
  }

  static fromIndirectRule(indirectRule, context) {
    let definitions;

    definitions = indirectRule.getDefinitions();

    definitions = definitions.map((definition) => {
      const parts = partsfromDefinition(definition, context),
            precedence = definition.getPrecedence();

      definition = Definition.fromPartsAndPrecedence(parts, precedence);

      return definition;
    });

    const indirectRuleName = indirectRule.getName(),
          ruleName = indirectRuleName,  ///
          rewrittenRuleName = rewrittenRuleNameFromRuleName(ruleName),
          name = rewrittenRuleName,  ///
          opacity = indirectRule.getOpacity(),
          indirectlyRewrittenRule = new IndirectlyRewrittenRule(name, opacity, definitions);

    return indirectlyRewrittenRule;
  }
}

export function indirectlyRewrittenRulesFromCycleAndCycles(context, rewrittenRules = []) {
  const cycleLength = context.getCycleLength();

  let indirectlyRewrittenRule;

  switch (cycleLength) {
    case CYCLE_LENGTH_2: {
      const indirectRule = context.getIndirectRule(),
            indirectRuleRepeatable = isRuleRepeatable(indirectRule, context);

      if (!indirectRuleRepeatable) {
        indirectlyRewrittenRule = IndirectlyRewrittenRule.fromIndirectRule(indirectRule, context);

        rewrittenRules.push(indirectlyRewrittenRule);
      }

      break;
    }
  }

  return rewrittenRules;
}
