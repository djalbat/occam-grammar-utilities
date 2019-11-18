'use strict';

const exampleBNF = `

  expression          ::=  expression operator expression

                        |  "(" expression ")"

                        |  term

                        ;



`;

module.exports = exampleBNF;

/*

    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;


  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;



  compoundExpression  ::=  expression operator expression ;


  C ::= D "a" ;

  D ::= C "b" ;



  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;



  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;





  expression          ::=  expression operator expression

                        |  "(" expression ")"

                        |  term

                        ;

  operator            ::=  operator "."

                        |  "+"

                        |  "-"

                        |  "*"

                        |  "/"

                        ;

  term                ::= /\d+/ ;



  S ::= A C ;

  A ::= "." B C ;

  B ::= A | "." C ;

  C ::= D E ;

  D ::= C "." ;

  E ::= "." ;




  C ::= D "e"

      | "f"

      ;

  D ::= C ;










  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;


  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;





  expression              ::=  sumOfExpressions

                            |  differenceOfExpressions

                            |  "(" expression ")"

                            |  term

                            ;

  sumOfExpressions        ::=  expression "+" expression ;

  differenceOfExpressions ::=  expression "-" expression ;

  term                    ::= /\d+/ ;














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






  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [custom] ;



























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
