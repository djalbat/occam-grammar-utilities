'use strict';

const exampleBNF = `




  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression      ::= expression operator expression

                            | "xyz"

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



 */