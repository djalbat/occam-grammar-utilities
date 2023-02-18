"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rulesUtilities, parserUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import rewriteNodes from "../rewriteNodes";
import ExampleLexer from "../lexer/example";
import ExampleParser from "../parser/example";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RewriteNodesCheckbox from "./checkbox/rewriteNodes";
import eliminateLeftRecursion from "../eliminateLeftRecursion";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

const { rulesFromBNF } = parserUtilities,
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
      const exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries),
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

    const { initialBNF, initialContent, initialStartRuleName, initialLexicalEntries } = this.constructor,
          bnf = initialBNF, ///
          content = initialContent, ///
          startRuleName = initialStartRuleName, ///
          lexicalEntries = initialLexicalEntries; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setStartRuleName(startRuleName);

    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static initialBNF = ` 
      
    document                             ::=   axiom ;
  
    axiom                                ::=   "Axiom" "(" label ")" <END_OF_LINE> consequence ;
    
    consequence                          ::=   unqualifiedStatement ;
    
    unqualifiedStatement!                ::=   statement... <END_OF_LINE> ;
    
    argument                             ::=   term | type ;
    
    label                                ::=   [name] ;
    
    statement!                           ::=   argument "=" argument
    
                                           |   statement ( inclusion | substitution )?
                                                      
                                           ;
       
  `;

  static initialContent = `Axiom (PredecessorsOfSuccessorsOfNaturalNumbers)
  n = predecessor(successor(n))
  `;

  static initialStartRuleName = "";

  static initialLexicalEntries = [
    {
      "special": "^(?:,|::|:|\\|-|\\|=|\\(|\\)|\\[|\\]|\\.\\.\\.)"
    },
    {
      "primary-keyword": "^(?:Axiom)\\b"
    },
    {
      "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
    },
    {
      "unassigned": "^[^\\s]+"
    }
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
        exampleLexer = ExampleLexer.fromEntries(entries);

  return exampleLexer;
}

function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        exampleParser = new ExampleParser(startRule, ruleMap);

  return exampleParser;
}
