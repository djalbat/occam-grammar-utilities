'use strict';

const exampleBNF = `

S ::= C ;

C ::= D E | "c" ;

D ::= E "d" ;

E ::= C "e" ;

`;

module.exports = exampleBNF;
