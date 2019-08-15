'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const exampleBNF = require('../example/bnf'),
      BNFTextarea = require('./textarea/bnf'),
      rulesUtilities = require('../utilities/rules'),
      exampleContent = require('../example/content'),
      ContentTextarea = require('./textarea/content'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      LexicalPatternInput = require('./input/lexicalPattern'),
      AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
      MainVerticalSplitter = require('./verticalSplitter/main'),
      exampleLexicalPattern = require('../example/lexicalPattern'),
      eliminateLeftRecursion = require('../eliminateLeftRecursion');

const { Element } = easy,
      { rulesAsString } = rulesUtilities,
      { SizeableElement } = easyLayout,
      { BasicLexer, BNFLexer } = lexers,
      { BasicParser, BNFParser } = parsers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class View extends Element {
  getParseTree(adjustedBNF) {
    let parseTree = null;

    const lexicalPattern = this.getLexicalPattern(),
          unassigned = '^.*$',
          custom = lexicalPattern,  ///
          entries = [
            { custom },
            { unassigned }
          ],
          bnf = adjustedBNF,  ///
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = BasicParser.fromBNF(bnf),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler() {
    try {
      const bnf = this.getBNF(),
            tokens = bnfLexer.tokensFromBNF(bnf);

      let rules;

      rules = bnfParser.rulesFromTokens(tokens);

      rules = eliminateLeftRecursion(rules);

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.hideError();

      this.setAdjustedBNF(adjustedBNF);

      const parseTree = this.getParseTree(adjustedBNF);

      this.setParseTree(parseTree);
    } catch (error) {
      this.showError();

      this.clearAdjustedBNF();

      this.clearParseTree();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>Lexical pattern</h2>
          <LexicalPatternInput onKeyUp={keyUpHandler} />
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
          <h2>Adjusted BNF</h2>
          <AdjustedBNFTextarea />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    const bnf = exampleBNF, ///
          content = exampleContent, ///
          lexicalPattern = exampleLexicalPattern; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalPattern(lexicalPattern);

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
