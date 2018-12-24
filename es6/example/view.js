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
      EliminateCyclesCheckbox = require('./checkbox/eliminateCycles'),
      eliminateImplicitLeftRecursion = require('../eliminateImplicitLeftRecursion'),
      EliminateImplicitLeftRecursionCheckbox = require('./checkbox/eliminateImplicitLeftRecursion');

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
            eliminateImplicitLeftRecursionCheckboxChecked = this.isEliminateImplicitLeftRecursionCheckboxChecked();

      let rules = this.getRules();

      if (eliminateCyclesCheckboxChecked) {
        rules = eliminateCycles(rules);
      }

      if (eliminateImplicitLeftRecursionCheckboxChecked) {
        rules = eliminateImplicitLeftRecursion(rules);
      }

      const multiLine = false,
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

  eliminateImplicitLeftRecursionCheckboxChangeHandler(checked) {
    if (checked) {
      this.checkEliminateCyclesCheckbox(checked);

      this.disableEliminateCyclesCheckbox();
    } else {
      this.enableEliminateCyclesCheckbox();
    }

    this.adjustBNF();
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          eliminateCyclesCheckboxChangeHandler = this.eliminateCyclesCheckboxChangeHandler.bind(this),
          eliminateImplicitLeftRecursionCheckboxChangeHandler = this.eliminateImplicitLeftRecursionCheckboxChangeHandler.bind(this);

    return ([

      <h1>
        Grammar utilities example
      </h1>,
      <div className="columns">
        <SizeableElement>
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <EliminateCyclesCheckbox onChange={eliminateCyclesCheckboxChangeHandler} checked enabled />
          <span>Eliminate cycles</span>
          <br />
          <EliminateImplicitLeftRecursionCheckbox onChange={eliminateImplicitLeftRecursionCheckboxChangeHandler} />
          <span>Eliminate implicit left recursion</span>
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