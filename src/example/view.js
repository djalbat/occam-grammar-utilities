"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import rewriteNodes from "../rewriteNodes";
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
      const basicLexer = basicLexerFromLexicalPattern(lexicalPattern),
            basicParser =  basicParserFromRulesAndStartRuleName(rules, startRuleName),
            tokens = basicLexer.tokenise(content),
            node = basicParser.parse(tokens);

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
      A ::= "d" 
    
        | B
    
        | "e"
    
        ;
    
    B ::= C C ;
    
    C ::= "b"
    
        | A
    
        | "c"

        ;
`;

  static initialContent = "d";

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

function basicParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}

` 
document                             ::=   ( topLevelInstruction | verticalSpace | error )+ ;



topLevelInstruction                  ::=   rule 

                                       |   axiom 

                                       |   lemma 

                                       |   theorem 

                                       |   conjecture 

                                       |   metalemma 

                                       |   metatheorem 

                                       |   metaconjecture

                                       |   typeDeclaration 
                                           
                                       |   variableDeclaration 
                                           
                                       |   comparatorDeclaration 
                                           
                                       |   combinatorDeclaration 
                                           
                                       |   constructorDeclaration 
                                           
                                       |   disjointTypeDeclaration 
                                           
                                       |   metavariableDeclaration 
                                           
                                       |   dependentTypeDeclaration 
                                           
                                       |   typesDeclaration 
                                           
                                       |   variablesDeclaration 
                                           
                                       |   comparatorsDeclaration 
                                           
                                       |   combinatorsDeclaration 
                                           
                                       |   constructorsDeclaration 
                                           
                                       |   disjointTypesDeclaration 
                                           
                                       |   metavariablesDeclaration 
                                           
                                       |   dependentTypesDeclaration 
                                           
                                       ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;



rule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

axiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; 

lemma                                ::=   "Lemma" "(" label ( "," label )* ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

theorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;

conjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;

metalemma                            ::=   "Metalemma" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;

metaconjecture                       ::=   "Metaconjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) ;

typeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;
 
variableDeclaration                  ::=   "Variable" variable ":" type <END_OF_LINE> ;
 
comparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;
 
constructorDeclaration               ::=   "Constructor" term ( ":" type )? <END_OF_LINE> ;
 
disjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;
                                       
metavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;
                                       
typesDeclaration                     ::=   "Types" type ( ":"  type )? <END_OF_LINE> ;

variablesDeclaration                 ::=   "Variables" variable ( "," variable )+ ":" type <END_OF_LINE> ;
 
comparatorsDeclaration               ::=   "Comparators" statement ( "," statement )+ <END_OF_LINE> ;
 
combinatorsDeclaration               ::=   "Combinators" expression ( "," expression )+ ( ":" type )? <END_OF_LINE> ;
 
constructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" type )? <END_OF_LINE> ;
 
disjointTypesDeclaration             ::=   "DisjointTypes" disjointType ( "," disjointType )+ ":" type ( "," type )+ <END_OF_LINE> ;
 
metavariablesDeclaration             ::=   "Metavariables" metavariable ( "," metavariable )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;
 
dependentTypesDeclaration            ::=   "DependentTypes" dependentType ( "," dependentType )+ ":" type <END_OF_LINE> ;
  

  
premise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;

premises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> unqualifiedMetastatement ;



metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metastatementDefinition*

                                           metaProofDerivation? 
                                          
                                           qualifiedMetastatement ;
                                          
                                          

metaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+  

                                           "Therefore" <END_OF_LINE> ;                                           

metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ 

                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;

metaSublemma                         ::=   "Suppose" <END_OF_LINE> 

                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;



proof                                ::=   "Proof" <END_OF_LINE> 

                                           statementDefinition*

                                           proofDerivation? 
                                          
                                           qualifiedStatement ;
                                                                                         
                                                                                         
                                                                                         
proofDerivation                      ::=   ( sublemma | qualifiedStatement )+ 

                                           "Therefore" <END_OF_LINE> ;

indicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ 

                                           "Hence" <END_OF_LINE> qualifiedStatement ;

sublemma                             ::=   "Suppose" <END_OF_LINE> 

                                           ( subLemma | qualifiedStatement )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( subLemma | qualifiedStatement )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> qualifiedStatement ;



metastatementDefinition              ::=   "Let" unqualifiedMetastatement ;                                           
                                          
statementDefinition                  ::=   "Let" unqualifiedStatement ;                                           



unqualifiedMetastatement!            ::=   metastatement <END_OF_LINE> 

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedMetastatement!              ::=   metastatement qualification? <END_OF_LINE> 

                                       |   nonsense... qualification? <END_OF_LINE> 
                                        
                                       ;

unqualifiedStatement!                ::=   statement <END_OF_LINE>

                                       |   nonsense... <END_OF_LINE> 
                                       
                                       ;

qualifiedStatement!                  ::=   statement qualification? <END_OF_LINE> 

                                       |   nonsense... qualification? <END_OF_LINE> 
                                       
                                       ;



nonsense                             ::=   ( "by" | "from" | [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;



argument                             ::=   type | expression ;



qualification                        ::=   ( "by" | "from" ) reference ;



dependentType                        ::=   [name]<NO_WHITESPACE>"(" term ")" ;



metavariable                         ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

reference                            ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

context                              ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;

label                                ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;



disjointType                         ::=   [name] ;

variable                             ::=   . ; 

type                 ::= "Number"

                       | "RealNumber"

                       | "RationalNumber"

                       | "Integer"

                       | "NaturalNumber"

                       | "NonZeroInteger"

                       | _

                       ;

term!                ::= arithmeticTerm

                       | _

                       ;

expression!          ::= arithmeticExpression

                       | _

                       ;

statement!           ::= "(" statement ")"

                       | "¬" <NO_WHITESPACE> statement

                       | statement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) statement

                       | arithmeticAtatement

                       | typeAssertion

                       | equality

                       ;

typeAssertion        ::= expression ":" type ;

equality             ::= expression "=" expression ;

metastatement!       ::= [name] "=" naturalNumber

                       | "(" metastatement ")"

                       | "¬" <NO_WHITESPACE> metastatement

                       | metastatement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) metastatement

                       | contextDefinition

                       | proofAssertion

                       | metavariable

                       | subproof

                       ;

contextDefinition    ::= context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion       ::= context "|-" judgement ;

judgement            ::= reference "::" metastatement ;

subproof             ::= "[" metastatement "]" "..." metastatement ;

arithmeticTerm       ::= rationalNumber

                       | integer

                       | naturalNumber

                       | variable

                       ;

arithmeticExpression ::= "(" argument ")"

                       | argument ( "+" | "-" | "×" | "÷" ) argument

                       | arithmeticTerm

                       ;

arithmeticAtatement  ::= argument ( "<" | "<=" | ">=" | ">" ) argument ;

naturalNumber        ::= "successor" <NO_WHITESPACE> "(" argument ")"

                       | "predecessor" <NO_WHITESPACE> "(" argument ")"

                       | "zero"

                       | variable

                       ;

integer              ::= "successor" <NO_WHITESPACE> "(" argument ")"

                       | "predecessor" <NO_WHITESPACE> "(" argument ")"

                       | "-" <NO_WHITESPACE> argument

                       | naturalNumber

                       | variable

                       ;

rationalNumber       ::= argument <NO_WHITESPACE> "/" <NO_WHITESPACE> argument

                       | variable

                       ;
`