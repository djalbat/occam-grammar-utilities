'use strict';

const exampleBNF = `

  S ::= X "a" | Y ;

  X ::= Y | "b" ;

  Y ::= Z | "c" ;

  Z ::= X "d" | "e" ;
  

`

/*
`

  rules                ::=  rule+ ;
  
  rule                 ::=  ruleName "::=" definitions ";" ;
  
  definitions          ::=  definition ( "|" definition )* ;
  
  definition           ::=  part+ ;
  
  noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;

  optionalPart         ::=  part<NO_WHITESPACE>"?" ;
                          
  zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;
                          
  oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;
  
  groupOfParts         ::=  "(" part+ ")" ;
  
  choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

  part                 ::=  noWhitespacePart
                
                         |  optionalPart  
                
                         |  zeroOrMoreParts  
                
                         |  oneOrMoreParts  
                
                         |  groupOfParts  
                           
                         |  choiceOfParts  
                           
                         |  ruleName  
                
                         |  regularExpression 
                
                         |  significantTokenType 

                         |  terminalSymbol
                          
                         |  endOfLine
                
                         |  epsilon

                         |  wildcard
                              
                         ;

  ruleName             ::=  [name] ;

  regularExpression    ::=  [regularExpression] ;
  
  significantTokenType ::=  [type] ;

  terminalSymbol       ::=  [stringLiteral] ;
  
  endOfLine            ::=  "<END_OF_LINE>" ;
  
  epsilon              ::=  "ε" ;

  wildcard             ::=  "." ;

`
*/;

module.exports = exampleBNF;
