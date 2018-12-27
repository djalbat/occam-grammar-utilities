'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const exampleBNF = require('../example/bnf'),
      BNFTextarea = require('./textarea/bnf'),
      rulesUtilities = require('../utilities/rules'),
      eliminateCycles = require('../eliminateCycles'),
      AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
      MainVerticalSplitter = require('./verticalSplitter/main'),
      eliminateOrphanedRules = require('../eliminateOrphanedRules'),
      EliminateCyclesCheckbox = require('./checkbox/eliminateCycles'),
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
          rulesNode = bnfParser.rulesNodeFromTokens(tokens),
          rules = BNFParser.generateRules(rulesNode);

    return rules;
  }

  adjustBNF() {
    try {
      const eliminateCyclesCheckboxChecked = this.isEliminateCyclesCheckboxChecked(),
            eliminateOrphanedRulesCheckboxChecked = this.isEliminateOrphanedRulesCheckboxChecked(),
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked(),
            eliminateImmediateLeftRecursionCheckboxChecked = this.isEliminateImmediateLeftRecursionCheckboxChecked();

      let rules = this.getRules();

      if (eliminateCyclesCheckboxChecked) {
        rules = eliminateCycles(rules);
      }

      if (eliminateImplicitLeftRecursionCheckboxChecked) {
        rules = eliminateImplicitLeftRecursion(rules);
      }

      if (eliminateImmediateLeftRecursionCheckboxChecked) {
        rules = eliminateImmediateLeftRecursion(rules);
      }

      if (eliminateOrphanedRulesCheckboxChecked) {
        rules = eliminateOrphanedRules(rules);
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

  eliminateCyclesCheckboxChangeHandler(checked) {
    this.adjustBNF();
  }

  eliminateOrphanedRulesCheckboxChangeHandler(checked) {
    this.adjustBNF();
  }

  eliminateImplicitLeftRecursionCheckboxChangeHandler(checked) {
    if (checked) {
      this.checkEliminateCyclesCheckbox(checked);

      checked = false;

      this.checkEliminateImmediateLeftRecursionCheckbox(checked);

      this.disableEliminateCyclesCheckbox();

      this.disableEliminateImmediateLeftRecursionCheckbox();
    } else {
      this.enableEliminateCyclesCheckbox();

      this.enableEliminateImmediateLeftRecursionCheckbox();
    }

    this.adjustBNF();
  }

  eliminateImmediateLeftRecursionCheckboxChangeHandler(checked) {
    this.adjustBNF();
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          eliminateCyclesCheckboxChangeHandler = this.eliminateCyclesCheckboxChangeHandler.bind(this),
          eliminateOrphanedRulesCheckboxChangeHandler = this.eliminateOrphanedRulesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this),
          eliminateImmediateLeftRecursionCheckboxChangeHandler = this.eliminateImmediateLeftRecursionCheckboxChangeHandler.bind(this);

    return ([

      <h1>
        Grammar utilities example
      </h1>,
      <div className="columns">
        <SizeableElement>
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <EliminateCyclesCheckbox onChange={eliminateCyclesCheckboxChangeHandler} checked disabled />
          <span>Eliminate cycles</span>
          <br />
          <EliminateImmediateLeftRecursionCheckbox onChange={eliminateImmediateLeftRecursionCheckboxChangeHandler} disabled />
          <span>Eliminate immediate left recursion</span>
          <br />
          <EliminateImplicitLeftRecursionCheckbox onChange={eliminateImplicitLeftRecursionCheckboxChangeHandler} checked />
          <span>Eliminate implicit left recursion</span>
          <br />
          <EliminateOrphanedRulesCheckbox onChange={eliminateOrphanedRulesCheckboxChangeHandler} />
          <span>Eliminate orphaned rules</span>
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Adjusted BNF</h2>
          <AdjustedBNFTextarea />
        </div>
      </div>

    ]);
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
