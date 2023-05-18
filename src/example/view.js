"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { CommonLexer } from "occam-lexers";
import { FlorenceLexer, FlorenceParser } from "occam-grammars";
import { rulesUtilities, parserUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import rewriteNodes from "../rewriteNodes";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RewriteNodesCheckbox from "./checkbox/rewriteNodes";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";
import eliminateLeftRecursion from "../eliminateLeftRecursion";

const { rulesFromBNF } = parserUtilities,
      // { bnf: florenceBNF } = FlorenceParser, ///
      // { entries: florenceEntries } = FlorenceLexer, ///
      { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

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
          lexicalEntries = this.getLexicalEntries();

    let rules = rulesFromBNF(bnf);

    rules = eliminateLeftRecursion(rules);  ///

    const multiLine = true,
          rulesString = rulesAsString(rules, multiLine),
          adjustedBNF = rulesString;  ///

    this.setAdjustedBNF(adjustedBNF);

    try {
      const florenceLexer = florenceLexerFromLexicalEntries(lexicalEntries),
            florenceParser =  florenceParserFromRulesAndStartRuleName(rules, startRuleName),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens);

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
            <Paragraph>
              <RewriteNodesCheckbox onChange={this.changeHandler} />
              Rewrite nodes
            </Paragraph>
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

      S  ::=  F... <END_OF_LINE> ;
      
      A  ::=  E 
      
           |  T 
                                             
           ;
      
      E  ::=  F ;
      
      T  ::=  "n" ;
      
      F  ::=  "(" A ")"
                             
           |  A "+" A
      
           ;
  
  `

  static initialContent = `(n+n)
`;

  static initialStartRuleName = "S";

  static initialLexicalEntries = [{
    unassigned: "."
  }];

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

function florenceLexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        florenceLexer = CommonLexer.fromEntries(FlorenceLexer, entries);

  return florenceLexer;
}

function florenceParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        florenceParser = new FlorenceParser(startRule, ruleMap);

  return florenceParser;
}

// static initialBNF = `
//
//   ${florenceBNF}
//
//   term!                                ::=   variable ;
//
//   statement!                           ::=   "(" metaArgument ")"
//
//                                          |   argument "=" argument
//
//                                          |   typeInference
//
//                                          |   typeAssertion
//
//                                          |   variable "undefined"
//
//                                          ;
//
//   typeInference                        ::=   statement "|-" typeAssertion ;
//
//   typeAssertion                        ::=   term ":" type ;
//
//   metastatement!                       ::=   "(" metastatement ")"
//
//                                          |   ruleSubproofAssertion
//
//                                          |   contextDefinition
//
//                                          |   proofAssertion
//
//                                          |   metavariable ( inclusion | substitution )?
//
//                                          |   metavariable substitution?
//
//                                          |   variable "undefined"
//
//                                          ;
//
//   ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;
//
//   contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;
//
//   proofAssertion                       ::=   context "|=" judgement ;
//
//   judgement                            ::=   reference "::" metastatement ;
//
// `;  ///

// static initialLexicalEntries = florenceEntries; ///

// static initialContent = `Axiom (DeleteOperation)
//   Suppose
//     A
//   Then
// `;
