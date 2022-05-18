"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser, rulesUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { eliminateLeftRecursion, removeOrRenameIntermediateNodes } from "../index"; ///

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

import { rulesFromBNF } from "../utilities/parser";
import { UNASSIGNED_ENTRY } from "../constants";
import { rulesFromStartRuleAndRuleMap } from "../utilities/rules";

const { rulesAsString, ruleMapFromRules, startRuleFromRules } = rulesUtilities;

class View extends Element {
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
      const bnf = this.getBNF();

      let rules = rulesFromBNF(bnf);

      const ruleMap = ruleMapFromRules(rules);

      let startRule = startRuleFromRules(rules);

      startRule = eliminateLeftRecursion(startRule, ruleMap);

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

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

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

    const { initialBNF, initialContent, initialLexicalPattern } = this.constructor,
          bnf = initialBNF, ///
          content = initialContent, ///
          lexicalPattern = initialLexicalPattern; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setLexicalPattern(lexicalPattern);

    this.keyUpHandler();
  }

  static initialBNF = `
  
A ::= B

    | C "f"

    ;

B ::= "h" C ;

C ::= A ;

`;

  static initialContent = "f";

  static initialLexicalPattern = ".";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

`

How come this works...

A ::= C "f"

    | B

    ;

B ::= "h" C ;

C ::= A ;
 
...but this doesn't:

A ::= C "f"

    | B

    ;

B ::= "h" C ;

C ::= A ;
 

----------------------------------------

This one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.

    A ::= A "f"
    
        | B
    
        | "e"
    
        ;
    
    B ::= C
    
        | A "g"
    
        ;
    
    C ::= "h" ;

`
