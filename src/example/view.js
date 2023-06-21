"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rulesUtilities, parserUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import BNFTextarea from "./view/textarea/bnf";
import ExampleLexer from "../lexer/example";
import ExampleParser from "../parser/example";
import ContentTextarea from "./view/textarea/content";
import ParseTreeTextarea from "./view/textarea/parseTree";
import StartRuleNameInput from "./view/input/startRuleName";
import AdjustedBNFTextarea from "./view/textarea/adjustedBNF";
import eliminateLeftRecursion from "../eliminateLeftRecursion";
import LexicalEntriesTextarea from "./view/textarea/lexicalEntries";

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

  static _initialBNF = `

     expression  ::=  term... <END_OF_LINE> ;
      
           term  ::=  "(" term ")" 
      
                   |  term ( 
                      
                             "/"  
                              
                             | 
                              
                             "*" 
                              
                             | 
                              
                             "+" 
                              
                             | 
                              
                             "-" 
                            
                           ) term
                   
                   |  number 
                                                     
                   ;
      
         number  ::=  /\\d+/ ;
        
  `

  static _initialContent = `(1+2/3)
`;

  static initialBNF = `

              S  ::=  A... <END_OF_LINE> ;
      
              A  ::=  B "f" 
      
                   |  "e"
                   
                   ;
      
              B  ::=  B "h" 
      
                   |  C "g"
                   
                   ;
              
              C  ::=  C "m" 
      
                   |  A "k"
                   
                   ;
  `

  static initialContent = `akmmghhf
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
