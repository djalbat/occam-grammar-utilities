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

import { findRuleByName } from "../utilities/rule";
import { UNASSIGNED_ENTRY } from "../constants";
import { rulesAsString, startRuleFromRules, ruleMapFromRules, rulesFromStartRuleAndRuleMap } from "../utilities/rules";

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

  getParseTree(startRule, ruleMap) {
    let parseTree = null;

    const lexicalPattern = this.getLexicalPattern(),
          unassigned = UNASSIGNED_ENTRY,
          custom = lexicalPattern,  ///
          entries = [
            {
              custom
            },
            {
              unassigned
            }
          ],
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = new BasicParser(startRule, ruleMap),  ///
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

  keyUpHandler(event, element) {
    this.changeHandler();
  }

  changeHandler(event, element) {
    try {
      const bnf = this.getBNF(),
            tokens = this.bnfLexer.tokensFromBNF(bnf);

      let rules = this.bnfParser.rulesFromTokens(tokens),
          startRule = startRuleFromRules(rules);

      const ruleMap = ruleMapFromRules(rules);

      startRule = eliminateLeftRecursion(startRule, ruleMap);

      rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

      const multiLine = true,
            parseTree = this.getParseTree(startRule, ruleMap),
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setParseTree(parseTree);

      this.setAdjustedBNF(adjustedBNF);
    } catch (error) {
      console.log(error);

      this.clearParseTree();

      this.clearAdjustedBNF();
    }
  }

  childElements() {
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
            <AdjustedBNFTextarea readOnly />
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

  initialise() {
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

    return exampleView
  }
}
