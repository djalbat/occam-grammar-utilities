"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import rewriteNodes from "../rewriteNodes";
import ExampleLexer from "../example/lexer";
import ExampleParser from "../example/parser";
import rulesUtilities from "../utilities/rules";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RewriteNodesCheckbox from "./checkbox/rewriteNodes"
import eliminateLeftRecursion from "../eliminateLeftRecursion";

import { rulesFromBNF } from "../utilities/parser";

const { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  changeHandler = (event, element) => {
    this.update();
  }

  update() {
    const bnf = this.getBNF(),
          content = this.getContent(),
          startRuleName = this.getStartRuleName(),
          lexicalPattern = this.getLexicalPattern();

    let rules = rulesFromBNF(bnf);

    rules = eliminateLeftRecursion(rules);

    const multiLine = true,
          rulesString = rulesAsString(rules, multiLine),
          adjustedBNF = rulesString;  ///

    this.setAdjustedBNF(adjustedBNF);

    try {
      const exampleLexer = exampleLexerFromLexicalPattern(lexicalPattern),
            exampleParser =  exampleParserFromRulesAndStartRuleName(rules, startRuleName),
            tokens = exampleLexer.tokenise(content),
            node = exampleParser.parse(tokens);

      let parseTree = null;

      if (node !== null) {
        const rewriteNodesCheckboxChecked = this.isRewriteNodesCheckboxChecked();

        if (rewriteNodesCheckboxChecked) {
          rewriteNodes(node);
        }

        const abridged = true;

        parseTree = node.asParseTree(tokens, abridged);
      }

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);
    }
  }

  childElements() {
    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical pattern
            </SubHeading>
            <LexicalPatternInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={this.keyUpHandler} />
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
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
            <Paragraph>
              <RewriteNodesCheckbox onChange={this.changeHandler} checked />
              Rewrite nodes
            </Paragraph>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialBNF, initialContent, initialStartRuleName, initialLexicalPattern } = this.constructor,
          bnf = initialBNF, ///
          content = initialContent, ///
          startRuleName = initialStartRuleName, ///
          lexicalPattern = initialLexicalPattern; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setStartRuleName(startRuleName);

    this.setLexicalPattern(lexicalPattern);

    this.keyUpHandler();
  }

  static initialBNF = `
    A ::= B "f"
    
        | B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "d"

        ;
`;

  static initialContent = `dfhg`;

  static initialStartRuleName = "";

  static initialLexicalPattern = ".";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function exampleLexerFromLexicalPattern(lexicalPattern) {
  const unassigned = lexicalPattern,  ///
        entries = [
          {
            unassigned
          }
        ],
        exampleLexer = ExampleLexer.fromEntries(entries);

  return exampleLexer;
}

function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        exampleParser = new ExampleParser(startRule, ruleMap);

  return exampleParser;
}
