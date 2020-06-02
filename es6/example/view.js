"use strict";

import { Element } from "easy";
import { RowsDiv, ColumnsDiv } from "easy-layout";
import { BNFLexer, BasicLexer } from "occam-lexers";
import { BNFParser, BasicParser } from "occam-parsers";
import { eliminateLeftRecursion, removeOrRenameIntermediateNodes } from "../index"; ///

import Heading from "./heading";
import ColumnDiv from "./div/column";
import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import VerticalSplitterDiv from "./div/splitter/vertical";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

import { rulesAsString } from "../utilities/rules";
import { findRuleByName } from "../utilities/rule";
import { UNASSIGNED_ENTRY } from "../constants";

export default class View extends Element {
  initialBNF = `
  
    expression    ::= expression operator expression
  
                  | "(" expression ")"
  
                  | term
  
                  ;
  
    operator      ::= "+" | "-" | "/" | "*" ;
    
    term          ::= /\\d+/ ;
    
  `;

  initialContent = "(1+2)/3";

  initialLexicalPattern = "\\d+|.";

  constructor(selectorOrDOMElement, bnfLexer, bnfParser) {
    super(selectorOrDOMElement);

    this.bnfLexer = bnfLexer;
    this.bnfParser = bnfParser;
  }

  getParseTree(rules) {
    let parseTree = null;

    const lexicalPattern = this.getLexicalPattern(),
          unassigned = UNASSIGNED_ENTRY,
          custom = lexicalPattern,  ///
          entries = [
            { custom },
            { unassigned }
          ],
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = BasicParser.fromRules(rules),
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

    if (node !== null) {
      const removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

      if (removeOrRenameIntermediateNodesCheckboxChecked) {
        removeOrRenameIntermediateNodes(node);
      }

      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler() {
    this.changeHandler();
  }

  changeHandler() {
    try {
      const bnf = this.getBNF(),
            tokens = this.bnfLexer.tokensFromBNF(bnf);

      let rules;

      rules = this.bnfParser.rulesFromTokens(tokens);

      eliminateLeftRecursion(rules);

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setAdjustedBNF(adjustedBNF);

      const parseTree = this.getParseTree(rules);

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearParseTree();

      this.clearAdjustedBNF();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <Heading>
        Grammar utilities example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical pattern
            </SubHeading>
            <LexicalPatternInput onKeyUp={keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Adjusted BNF
            </SubHeading>
            <AdjustedBNFTextarea onKeyUp={keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
            <Paragraph>
              <RemoveOrRenameIntermediateNodesCheckbox onChange={changeHandler} checked />
              Remove or rename intermediate nodes
            </Paragraph>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise(properties) {
    this.assignContext();

    const bnf = this.initialBNF, ///
          content = this.initialContent, ///
          lexicalPattern = this.initialLexicalPattern; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalPattern(lexicalPattern);

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromClass(Class, properties) {
    const bnfLexer = BNFLexer.fromNothing(),
          bnfParser = BNFParser.fromNothing(),
          exampleView = Element.fromClass(Class, properties, bnfLexer, bnfParser);

    exampleView.initialise(properties);

    return exampleView
  }
}
