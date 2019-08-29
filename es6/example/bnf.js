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
