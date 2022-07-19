"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { FlorenceLexer, FlorenceParser } from "occam-grammars";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import rulesUtilities from "../utilities/rules";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import eliminateLeftRecursion from "../eliminateLeftRecursion";
import removeOrRenameIntermediateNodes from "../removeOrRenameIntermediateNodes";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

import { rulesFromBNF } from "../utilities/parser";
import { UNASSIGNED_ENTRY } from "../constants";

const { rulesAsString, ruleMapFromRules, rulesFromStartRuleAndRuleMap, startRuleFromRulesAndStartRuleName } = rulesUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.changeHandler();
  }

  changeHandler = (event, element) => {
    try {
      const bnf = this.getBNF(),
            startRuleName = this.getStartRuleName();

      let rules = rulesFromBNF(bnf);

      const ruleMap = ruleMapFromRules(rules),
            startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);

      eliminateLeftRecursion(startRule, ruleMap);

      rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setAdjustedBNF(adjustedBNF);

      const parseTree = this.getParseTree(startRule, ruleMap);

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);
    }
  }

  getParseTree(startRule, ruleMap) {
    let parseTree = null;

    const lexicalPattern = this.getLexicalPattern(),
          basicLexer = basicLexerFromLexicalPattern(lexicalPattern),
          basicParser =  basicParserFromStartRuleAndRuleMap(startRule, ruleMap);

    const content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

    // const { entries } = FlorenceLexer,
    //       lexicalPattern = this.getLexicalPattern(),
    //       custom = lexicalPattern;  ///
    //
    // entries.push({
    //   custom
    // });
    //
    // const florenceLexer = FlorenceLexer.fromEntries(entries),
    //       florenceParser = new FlorenceParser(startRule, ruleMap),  ///
    //       content = this.getContent(),
    //       tokens = florenceLexer.tokenise(content),
    //       node = florenceParser.parse(tokens);

    if (node !== null) {
      const removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

      if (removeOrRenameIntermediateNodesCheckboxChecked) {
        removeOrRenameIntermediateNodes(node);
      }

      const abridged = true;

      parseTree = node.asParseTree(tokens, abridged);
    }

    return parseTree;
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
              <RemoveOrRenameIntermediateNodesCheckbox onChange={this.changeHandler} checked />
              Remove or rename intermediate nodes
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

  static initialBNF = `    A ::= A "e"
    
        | A "f"
    
        | "g"

        | "h"

        ;
  
`;

  static initialContent = "gef";

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

function basicLexerFromLexicalPattern(lexicalPattern) {
  const unassigned = "^.*$",  ///
        custom = lexicalPattern,  ///
        entries = [
          {
            custom
          },
          {
            unassigned
          }
        ],
        basicLexer = BasicLexer.fromEntries(entries);

  return basicLexer;
}

function basicParserFromStartRuleAndRuleMap(startRule, ruleMap) {
  const basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}
