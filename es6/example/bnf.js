'use strict';

const exampleBNF = `

S ::= C ;

C ::= D | "c" ;

D ::= ( F | ( "a" E ) ) "d" ;

E ::= C "e" ;

`;

module.exports = exampleBNF;
