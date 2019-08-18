'use strict';

const exampleBNF = `
  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= sumOfExpressions

                          | "xyz"

                          ;

  sumOfExpressions      ::= expression "+" expression

                          | "abc"

                          ;

  term                  ::= /\\d+/ ;
`;

module.exports = exampleBNF;

/*


  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= sumOfExpressions

                          | "xyz"

                          ;

  sumOfExpressions      ::= expression "+" expression

                          | "abc"

                          ;

  term                  ::= /\d+/ ;















  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= expression "+" expression

                          | "xyz"

                          ;

  term                  ::= /\d+/ ;

  expression            ::=  compoundExpression

                          |  expression_

                          ;

  compoundExpression    ::=  compoundExpression_ compoundExpression1~

                          |  compoundExpression_

                          ;

  compoundExpression_   ::=  expression_

                          |  "xyz"

                          ;

  compoundExpression1~  ::=  "+" expression compoundExpression1~? ;

  term                  ::= /\d+/ ;

  expression_           ::=  "(" expression ")"

                          |  term

                          ;















  L    ::=  L! "c" | "a" | "a" "b" ;




  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;






  expression1~ ::=

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


 */