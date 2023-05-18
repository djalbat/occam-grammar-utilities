"use strict";

const { assert } = require("chai");

const { rulesUtilities, parserUtilities } = require("occam-parsers");

const { rewriteNodes, ExampleLexer, ExampleParser, eliminateLeftRecursion } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
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

  describe("a directly repeated rule is effectively empty", () => {
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

  describe("a directly repeated rule is not effectively empty", () => {
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

  describe("a cycle of length two", () => {
    const bnf = `
  
      S ::= A... <END_OF_LINE> ;

      A ::= B "g"
      
          | "e"
      
          ;
      
      B ::= A "h"
      
          | "d"
  
          ;

    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
          
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~* 
        
              | B_ B~* A~B
              
              ;
        
        B   ::= B_ B~* 
        
              | A_ A~* B~A 
              
              ;
        
        A_  ::= "e" ;
        
        B_  ::= "d" ;
        
        A~B ::= "g" ;
        
        B~A ::= "h" ;
        
        A~  ::= B~A B~* A~B ;
        
        B~  ::= A~B A~* B~A ;
      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `ehg
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
                
                                        S                  
                                        |                  
                            -------------------------      
                            |                       |      
                            A                 <END_OF_LINE>
                            |                              
                 ----------------------                    
                 |                    |                    
                 B              g[unassigned]              
                 |                                         
          ---------------                                  
          |             |                                  
          A       h[unassigned]                            
          |                                                
    e[unassigned]                                          
             
      `));
    });
  });

  describe("a cycle of length three", () => {
    const bnf = `
    
      S  ::=  F... <END_OF_LINE> ;
      
      A  ::=  E 
      
           |  T 
                                             
           ;
      
      E  ::=  F ;
      
      T  ::=  "n" ;
      
      F  ::=  "(" A ")"
                             
           |  A "+" A
      
           ;
       
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
        S   ::= F... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | F_ F~* E~F E~* A~E
        
              ;
        
        E   ::= F_ F~* E~F
        
              | A_ A~* F~A F~* E~F
        
              ;
        
        T   ::= "n" ;
        
        F   ::= F_ F~*
        
              | A_ A~* F~A
        
              ;
        
        F_  ::= "(" A ")" ;
        
        A_  ::= T ;
        
        F~A ::= "+" A ;
        
        A~E ::= ε ;
        
        E~F ::= ε ;
        
        F~  ::= E~F E~* A~E A~* F~A ;
        
        A~  ::= F~A F~* E~F E~* A~E ;
        
        E~  ::= A~E A~* F~A F~* E~F ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `(n+n)
`,
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                           S                           
                                                           |                           
                                      -------------------------------------------      
                                      |                                         |      
                                      F                                   <END_OF_LINE>
                                      |                                                
          ---------------------------------------------------------                    
          |                           |                           |                    
    ([unassigned]                     A                     )[unassigned]              
                                      |                                                
                                      E                                                
                                      |                                                
                                      F                                                
                                      |                                                
                        -----------------------------                                  
                        |             |             |                                  
                        A       +[unassigned]       A                                  
                        |                           |                                  
                        T                           T                                  
                        |                           |                                  
                  n[unassigned]               n[unassigned]                            

      `));
    });
  });

  describe("another cycle of length two", () => {
    const bnf = `
    
      S ::= E... <END_OF_LINE> ;
  
      A ::= E ;
      
      E ::= A "+" A
      
          | V
      
          ;
      
      V ::= . ;
       
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                  
        S   ::= E... <END_OF_LINE> ;
        
        A   ::= E_ E~* A~E ;
        
        E   ::= E_ E~* ;
        
        V   ::= . ;
        
        E_  ::= V ;
        
        E~A ::= "+" A ;
        
        A~E ::= ε ;
        
        E~  ::= A~E A~* E~A ;
        
        A~  ::= E~A E~* A~E ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `n+m
`,
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                      S                    
                                      |                    
                        -----------------------------      
                        |                           |      
                        E                     <END_OF_LINE>
                        |                                  
          -----------------------------                    
          |             |             |                    
          A       +[unassigned]       A                    
          |                           |                    
          E                           E                    
          |                           |                    
          V                           V                    
          |                           |                    
    n[unassigned]               m[unassigned]              
    
      `));
    });
  });

  describe("two cycles of length one and two", () => {
    const bnf = `
    
      S ::= A... <END_OF_LINE> ;
  
      A ::= A "c"
      
          | B "d"
      
          | "e"
      
          ;
  
      B ::= A "f"
      
          | "g"
      
          ;
      
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | B_ B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | A_ A~* B~A
        
              ;
        
        A_  ::= "e" ;
        
        B_  ::= "g" ;
        
        A~A ::= "c" ;
        
        A~B ::= "d" ;
        
        B~A ::= "f" ;
        
        A~  ::= A~A
        
              | B~A B~* A~B
        
              ;
        
        B~  ::= A~B A~* B~A ;
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `efd
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                        S                  
                                        |                  
                            -------------------------      
                            |                       |      
                            A                 <END_OF_LINE>
                            |                              
                 ----------------------                    
                 |                    |                    
                 B              d[unassigned]              
                 |                                         
          ---------------                                  
          |             |                                  
          A       f[unassigned]                            
          |                                                
    e[unassigned]                                          

      `));
    });
  });

  describe("cycles of length one, two and three", () => {
    const bnf = `
    
      S ::= A... <END_OF_LINE> ;
  
      A ::= B "f"
      
          | A "k"
      
          | "g"
      
          ;
  
      B ::= C "d"
      
          | A "h"
      
          | "e"
      
          ;
      
      C ::= D "l"
      
          | "h"
      
          ;
      
      D ::= B "r"
      
          | A "m"
      
          | "s"
      
          ;
    
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                      
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | B_ B~* A~B
        
              | C_ C~* B~C B~* A~B
        
              | D_ D~* C~D C~* B~C B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | A_ A~* B~A
        
              | C_ C~* B~C
        
              | D_ D~* C~D C~* B~C
        
              | A_ A~* D~A D~* C~D C~* B~C
        
              ;
        
        C   ::= C_ C~*
        
              | D_ D~* C~D
        
              | A_ A~* D~A D~* C~D
        
              | B_ B~* A~B A~* D~A D~* C~D
        
              | B_ B~* D~B D~* C~D
        
              ;
        
        D   ::= D_ D~*
        
              | A_ A~* D~A
        
              | B_ B~* A~B A~* D~A
        
              | C_ C~* B~C B~* A~B A~* D~A
        
              | B_ B~* D~B
        
              | C_ C~* B~C B~* D~B
        
              ;
        
        A_  ::= "g" ;
        
        B_  ::= "e" ;
        
        C_  ::= "h" ;
        
        D_  ::= "s" ;
        
        A~A ::= "k" ;
        
        B~C ::= "d" ;
        
        C~D ::= "l" ;
        
        D~B ::= "r" ;
        
        A~B ::= "f" ;
        
        D~A ::= "m" ;
        
        B~A ::= "h" ;
        
        A~  ::= A~A
        
              | D~A D~* C~D C~* B~C B~* A~B
        
              | B~A B~* A~B
        
              ;
        
        B~  ::= D~B D~* C~D C~* B~C
        
              | A~B A~* D~A D~* C~D C~* B~C
        
              | A~B A~* B~A
        
              ;
        
        C~  ::= B~C B~* D~B D~* C~D
        
              | B~C B~* A~B A~* D~A D~* C~D
        
              ;
        
        D~  ::= C~D C~* B~C B~* D~B
        
              | C~D C~* B~C B~* A~B A~* D~A
        
              ;
                                
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `gkhrldf
`,
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
              
                                                                                               S                   
                                                                                               |                   
                                                                                 ----------------------------      
                                                                                 |                          |      
                                                                                 A                    <END_OF_LINE>
                                                                                 |                                 
                                                                   ----------------------------                    
                                                                   |                          |                    
                                                                   B                    f[unassigned]              
                                                                   |                                               
                                                     ----------------------------                                  
                                                     |                          |                                  
                                                     C                    d[unassigned]                            
                                                     |                                                             
                                        ---------------------------                                                
                                        |                         |                                                
                                        D                   l[unassigned]                                          
                                        |                                                                          
                            -------------------------                                                              
                            |                       |                                                              
                            B                 r[unassigned]                                                        
                            |                                                                                      
                 ----------------------                                                                            
                 |                    |                                                                            
                 A              h[unassigned]                                                                      
                 |                                                                                                 
          ---------------                                                                                          
          |             |                                                                                          
          A       k[unassigned]                                                                                    
          |                                                                                                        
    g[unassigned]                                                                                                  

      `));
    });
  });

  describe("two intersecting cycles of length two", () => {
    const bnf = `
  
      A  ::=  C "h"  
                     
           |  "d"    
                     
           ;         
                     
      B  ::=  C "k"  
                     
           |  "f"    
                     
           ;         
                     
      C  ::=  A "g"  
                     
           |  B "c"  
                     
           |  "a"    
                     
           ;         
                   
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
          
        A   ::= A_ A~*
        
              | C_ C~* A~C
        
              ;
        
        B   ::= B_ B~*
        
              | C_ C~* B~C
        
              ;
        
        C   ::= C_ C~*
        
              | B_ B~* C~B
        
              | A_ A~* C~A
        
              ;
        
        A_  ::= "d" ;
        
        C_  ::= "a" ;
        
        B_  ::= "f" ;
        
        A~C ::= "h" ;
        
        C~A ::= "g" ;
        
        C~B ::= "c" ;
        
        B~C ::= "k" ;
        
        A~  ::= C~A C~* A~C ;
        
        C~  ::= A~C A~* C~A
        
              | B~C B~* C~B
        
              ;
        
        B~  ::= C~B C~* B~C ;
           
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `akch
`,
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                        A                  
                                        |                  
                            -------------------------      
                            |                       |      
                            C                 h[unassigned]
                            |                              
                 ----------------------                    
                 |                    |                    
                 B              c[unassigned]              
                 |                                         
          ---------------                                  
          |             |                                  
          C       k[unassigned]                            
          |                                                
    a[unassigned]                                          
  
      `));
    });
  });

  describe("yet two more cycles of length one and two", () => {
    const bnf = `
  
      S ::= A... <END_OF_LINE> ;

      A ::= B "h" 
        
          | "g" 
   
          ;
  
      B ::= B "e" "f"
      
          | A "d" 
      
          | "c" 
  
          ;
                
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | B_ B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | A_ A~* B~A
        
              ;
        
        B_  ::= "c" ;
        
        A_  ::= "g" ;
        
        B~B ::= "e" "f" ;
        
        A~B ::= "h" ;
        
        B~A ::= "d" ;
        
        B~  ::= B~B
        
              | A~B A~* B~A
        
              ;
        
        A~  ::= B~A B~* A~B ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `gdefefh
`,
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                                                            S                      
                                                                                            |                      
                                                                            ---------------------------------      
                                                                            |                               |      
                                                                            A                         <END_OF_LINE>
                                                                            |                                      
                                                          -------------------------------------                    
                                                          |                                   |                    
                                                          B                             h[unassigned]              
                                                          |                                                        
                                   ----------------------------------------------                                  
                                   |                              |             |                                  
                                   B                        e[unassigned] f[unassigned]                            
                                   |                                                                               
                 ------------------------------------                                                              
                 |                    |             |                                                              
                 B              e[unassigned] f[unassigned]                                                        
                 |                                                                                                 
          ---------------                                                                                          
          |             |                                                                                          
          A       d[unassigned]                                                                                    
          |                                                                                                        
    g[unassigned]                                                                                                  

      `));
    });
  });

  describe("a cycle with an empty indirectly repeated rule", () => {
    const bnf = `
  
      S ::= B... <END_OF_LINE> ;
        
      A ::= B
      
          | "c"
      
          ;
      
      B ::= A "e" 
      
          | "d"
      
          ;
  
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
              
        S   ::= B... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | B_ B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | A_ A~* B~A
        
              ;
        
        B_  ::= "d" ;
        
        A_  ::= "c" ;
        
        B~A ::= "e" ;
        
        A~B ::= ε ;
        
        B~  ::= A~B A~* B~A ;
        
        A~  ::= B~A B~* A~B ;
              
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `dee
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                                        S                  
                                        |                  
                            -------------------------      
                            |                       |      
                            B                 <END_OF_LINE>
                            |                              
                 ----------------------                    
                 |                    |                    
                 A              e[unassigned]              
                 |                                         
                 B                                         
                 |                                         
          ---------------                                  
          |             |                                  
          A       e[unassigned]                            
          |                                                
          B                                                
          |                                                
    d[unassigned]                                          
             
      `));
    });
  });

  describe("two overlapping cycles of lengths two and three", () => {
    const bnf = `
  
      S   ::= A... <END_OF_LINE> ;

      A  ::=  B "h" 
        
           |  C "k" 
        
           |  "b" 
      
           ;
      
      B  ::=  A "f" 
      
           |  "d"
           
           ;
      
      C  ::=  A "e" 
      
           |  "a"
           
           ;

    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                      
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | C_ C~* A~C
        
              | B_ B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | A_ A~* B~A
        
              ;
        
        C   ::= C_ C~*
        
              | A_ A~* C~A
        
              ;
        
        A_  ::= "b" ;
        
        B_  ::= "d" ;
        
        C_  ::= "a" ;
        
        A~B ::= "h" ;
        
        B~A ::= "f" ;
        
        A~C ::= "k" ;
        
        C~A ::= "e" ;
        
        A~  ::= B~A B~* A~B
        
              | C~A C~* A~C
        
              ;
        
        B~  ::= A~B A~* B~A ;
        
        C~  ::= A~C A~* C~A ;
                      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `bekfh
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                                   S                   
                                                                   |                   
                                                     ----------------------------      
                                                     |                          |      
                                                     A                    <END_OF_LINE>
                                                     |                                 
                                        ---------------------------                    
                                        |                         |                    
                                        B                   h[unassigned]              
                                        |                                              
                            -------------------------                                  
                            |                       |                                  
                            A                 f[unassigned]                            
                            |                                                          
                 ----------------------                                                
                 |                    |                                                
                 C              k[unassigned]                                          
                 |                                                                     
          ---------------                                                              
          |             |                                                              
          A       e[unassigned]                                                        
          |                                                                            
    b[unassigned]                                                                      
  
      `));
    });
  });

  describe("two intersecting cycles of length two and three", () => {
    const bnf = `
    
      S ::= T... <END_OF_LINE> ;
  
      T ::= B
      
          | C
      
          | V
      
          ;
      
      A ::= T ;
      
      B::= "-" A
      
         | C
      
         | V
      
         ;
                            
      C ::= A "+" A
      
          | V
      
          ;
      
      V::= . ;
       
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                      
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= T_ T~*
        
              | C_ C~* T~C
        
              | B_ B~* T~B
        
              | C_ C~* B~C B~* T~B
        
              ;
        
        A   ::= T_ T~* A~T
        
              | C_ C~* T~C T~* A~T
        
              | B_ B~* T~B T~* A~T
        
              | C_ C~* B~C B~* T~B T~* A~T
        
              ;
        
        B   ::= B_ B~*
        
              | C_ C~* B~C
        
              | T_ T~* A~T A~* C~A C~* B~C
        
              ;
        
        C   ::= C_ C~*
        
              | T_ T~* A~T A~* C~A
        
              | B_ B~* T~B T~* A~T A~* C~A
        
              ;
        
        V   ::= . ;
        
        T_  ::= V ;
        
        B_  ::= "-" A
        
              | V
        
              ;
        
        C_  ::= V ;
        
        T~B ::= ε ;
        
        B~C ::= ε ;
        
        C~A ::= "+" A ;
        
        A~T ::= ε ;
        
        T~C ::= ε ;
        
        T~  ::= A~T A~* C~A C~* B~C B~* T~B
        
              | A~T A~* C~A C~* T~C
        
              ;
        
        B~  ::= T~B T~* A~T A~* C~A C~* B~C ;
        
        C~  ::= B~C B~* T~B T~* A~T A~* C~A
        
              | T~C T~* A~T A~* C~A
        
              ;
        
        A~  ::= C~A C~* B~C B~* T~B T~* A~T
        
              | C~A C~* T~C T~* A~T
        
              ;
                         
     `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `n+n
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
      
                                      S                    
                                      |                    
                        -----------------------------      
                        |                           |      
                        T                     <END_OF_LINE>
                        |                                  
                        B                                  
                        |                                  
                        C                                  
                        |                                  
          -----------------------------                    
          |             |             |                    
          A       +[unassigned]       A                    
          |                           |                    
          T                           T                    
          |                           |                    
          V                           V                    
          |                           |                    
    n[unassigned]               n[unassigned]              
    
      `));
    });
  });

  describe("a cycle only reachable by way of non-left recursive edges", () => {
    const bnf = `

      S ::= T... <END_OF_LINE> ;
      
      T ::= "a" E
  
          | "b" E
  
          ;
  
      E ::= A "f" ;
  
      A ::= E 
      
          | "g" 
          
          ;
    
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
              
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= "a" E
        
              | "b" E
        
              ;
        
        E   ::= A_ A~* E~A ;
        
        A   ::= A_ A~* ;
        
        A_  ::= "g" ;
        
        E~A ::= "f" ;
        
        A~E ::= ε ;
        
        E~  ::= A~E A~* E~A ;
        
        A~  ::= E~A E~* A~E ;
              
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `agf
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
      
                                     S                     
                                     |                     
                     --------------------------------      
                     |                              |      
                     T                        <END_OF_LINE>
                     |                                     
          ----------------------                           
          |                    |                           
    a[unassigned]              E                           
                               |                           
                        ---------------                    
                        |             |                    
                        A       f[unassigned]              
                        |                                  
                  g[unassigned]                            
    
      `));
    });
  });
});

function compare(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

function stripWhitespace(string) {
  string = string.replace(/[\s\t\n\r]/g, "");

  return string;
}

function adjustedBNFFromBNF(bnf) {
  let rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        adjustedBNF = rulesString;  ///

  return adjustedBNF;
}

function exampleLexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        exampleLexer = ExampleLexer.fromEntries(entries);

  return exampleLexer;
}

function parseTreeStringFromBNFAndContent(bnf, content, startRuleName = null) {
  let rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const unassigned = ".",
        lexicalEntries = [
          {
            unassigned
          }
        ],
        exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries),
        exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName),
        tokens = exampleLexer.tokenise(content),
        node = exampleParser.parse(tokens);

  rewriteNodes(node);

  const abridged = true,
        parseTree = node.asParseTree(tokens, abridged);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        exampleParser = new ExampleParser(startRule, ruleMap);

  return exampleParser;
}
