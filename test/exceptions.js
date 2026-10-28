"use strict";

const { adjustedBNFFromBNF } = require("./helpers/bnf");

describe.skip("Exceptions", () => {
  describe("there are no concumsing parts before a cut", () => {
    const bnf = `
  
      S ::= ( A ... <END_OF_LINE> ) ;
      
      A ::= A A? \` "g"
      
          | "e"
          
          ;
          
      
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("the tail of a repeating definition is empty", () => {
    const bnf = `
  
      S ::= ( A ... <END_OF_LINE> ) ;
      
      A ::= A
      
          | "e"
          
          ;
          
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("there is no corresponding rule for a rule name part", () => {
    const bnf = `
  
      S ::= A ;
      
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("the root rule of a cyle has no reduceable definitions", () => {
    const bnf = `

      A ::= B "f" ;
  
      B ::= C "g" ;
  
      C ::= A "h" ;
    
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("the first part of a repeating definition is not a rule name part", () => {
    const bnf = `
  
      S ::= ( A ... <END_OF_LINE> ) ;
      
      A ::= A? "g"
      
          | "e"
          
          ;
          
      
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });
});
