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
      eliminateLeftRecursion = require('../eliminateLeftRecursion');

const { Element } = easy,
      { BNFLexer } = lexers,
      { BNFParser } = parsers,
      { rulesAsString } = rulesUtilities,
      { SizeableElement } = easyLayout;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class View extends Element {
  getAdjustedBNF() {
    const bnf = this.getBNF(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rulesNode = bnfParser.rulesNodeFromTokens(tokens);

    let rules = BNFParser.generateRules(rulesNode);

    rules = eliminateLeftRecursion(rules);

    const rulesString = rulesAsString(rules),
          adjustedBNF = rulesString;  ///

    return adjustedBNF;
  }

  keyUpHandler() {
    try {
      const adjustedBNF = this.getAdjustedBNF();

      this.hideError();

      this.setAdjustedBNF(adjustedBNF);
    } catch (error) {
      this.showError();

      this.clearAdjustedBNF();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <h1>
        Grammar utilities example
      </h1>,
      <div className="columns">
        <SizeableElement>
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
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
