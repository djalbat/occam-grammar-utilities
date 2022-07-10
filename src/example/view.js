"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { rulesUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } from "../index"; ///

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

import { rulesFromBNF } from "../utilities/parser";
import { UNASSIGNED_ENTRY } from "../constants";
import { rulesFromStartRuleAndRuleMap } from "../utilities/rules";

const { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

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

      const abridged = true;

      parseTree = node.asParseTree(tokens, abridged);
    }

    return parseTree;
  }

  keyUpHandler(event, element) {
    this.changeHandler();
  }

  changeHandler(event, element) {
    // try {
      const bnf = this.getBNF(),
            startRuleName = this.getStartRuleName();

      let rules = rulesFromBNF(bnf);

      const ruleMap = ruleMapFromRules(rules);

      let startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);

      startRule = eliminateLeftRecursion(startRule, ruleMap);

      rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setAdjustedBNF(adjustedBNF);

      const parseTree = this.getParseTree(startRule, ruleMap);

      this.setParseTree(parseTree);
    // } catch (error) {
    //   console.log(error);
    // }
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
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={keyUpHandler} />
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
  
    document                   ::=  ( preamble ( statement | error )* ) | ( statement | error )+ ;



    preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;



    statement                  ::=  class

                                 |  function

                                 |  generator

                                 |  "export"? ( ( "var" var ( "," var )* )

                                              | ( "let" let ( "," let )* )

                                              | ( "const" const ( "," const )* )

                                              ) ";"

                                 |  "export" "default" expression ";"

                                 |  "export" "default"? ( class | function | generator )

                                 |  "export" "default" ( anonymousClass | anonymousFunction | anonymousGenerator )

                                 |  "export" ( ( "export" "{" names "}" ( "from" [string-literal] )? )

                                             | ( "export" "const" "{" fields "}" "=" expression )

                                             | ( "export" "{" "default" "}" "from" [string-literal] )

                                             | ( "export" "*" ( "as" name )? "from" [string-literal] )

                                             ) ";"

                                 |  "import" ( [string-literal]

                                             | ( name "from" [string-literal] )

                                             | ( "{" names "}" "from" [string-literal] )

                                             | ( "*" "as" name "from" [string-literal] )

                                             ) ";"

                                 |  label ":" statement

                                 |  "{" statement* "}"

                                 |  "break" ";"

                                 |  "continue" ";"

                                 |  "if" "(" expression ")" statement ( "else" statement )?

                                 |  "switch" "(" expression ")" "{" case* defaultCase? "}"

                                 |  "return" expression? ";"

                                 |  "throw" expression ";"

                                 |  "delete" expression ";"

                                 |  expression... ";"

                                 |  try ( ( catch* finally ) | catch+ )

                                 |  "do" statement "while" "(" expression ")" ";"

                                 |  "for" "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement

                                 |  "for" "(" variable "in" expression ")" statement

                                 |  "for" "await"? "(" variable "of" expression ")" statement

                                 |  "while" "(" expression ")" statement

                                 |  "debugger" ";"?

                                 ;



    class                      ::=  "class" name classBody ;

    function                   ::=  "async"? "function" name functionBody ;

    generator                  ::=  "async"? "function" <NO_WHITESPACE>"*" name functionBody ;

    anonymousClass             ::=  "class" classBody ;

    anonymousFunction          ::=  "async"? "function" functionBody ;

    anonymousGenerator         ::=  "async"? "function" <NO_WHITESPACE>"*" functionBody ;

    constructor                ::=  "constructor" functionBody ;

    method                     ::=  "static"? name functionBody ;

    field                      ::=  "static"? name "=" expression ";" ;



    classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;

    functionBody               ::=  "(" arguments? ")" "{" statement* "}" ;



    case                       ::=  "case" expression ":" statement ( "break" ";" )? ;

    defaultCase                ::=  "default" ":" statement ( "break" ";" )? ;

    try                        ::=  "try" "{" statement+ "}" ;

    catch                      ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;

    finally                    ::=  "finally" "{" statement+ "}" ;

    initialiser                ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;



    var                        ::=  variable ( "=" expression )? | destructure "=" expression ;

    let                        ::=  variable ( "=" expression )? | destructure "=" expression;

    const                      ::=  ( variable | destructure ) "=" expression ;

    destructure                ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"

                                 |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"

                                 ;



    expression                 ::=  jsx

                                 |  json

                                 |  arrowFunction

                                 |  templateLiteral

                                 |  anonymousFunction

                                 |  "(" expression ")"

                                 |  "{" ( property ( "," property )* )? "}"

                                 |  "[" ( expression ( "," expression )* ","? )? "]"

                                 |  "typeof" ( expression | ( "(" expression ")") )

                                 |  "void" ( expression | ( "(" expression ")") )

                                 |  "new" name<NO_WHITESPACE>"(" arguments? ")"

                                 |  [operator]<NO_WHITESPACE>expression

                                 |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )

                                                             | ( "[" expressions "]" )

                                                             | ( "(" expressions? ")" )

                                                             | templateLiteral

                                                             | [operator]

                                                             )

                                 |  expression ( ( [operator] expression )

                                               | ( "?" expression ":" expression )

                                               | ( "instanceof" expression )

                                               | ( "in" expression )

                                               )

                                 |  [number]

                                 |  variable

                                 |  primitive

                                 |  importMeta

                                 |  [string-literal]

                                 |  "super" | "this" | "true" | "false" | "null" | "undefined"

                                 ;



    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;

    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;

    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;

    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;

    jsxAttribute               ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;



    json                       ::=  jsonArray | jsonObject ;

    jsonArray                  ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;

    jsonObject                 ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;

    jsonElement                ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;



    arrowFunction              ::=  simpleArrowFunction | complexArrowFunction ;

    arrowFunctionBody          ::=  expression | ( "{" statement* "}" ) ;

    simpleArrowFunction        ::=  argument "=>" arrowFunctionBody ;

    complexArrowFunction       ::=  "(" arguments? ")" "=>" arrowFunctionBody ;



    templateLiteral            ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;



    string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;

    property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;

    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



    expressions                ::=  expression ( "," expression )* ;

    arguments                  ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



    spreadArgument             ::=  "..."<NO_WHITESPACE>[identifier] ;

    argument                   ::=  expression | [identifier] ( "=" expression )? ;

    variable                   ::=  [identifier] ;

    label                      ::=  [identifier] ;

    name                       ::=  [identifier] ;



    error                      ::=  . ;


              
`;

  static initialContent = "chfegegh";

  static initialStartRuleName = "S";

  static initialLexicalPattern = ".";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
