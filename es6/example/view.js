'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const exampleBNF = require('../example/bnf'),
      BNFTextarea = require('./textarea/bnf'),
      rulesUtilities = require('../utilities/rules'),
      AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
      MainVerticalSplitter = require('./verticalSplitter/main'),
      eliminateOrphanedRules = require('../eliminateOrphanedRules'),
      ExcludingFirstRuleCheckbox = require('./checkbox/excludingFirstRule'),
      EliminateOrphanedRulesCheckbox = require('./checkbox/eliminateOrphanedRules'),
      eliminateImplicitLeftRecursion = require('../eliminateImplicitLeftRecursion'),
      eliminateImmediateLeftRecursion = require('../eliminateImmediateLeftRecursion'),
      EliminateImplicitLeftRecursionCheckbox = require('./checkbox/eliminateImplicitLeftRecursion'),
      EliminateImmediateLeftRecursionCheckbox = require('./checkbox/eliminateImmediateLeftRecursion');

const { Element } = easy,
      { BNFLexer } = lexers,
      { BNFParser } = parsers,
      { rulesAsString } = rulesUtilities,
      { SizeableElement } = easyLayout;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class View extends Element {
  getRules() {
    const bnf = this.getBNF(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens);

    return rules;
  }

  adjustBNF() {
    try {
      const excludingFirstRuleCheckboxChecked = this.isExcludingFirstRuleCheckboxChecked(),
            eliminateOrphanedRulesCheckboxChecked = this.isEliminateOrphanedRulesCheckboxChecked(),
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked(),
            eliminateImmediateLeftRecursionCheckboxChecked = this.isEliminateImmediateLeftRecursionCheckboxChecked(),
            excludingFirstRule = excludingFirstRuleCheckboxChecked;  ///

      let rules = this.getRules();

      if (eliminateImplicitLeftRecursionCheckboxChecked) {
        rules = eliminateImplicitLeftRecursion(rules);
      }

      if (eliminateImmediateLeftRecursionCheckboxChecked) {
        rules = eliminateImmediateLeftRecursion(rules);
      }

      if (eliminateOrphanedRulesCheckboxChecked) {
        rules = eliminateOrphanedRules(rules, excludingFirstRule);
      }

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.hideError();

      this.setAdjustedBNF(adjustedBNF);
    } catch (error) {
      this.showError();

      this.clearAdjustedBNF();
    }
  }

  keyUpHandler() {
    this.adjustBNF();
  }

  excludingFirstRuleCheckboxChangeHandler(checked) {
    this.adjustBNF();
  }

  eliminateOrphanedRulesCheckboxChangeHandler(checked) {
    if (checked) {
      this.enableExcludingFirstRuleCheckbox();
    } else {
      this.checkExcludingFirstRuleCheckbox(checked);

      this.disableExcludingFirstRuleCheckbox();
    }

    this.adjustBNF();
  }

  eliminateImplicitLeftRecursionCheckboxChangeHandler(checked) {
    if (checked) {
      this.checkEliminateOrphanedRulesCheckbox(checked);

      checked = false;

      this.checkEliminateImmediateLeftRecursionCheckbox(checked);

      this.disableEliminateImmediateLeftRecursionCheckbox();
    } else {
      this.enableEliminateImmediateLeftRecursionCheckbox();
    }

    this.adjustBNF();
  }

  eliminateImmediateLeftRecursionCheckboxChangeHandler(checked) {
    this.adjustBNF();
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          excludingFirstRuleCheckboxChangeHandler = this.excludingFirstRuleCheckboxChangeHandler.bind(this),
          eliminateOrphanedRulesCheckboxChangeHandler = this.eliminateOrphanedRulesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this),
          eliminateImmediateLeftRecursionCheckboxChangeHandler = this.eliminateImmediateLeftRecursionCheckboxChangeHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <EliminateImmediateLeftRecursionCheckbox onChange={eliminateImmediateLeftRecursionCheckboxChangeHandler} disabled />
          <span>Eliminate immediate left recursion</span>
          <br />
          <EliminateImplicitLeftRecursionCheckbox onChange={eliminateImplicitLeftRecursionCheckboxChangeHandler} checked />
          <span>Eliminate implicit left recursion</span>
          <br />
          <EliminateOrphanedRulesCheckbox onChange={eliminateOrphanedRulesCheckboxChangeHandler} checked />
          <span>Eliminate orphaned rules</span>
          <br />
          <ExcludingFirstRuleCheckbox onChange={excludingFirstRuleCheckboxChangeHandler} checked />
          <span>excluding first rule</span>
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Adjusted BNF</h2>
          <AdjustedBNFTextarea />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    const bnf = exampleBNF; ///

    this.setBNF(bnf);

    this.keyUpHandler();
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
