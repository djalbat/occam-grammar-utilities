'use strict';

const exampleBNF = `

  L    ::= L! "c"
   
         | "a"
          
         | "a" "b"
          
         ;
         
`;

module.exports = exampleBNF;

/*

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

















  L    ::=  L! "c" | "a" | "a" "b" ;




  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;



 */