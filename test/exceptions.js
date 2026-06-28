"use strict";

const { adjustedBNFFromBNF } = require("./utilities/bnf");

describe("Exceptions", () => {
  describe("a left recursive definition is occluded", () => {
    const bnf = `
  
      A  ::=  B
      
           |  C
      
           ;
      
      B  ::=  C? A ;
      
      C  ::=  . ;
        
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("all the reduced rules in a cycle are missing", () => {
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

  describe("a directly repeated rule is non-consuming", () => {
    const bnf = `

      A ::= A "c"
      
          | B C
      
          | "e"
      
          ;
  
      B ::= A "f"?
      
          | "g"
      
          ;
        
      C ::= "f"? D ;

      D ::= "g"? C ;

    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("a directly repeated rule is not non-consuming", () => {
    const bnf = `
  
      A ::= "d"
      
          | B "g"
      
          | "e"
      
          ;
      
      B ::= "b"
      
          | A
      
          | "c"
  
          ;
  
    `;

    it("does not throw an exception", () => {
      assert.doesNotThrow(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("two left recursive definitions in a cycle are mismatched", () => {
    const bnf = `
   
      A ::= B "h"
      
          | "d"
      
          ;
      
      B ::= A "g"
      
          | A+ "f"
      
          | "c"
      
          ;
      
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("the first part of a left recursive definition is qualified", () => {
    const bnf = `
   
      A ::= "c"
  
          | A "f" "g"
      
          | "d"
  
          | A+ "h"
      
          | "e"
      
          ;

    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("the first part of a left recursive definition is look-ahead", () => {
    const bnf = `
   
      A ::= A... "h"
      
          | "e"
      
          ;

    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("a cycle where some but not all of the reduced rules are missing", () => {
    const bnf = `
  
      A ::= B "g" 
       
          | "c"
          
          ;
  
      B ::= A "h" ;
  
    `;

    it("does not throw an exception", () => {
      assert.doesNotThrow(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("a left recursive definition in a cycle of length one is complex", () => {
    const bnf = `
  
      A ::= "f"
      
          | ( A | B ) "g"
      
          | "h"
      
          ;
      
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  describe("a left recursive definition in a cycle of length two is complex", () => {
    const bnf = `
  
      A ::= "d"
      
          | B "g"
      
          | "e"
      
          ;
      
      B ::= "c" 
      
          | ( A | C ) "h"
      
          | "c"
  
          ;
  
    `;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });
});
