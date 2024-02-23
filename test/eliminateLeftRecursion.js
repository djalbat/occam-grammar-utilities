"use strict";

const { assert } = require("chai");

const { rulesUtilities, parserUtilities } = require("occam-parsers");

const { ExampleLexer, ExampleParser, eliminateLeftRecursion } = require("../lib/index.js");

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
      
          | B "f"
      
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
        
        B_  ::= "d" ;
        
        A_  ::= "e" ;
        
        B~B ::= "f" ;
        
        A~B ::= "g" ;
        
        B~A ::= "h" ;
        
        B~  ::= B~B
        
              | A~B A~* B~A
        
              ;
        
        A~  ::= B~A B~* A~B ;
        
      `));
    });

    it.only("results in the requisite parse tree" , () => {
      const content = `ehfg
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
                    
                                                                           S [0]                     
                                                                             |                       
                                                            -----------------------------------      
                                                            |                                 |      
                                                    A [0] (undefined)                   <END_OF_LINE>
                                                            |                                        
                                          ------------------------------------                       
                                          |                                  |                       
                                  B [0] (undefined)                 "g"[unassigned] [0]              
                                          |                                                          
                           -------------------------------                                           
                           |                             |                                           
                   B [0] (undefined)            "f"[unassigned] [0]                                  
                           |                                                                         
                 ---------------------                                                               
                 |                   |                                                               
         A [0] (undefined)  "h"[unassigned] [0]                                                      
                 |                                                                                   
        "e"[unassigned] [0]                                                                          
             
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
          
                                                                               S {0-5}                               
                                                                                  |                                  
                                                     ----------------------------------------------------------      
                                                     |                                                        |      
                                                  F {0-4}                                               <END_OF_LINE>
                                                     |                                                               
             ---------------------------------------------------------------------------------                       
             |                                       |                                       |                       
    "("[unassigned] {0}                           A {1-3}                           ")"[unassigned] {4}              
                                                     |                                                               
                                                  E {1-3}                                                            
                                                     |                                                               
                                                  F {1-3}                                                            
                                                     |                                                               
                                 -----------------------------------------                                           
                                 |                   |                   |                                           
                               A {1}        "+"[unassigned] {2}        A {3}                                         
                                 |                                       |                                           
                               T {1}                                   T {3}                                         
                                 |                                       |                                           
                        "n"[unassigned] {1}                     "n"[unassigned] {3}                                  

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
          
                                                 S {0-3}                     
                                                    |                        
                                 --------------------------------------      
                                 |                                    |      
                              E {0-2}                           <END_OF_LINE>
                                 |                                           
             -----------------------------------------                       
             |                   |                   |                       
           A {0}        "+"[unassigned] {1}        A {2}                     
             |                                       |                       
           E {0}                                   E {2}                     
             |                                       |                       
           V {0}                                   V {2}                     
             |                                       |                       
    "n"[unassigned] {0}                     "m"[unassigned] {2}              
    
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
          
                                                   S {0-3}                   
                                                      |                      
                                      ---------------------------------      
                                      |                               |      
                                   A {0-2}                      <END_OF_LINE>
                                      |                                      
                       -------------------------------                       
                       |                             |                       
                    B {0-1}                 "d"[unassigned] {2}              
                       |                                                     
             ---------------------                                           
             |                   |                                           
           A {0}        "f"[unassigned] {1}                                  
             |                                                               
    "e"[unassigned] {0}                                                      

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
              
                                                                                                                                 S {0-7}                     
                                                                                                                                    |                        
                                                                                                                  -------------------------------------      
                                                                                                                  |                                   |      
                                                                                                               A {0-6}                          <END_OF_LINE>
                                                                                                                  |                                          
                                                                                              ----------------------------------------                       
                                                                                              |                                      |                       
                                                                                           B {0-5}                          "f"[unassigned] {6}              
                                                                                              |                                                              
                                                                           ---------------------------------------                                           
                                                                           |                                     |                                           
                                                                        C {0-4}                         "d"[unassigned] {5}                                  
                                                                           |                                                                                 
                                                        --------------------------------------                                                               
                                                        |                                    |                                                               
                                                     D {0-3}                        "l"[unassigned] {4}                                                      
                                                        |                                                                                                    
                                      ------------------------------------                                                                                   
                                      |                                  |                                                                                   
                                   B {0-2}                      "r"[unassigned] {3}                                                                          
                                      |                                                                                                                      
                       -------------------------------                                                                                                       
                       |                             |                                                                                                       
                    A {0-1}                 "h"[unassigned] {2}                                                                                              
                       |                                                                                                                                     
             ---------------------                                                                                                                           
             |                   |                                                                                                                           
           A {0}        "k"[unassigned] {1}                                                                                                                  
             |                                                                                                                                               
    "g"[unassigned] {0}                                                                                                                                      

      `));
    });
  });

  describe("two intersecting cycles of length two", () => {
    const bnf = `
  
      S  ::= A... <END_OF_LINE> ;

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
                  
        S   ::= A... <END_OF_LINE> ;
        
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
          
                                                                      S {0-4}                    
                                                                         |                       
                                                        -----------------------------------      
                                                        |                                 |      
                                                     A {0-3}                        <END_OF_LINE>
                                                        |                                        
                                      ------------------------------------                       
                                      |                                  |                       
                                   C {0-2}                      "h"[unassigned] {3}              
                                      |                                                          
                       -------------------------------                                           
                       |                             |                                           
                    B {0-1}                 "c"[unassigned] {2}                                  
                       |                                                                         
             ---------------------                                                               
             |                   |                                                               
           C {0}        "k"[unassigned] {1}                                                      
             |                                                                                   
    "a"[unassigned] {0}                                                                          
  
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
          
                                                                                                                              S {0-7}                        
                                                                                                                                 |                           
                                                                                                           --------------------------------------------      
                                                                                                           |                                          |      
                                                                                                        A {0-6}                                 <END_OF_LINE>
                                                                                                           |                                                 
                                                                                 -----------------------------------------------------                       
                                                                                 |                                                   |                       
                                                                              B {0-5}                                       "h"[unassigned] {6}              
                                                                                 |                                                                           
                                                ------------------------------------------------------------------                                           
                                                |                                            |                   |                                           
                                             B {0-3}                                "e"[unassigned] {4} "f"[unassigned] {5}                                  
                                                |                                                                                                            
                       ---------------------------------------------------                                                                                   
                       |                             |                   |                                                                                   
                    B {0-1}                 "e"[unassigned] {2} "f"[unassigned] {3}                                                                          
                       |                                                                                                                                     
             ---------------------                                                                                                                           
             |                   |                                                                                                                           
           A {0}        "d"[unassigned] {1}                                                                                                                  
             |                                                                                                                                               
    "g"[unassigned] {0}                                                                                                                                      

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
            
                                                   S {0-3}                   
                                                      |                      
                                      ---------------------------------      
                                      |                               |      
                                   B {0-2}                      <END_OF_LINE>
                                      |                                      
                       -------------------------------                       
                       |                             |                       
                    A {0-1}                 "e"[unassigned] {2}              
                       |                                                     
                    B {0-1}                                                  
                       |                                                     
             ---------------------                                           
             |                   |                                           
           A {0}        "e"[unassigned] {1}                                  
             |                                                               
           B {0}                                                             
             |                                                               
    "d"[unassigned] {0}                                                      
             
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
          
                                                                                          S {0-5}                    
                                                                                             |                       
                                                                           ------------------------------------      
                                                                           |                                  |      
                                                                        A {0-4}                         <END_OF_LINE>
                                                                           |                                         
                                                        --------------------------------------                       
                                                        |                                    |                       
                                                     B {0-3}                        "h"[unassigned] {4}              
                                                        |                                                            
                                      ------------------------------------                                           
                                      |                                  |                                           
                                   A {0-2}                      "f"[unassigned] {3}                                  
                                      |                                                                              
                       -------------------------------                                                               
                       |                             |                                                               
                    C {0-1}                 "k"[unassigned] {2}                                                      
                       |                                                                                             
             ---------------------                                                                                   
             |                   |                                                                                   
           A {0}        "e"[unassigned] {1}                                                                          
             |                                                                                                       
    "b"[unassigned] {0}                                                                                              
  
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
      
                                                 S {0-3}                     
                                                    |                        
                                 --------------------------------------      
                                 |                                    |      
                              T {0-2}                           <END_OF_LINE>
                                 |                                           
                              B {0-2}                                        
                                 |                                           
                              C {0-2}                                        
                                 |                                           
             -----------------------------------------                       
             |                   |                   |                       
           A {0}        "+"[unassigned] {1}        A {2}                     
             |                                       |                       
           T {0}                                   T {2}                     
             |                                       |                       
           V {0}                                   V {2}                     
             |                                       |                       
    "n"[unassigned] {0}                     "n"[unassigned] {2}              
    
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
      
                                              S {0-3}                        
                                                 |                           
                            -------------------------------------------      
                            |                                         |      
                         T {0-2}                                <END_OF_LINE>
                            |                                                
             -------------------------------                                 
             |                             |                                 
    "a"[unassigned] {0}                 E {1-2}                              
                                           |                                 
                                 ---------------------                       
                                 |                   |                       
                               A {1}        "f"[unassigned] {2}              
                                 |                                           
                        "g"[unassigned] {1}                                  
    
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
        node = exampleParser.parse(tokens),
        parseTree = node.asParseTree(tokens);

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
