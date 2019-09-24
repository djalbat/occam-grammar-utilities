'use strict';

const exampleBNF = `
      document             ::=  ( rule | error )+ ;
      
      rule                 ::=  name "::=" definitions ";" ;
      
      definitions          ::=  definition ( "|" definition )* ;
      
      definition           ::=  part+ ;
      
      noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;
    
      optionalPart         ::=  part<NO_WHITESPACE>"?" ;
                              
      zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;

      oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;
      
      lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;

      groupOfParts         ::=  "(" part part+ ")" ;
      
      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;
    
      part                 ::=  noWhitespacePart
                    
                             |  optionalPart  
                    
                             |  zeroOrMoreParts
                    
                             |  oneOrMoreParts  
                    
                             |  lookAheadPart

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
    
      name                 ::=  [name] ;

      ruleName             ::=  [name] ;
    
      regularExpression    ::=  [regular-expression] ;
      
      significantTokenType ::=  [type] ;
    
      terminalSymbol       ::=  [string-literal] ;
      
      endOfLine            ::=  "<END_OF_LINE>" ;
      
      epsilon              ::=  "ε" ;
    
      wildcard             ::=  "." ;

      error                ::=  . ;
`;

module.exports = exampleBNF;

/*



    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;





  expression                  ::= parenthesisedExpression

                                | compoundExpression

                                | negatedExpression

                                | term

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;

  compoundExpression          ::= expression operator expression ;

  negatedExpression           ::= "-"<NO_WHITESPACE>expression ;

  operator                    ::= "+" | "-" | "/" | "*" ;

  term                        ::= /\d+/ ;







    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;








  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [custom] ;







  S ::= A C ;

  A ::= "." B ;

  B ::= A | "." C ;

  C ::= D E ;

  D ::= C ;

  E ::= "." ;
























  expression    ::= "(" expression ")" expression~

                  | term expression~

                  ;

  expression~   ::= operator expression expression~

                  | ε

                  ;

  operator      ::= "+"

                  | "/"

                  ;

  term          ::= /\d+/ ;














  expression              ::= intermediateExpression

                            | "(" expression ")"

                            | term

                            ;

  intermediateExpression  ::= compoundExpression ;

  compoundExpression      ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;














  expression            ::=  compoundExpression

                          |  "(" expression ")"

                          |  term

                          ;

  compoundExpression    ::=  arithmeticExpression ;

  arithmeticExpression  ::=  expression "+" expression

                          |  expression "/" expression

                          ;

  term                  ::=  /\d+/ ;














  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;














 */
