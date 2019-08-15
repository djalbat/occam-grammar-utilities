'use strict';

const exampleBNF = `

  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\\d+/ ;

`;

module.exports = exampleBNF;

/*



  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;



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