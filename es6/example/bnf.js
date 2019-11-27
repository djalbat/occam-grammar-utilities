'use strict';

const exampleBNF = `

expression         ::=  compoundExpression

                     |  "(" expression ")"

                     |  term

                     ;

compoundExpression ::=  expression operator expression ;

operator           ::= "+" | "-" | "/" | "*" ;

term               ::= /\\d+/ ;

`;

module.exports = exampleBNF;
