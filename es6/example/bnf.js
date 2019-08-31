'use strict';

const exampleBNF = `

  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression

                            | "xyz"

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\\d+/ ;

`;

module.exports = exampleBNF;

/*












  optionalPart     ::=  part "?"

                     |  "abc"

                     ;

  zeroOrMoreParts  ::=  part "*"

                     |  "def"

                     ;

  part             ::=  optionalPart "."

                     |  zeroOrMoreParts "."

                     |  "xyz"

                     ;



  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;


  expression              ::= intermediateExpression

                            | "(" expression ")"

                            | term

                            ;

  intermediateExpression  ::= compoundExpression ;

  compoundExpression      ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;

 */
