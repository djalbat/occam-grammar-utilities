"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { lexerUtilities } from "occam-lexers";
import { rulesUtilities, parserUtilities } from "occam-parsers";
import { ExampleLexer, ExampleParser, eliminateLeftRecursion } from "../index"; ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import BNFTextarea from "./view/textarea/bnf";
import ContentTextarea from "./view/textarea/content";
import ParseTreeTextarea from "./view/textarea/parseTree";
import StartRuleNameInput from "./view/input/startRuleName";
import AdjustedBNFTextarea from "./view/textarea/adjustedBNF";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

const { rulesAsString } = rulesUtilities,
      { rulesFromEntries, lexerFromRules } = lexerUtilities,
      { rulesFromBNF, parserFromRulesAndStartRuleName } = parserUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.update();
  }

  changeHandler = (event, element) => {
    this.update();
  }

  update() {
    try {
      const bnf = this.getBNF(),
            startRuleName = this.getStartRuleName(),
            lexicalEntries = this.getLexicalEntries();

      let rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setAdjustedBNF(adjustedBNF);

      const exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries),
            exampleParser =  exampleParserFromRulesAndStartRuleName(rules, startRuleName);

      const content = this.getContent(),
            tokens = exampleLexer.tokenise(content),
            node = exampleParser.parse(tokens);

      let parseTree = null;

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);
    }
  }

  childElements() {
    return (

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
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
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    );
  }

  initialise() {
    this.assignContext();

    const { initialBNF, initialContent, initialLexicalEntries, initialStartRuleName } = this.constructor,
          bnf = initialBNF, ///
          content = initialContent, ///
          lexicalEntries = initialLexicalEntries, ///
          startRuleName = initialStartRuleName; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalEntries(lexicalEntries);

    this.setStartRuleName(startRuleName);

    this.update();
  }

  static initialBNF = `

S ::= A... <END_OF_LINE> ;

A ::= B "g"

    | "e"

    ;

B ::= A "h"

    | B "f"

    | "d"

    ;

`;

  static initialContent = `ehfg
`;

  static initialStartRuleName = "";

  static initialLexicalEntries = [
    {
      "symbol": "zero|-"
    },
    {
      "unassigned": "."
    },
  ];

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function exampleLexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        rules = rulesFromEntries(entries),
        exampleLexer = lexerFromRules(ExampleLexer, rules);

  return exampleLexer;
}

function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
  const exampleParser = parserFromRulesAndStartRuleName(ExampleParser, rules, startRuleName);

  return exampleParser;
}
