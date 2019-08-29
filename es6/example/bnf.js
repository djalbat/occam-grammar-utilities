'use strict';

const exampleBNF = `

  expression              ::= expression operator expression

                            | "(" expression ")"

                            | term

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\\d+/ ;
`;

module.exports = exampleBNF;

/*







  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | expression "/" expression

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;










  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;






  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;





  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;









  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression      ::= expression operator expression

                            | "xyz"

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;









  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= expression "+" expression

                          | "xyz"

                          ;

  term                  ::= /\d+/ ;








  document             ::=  ( rule | error )+ ;

  rule                 ::=  name "::=" definitions ";" ;

  definitions          ::=  definition ( "|" definition )* ;

  definition           ::=  part+ ;

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


  noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;

  optionalPart         ::=  part<NO_WHITESPACE>"?" ;

  zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;

  oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;

  lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;

  groupOfParts         ::=  "(" part part+ ")" ;

  choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

  name                 ::=  [name] ;

  ruleName             ::=  [name] ;

  regularExpression    ::=  [regular-expression] ;

  significantTokenType ::=  [type] ;

  terminalSymbol       ::=  [string-literal] ;

  endOfLine            ::=  "<END_OF_LINE>" ;

  epsilon              ::=  "ε" ;

  wildcard             ::=  "." ;

  error                ::=  . ;




 */