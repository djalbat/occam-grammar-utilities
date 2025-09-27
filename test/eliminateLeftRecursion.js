"use strict";

const { assert } = require("chai");

const { rulesUtilities, parserUtilities } = require("occam-parsers");

const { ExampleLexer, ExampleParser, eliminateLeftRecursion } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

const { NonTerminalNodeMap } = ExampleParser,
      NonTerminalNodes = Object.values(NonTerminalNodeMap);

describe("src/eliminateLeftRecursion", () => {
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

  describe("a cycle of length one", () => {
    const bnf = `
  
      S ::= A... <END_OF_LINE> ;

      A ::= A "g"
      
          | "e"
      
          ;
      
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                  
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~* ;
        
        A_  ::= "e" ;
        
        A~A ::= "g" ;
        
        A~  ::= A~A ;
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `egg
`,
        tokens = tokensFromBNFAndContent(bnf, content),
        node = nodeFromBNFAndTokens(bnf, tokens),
        parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                        S [0]                    
                                                          |                      
                                          ---------------------------------      
                                          |                               |      
                                        A [0]                       <END_OF_LINE>
                                          |                                      
                           -------------------------------                       
                           |                             |                       
                         A [0]                  "g"[unassigned] [0]              
                           |                                                     
                 ---------------------                                           
                 |                   |                                           
               A [0]        "g"[unassigned] [0]                                  
                 |                                                               
        "e"[unassigned] [0]                                                      
             
      `));
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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                  
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= B_ B~* A~B
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* B~A
        
              | B_ B~*
        
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

    it("results in the requisite parse tree" , () => {
      const content = `ehfg
`,
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                                           S [0]                     
                                                                             |                       
                                                            -----------------------------------      
                                                            |                                 |      
                                                          A [0]                         <END_OF_LINE>
                                                            |                                        
                                          ------------------------------------                       
                                          |                                  |                       
                                        B [0]                       "g"[unassigned] [0]              
                                          |                                                          
                           -------------------------------                                           
                           |                             |                                           
                         B [0]                  "f"[unassigned] [0]                                  
                           |                                                                         
                 ---------------------                                                               
                 |                   |                                                               
               A [0]        "h"[unassigned] [0]                                                      
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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
              
        S   ::= F... <END_OF_LINE> ;
        
        A   ::= F_ F~* E~F E~* A~E
        
              | A_ A~*
        
              ;
        
        E   ::= A_ A~* F~A F~* E~F
        
              | F_ F~* E~F
        
              ;
        
        T   ::= "n" ;
        
        F   ::= A_ A~* F~A
        
              | F_ F~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                                  S [0]                                
                                                                                    |                                  
                                                       ----------------------------------------------------------      
                                                       |                                                        |      
                                                     F [0]                                                <END_OF_LINE>
                                                       |                                                               
               ---------------------------------------------------------------------------------                       
               |                                       |                                       |                       
      "("[unassigned] [0]                            A [0]                            ")"[unassigned] [0]              
                                                       |                                                               
                                                     E [0]                                                             
                                                       |                                                               
                                                     F [0]                                                             
                                                       |                                                               
                                   -----------------------------------------                                           
                                   |                   |                   |                                           
                                 A [0]        "+"[unassigned] [0]        A [0]                                         
                                   |                                       |                                           
                                 T [0]                                   T [0]                                         
                                   |                                       |                                           
                          "n"[unassigned] [0]                     "n"[unassigned] [0]                                  

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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                  
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                        S [0]                      
                                                          |                        
                                       --------------------------------------      
                                       |                                    |      
                                     E [0]                            <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 A [0]        "+"[unassigned] [0]        A [0]                     
                   |                                       |                       
                 E [0]                                   E [0]                     
                   |                                       |                       
                 V [0]                                   V [0]                     
                   |                                       |                       
          "n"[unassigned] [0]                     "m"[unassigned] [0]              
              
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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
              
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= B_ B~* A~B
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* B~A
        
              | B_ B~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                        S [0]                    
                                                          |                      
                                          ---------------------------------      
                                          |                               |      
                                        A [0]                       <END_OF_LINE>
                                          |                                      
                           -------------------------------                       
                           |                             |                       
                         B [0]                  "d"[unassigned] [0]              
                           |                                                     
                 ---------------------                                           
                 |                   |                                           
               A [0]        "f"[unassigned] [0]                                  
                 |                                                               
        "e"[unassigned] [0]                                                      

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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                                              
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= D_ D~* C~D C~* B~C B~* A~B
        
              | C_ C~* B~C B~* A~B
        
              | B_ B~* A~B
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* D~A D~* C~D C~* B~C
        
              | D_ D~* C~D C~* B~C
        
              | C_ C~* B~C
        
              | A_ A~* B~A
        
              | B_ B~*
        
              ;
        
        C   ::= B_ B~* D~B D~* C~D
        
              | B_ B~* A~B A~* D~A D~* C~D
        
              | A_ A~* D~A D~* C~D
        
              | D_ D~* C~D
        
              | C_ C~*
        
              ;
        
        D   ::= C_ C~* B~C B~* D~B
        
              | B_ B~* D~B
        
              | C_ C~* B~C B~* A~B A~* D~A
        
              | B_ B~* A~B A~* D~A
        
              | A_ A~* D~A
        
              | D_ D~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
              
                                                                                                                                      S [0]                      
                                                                                                                                        |                        
                                                                                                                      -------------------------------------      
                                                                                                                      |                                   |      
                                                                                                                    A [0]                           <END_OF_LINE>
                                                                                                                      |                                          
                                                                                                  ----------------------------------------                       
                                                                                                  |                                      |                       
                                                                                                B [0]                           "f"[unassigned] [0]              
                                                                                                  |                                                              
                                                                               ---------------------------------------                                           
                                                                               |                                     |                                           
                                                                             C [0]                          "d"[unassigned] [0]                                  
                                                                               |                                                                                 
                                                            --------------------------------------                                                               
                                                            |                                    |                                                               
                                                          D [0]                         "l"[unassigned] [0]                                                      
                                                            |                                                                                                    
                                          ------------------------------------                                                                                   
                                          |                                  |                                                                                   
                                        B [0]                       "r"[unassigned] [0]                                                                          
                                          |                                                                                                                      
                           -------------------------------                                                                                                       
                           |                             |                                                                                                       
                         A [0]                  "h"[unassigned] [0]                                                                                              
                           |                                                                                                                                     
                 ---------------------                                                                                                                           
                 |                   |                                                                                                                           
               A [0]        "k"[unassigned] [0]                                                                                                                  
                 |                                                                                                                                               
        "g"[unassigned] [0]                                                                                                                                      

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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                          
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= C_ C~* A~C
        
              | A_ A~*
        
              ;
        
        B   ::= C_ C~* B~C
        
              | B_ B~*
        
              ;
        
        C   ::= A_ A~* C~A
        
              | B_ B~* C~B
        
              | C_ C~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                           S [0]                     
                                                                             |                       
                                                            -----------------------------------      
                                                            |                                 |      
                                                          A [0]                         <END_OF_LINE>
                                                            |                                        
                                          ------------------------------------                       
                                          |                                  |                       
                                        C [0]                       "h"[unassigned] [0]              
                                          |                                                          
                           -------------------------------                                           
                           |                             |                                           
                         B [0]                  "c"[unassigned] [0]                                  
                           |                                                                         
                 ---------------------                                                               
                 |                   |                                                               
               C [0]        "k"[unassigned] [0]                                                      
                 |                                                                                   
        "a"[unassigned] [0]                                                                          
  
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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
        
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= B_ B~* A~B
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* B~A
        
              | B_ B~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                                                                                   S [0]                         
                                                                                                                                     |                           
                                                                                                               --------------------------------------------      
                                                                                                               |                                          |      
                                                                                                             A [0]                                  <END_OF_LINE>
                                                                                                               |                                                 
                                                                                     -----------------------------------------------------                       
                                                                                     |                                                   |                       
                                                                                   B [0]                                        "h"[unassigned] [0]              
                                                                                     |                                                                           
                                                    ------------------------------------------------------------------                                           
                                                    |                                            |                   |                                           
                                                  B [0]                                 "e"[unassigned] [0] "f"[unassigned] [0]                                  
                                                    |                                                                                                            
                           ---------------------------------------------------                                                                                   
                           |                             |                   |                                                                                   
                         B [0]                  "e"[unassigned] [0] "f"[unassigned] [0]                                                                          
                           |                                                                                                                                     
                 ---------------------                                                                                                                           
                 |                   |                                                                                                                           
               A [0]        "d"[unassigned] [0]                                                                                                                  
                 |                                                                                                                                               
        "g"[unassigned] [0]                                                                                                                                      

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

      assert.isTrue(compareParseTreeStrings(adjustedBNF,`
                      
        S   ::= B... <END_OF_LINE> ;
        
        A   ::= B_ B~* A~B
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* B~A
        
              | B_ B~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
            
                                                        S [0]                    
                                                          |                      
                                          ---------------------------------      
                                          |                               |      
                                        B [0]                       <END_OF_LINE>
                                          |                                      
                           -------------------------------                       
                           |                             |                       
                         A [0]                  "e"[unassigned] [0]              
                           |                                                     
                         B [0]                                                   
                           |                                                     
                 ---------------------                                           
                 |                   |                                           
               A [0]        "e"[unassigned] [0]                                  
                 |                                                               
               B [0]                                                             
                 |                                                               
        "d"[unassigned] [0]                                                      

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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                                      
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= B_ B~* A~B
        
              | C_ C~* A~C
        
              | A_ A~*
        
              ;
        
        B   ::= A_ A~* B~A
        
              | B_ B~*
        
              ;
        
        C   ::= A_ A~* C~A
        
              | C_ C~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                                               S [0]                     
                                                                                                 |                       
                                                                               ------------------------------------      
                                                                               |                                  |      
                                                                             A [0]                          <END_OF_LINE>
                                                                               |                                         
                                                            --------------------------------------                       
                                                            |                                    |                       
                                                          B [0]                         "h"[unassigned] [0]              
                                                            |                                                            
                                          ------------------------------------                                           
                                          |                                  |                                           
                                        A [0]                       "f"[unassigned] [0]                                  
                                          |                                                                              
                           -------------------------------                                                               
                           |                             |                                                               
                         C [0]                  "k"[unassigned] [0]                                                      
                           |                                                                                             
                 ---------------------                                                                                   
                 |                   |                                                                                   
               A [0]        "e"[unassigned] [0]                                                                          
                 |                                                                                                       
        "b"[unassigned] [0]                                                                                              
  
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
      
      V ::= . ;
       
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
                                              
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= C_ C~* B~C B~* T~B
        
              | B_ B~* T~B
        
              | C_ C~* T~C
        
              | T_ T~*
        
              ;
        
        A   ::= C_ C~* B~C B~* T~B T~* A~T
        
              | B_ B~* T~B T~* A~T
        
              | C_ C~* T~C T~* A~T
        
              | T_ T~* A~T
        
              ;
        
        B   ::= T_ T~* A~T A~* C~A C~* B~C
        
              | C_ C~* B~C
        
              | B_ B~*
        
              ;
        
        C   ::= B_ B~* T~B T~* A~T A~* C~A
        
              | T_ T~* A~T A~* C~A
        
              | C_ C~*
        
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
      
                                                      S [0]                      
                                                        |                        
                                     --------------------------------------      
                                     |                                    |      
                                   T [0]                            <END_OF_LINE>
                                     |                                           
                                   B [0]                                         
                                     |                                           
                                   C [0]                                         
                                     |                                           
                 -----------------------------------------                       
                 |                   |                   |                       
               A [0]        "+"[unassigned] [0]        A [0]                     
                 |                                       |                       
               T [0]                                   T [0]                     
                 |                                       |                       
               B [0]                                   B [0]                     
                 |                                       |                       
               C [0]                                   C [0]                     
                 |                                       |                       
               V [0]                                   V [0]                     
                 |                                       |                       
        "n"[unassigned] [0]                     "n"[unassigned] [0]              
    
      `));
    });
  });

  describe("an indirectly repeated rule that is non-producing", () => {
    const bnf = `S  ::=  A... <END_OF_LINE> ; 
  
      A  ::=  B "=" C
      
           |  C
      
           ;
      
      B  ::=  A ( "," A )* ;
       
      C  ::=  . ;
      
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `S   ::= A... <END_OF_LINE> ;

A   ::= A_ A~* ;

B   ::= A_ A~* B~A ;

C   ::= . ;

A_  ::= C ;

A~B ::= "=" C ;

B~A ::= ( "," A )*

      | ε

      ;

A~  ::= B~A B~* A~B ;

B~  ::= A~B A~* B~A ;`));
    });

    it("results in the requisite parse tree" , () => {
      const content = `a = R
`,
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
                                                      S [0]                      
                                                        |                        
                                     --------------------------------------      
                                     |                                    |      
                                   A [0]                            <END_OF_LINE>
                                     |                                           
                 -----------------------------------------                       
                 |                   |                   |                       
               B [0]        "="[unassigned] [0]        C [0]                     
                 |                                       |                       
               A [0]                            "R"[unassigned] [0]              
                 |                                                               
               C [0]                                                             
                 |                                                               
        "a"[unassigned] [0]                                                      
             
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

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
              
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
            tokens = tokensFromBNFAndContent(bnf, content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
      
                                                   S [0]                         
                                                     |                           
                                -------------------------------------------      
                                |                                         |      
                              T [0]                                 <END_OF_LINE>
                                |                                                
                 -------------------------------                                 
                 |                             |                                 
        "a"[unassigned] [0]                  E [0]                               
                                               |                                 
                                     ---------------------                       
                                     |                   |                       
                                   A [0]        "f"[unassigned] [0]              
                                     |                                           
                            "g"[unassigned] [0]                                  
    
      `));
    });
  });
});

function compareParseTreeStrings(stringA, stringB) {
  stringA = stripWhitespace(stringA);
  stringB = stripWhitespace(stringB);

  return (stringA === stringB);
}

function checkParentNodes(node, parentNode = null) {
  let checked = true;

  const nodeParentNode = node.getParentNode();

  if (nodeParentNode !== parentNode) {
    checked = false;
  } else {
    const nodeNonTerminalNode = node.isNonTerminalNode();

    if (nodeNonTerminalNode) {
      const nonTerminalNode = node; ///

      parentNode = node;  ///

      checked = nonTerminalNode.everyChildNode((childNode) => {
        const node = childNode, ///
              checked = checkParentNodes(node, parentNode);

        if (checked) {
          return true;
        }
      });
    }
  }

  return checked;
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

function nodeFromBNFAndTokens(bnf, tokens, startRuleName = null) {
  let rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName),
        node = exampleParser.parse(tokens);

  return node;
}

function checkDescendentNodes(node) {
  let checked;

  const descendantNode = node;  ///

  checked = checkDescendentNode(descendantNode);

  if (checked) {
    checked = node.everyDescendantNode((descendantNode) => {
      const checked = checkDescendentNode(descendantNode);

      if (checked) {
        return true;
      }
    });
  }

  return checked;
}

function checkDescendentNode(descendantNode) {
  let checked;

  const node = descendantNode,  ///
        nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    checked = true;
  } else {
    checked = NonTerminalNodes.some((NonTerminalNode) => {
      const nodeNonTerminalNode = (node instanceof NonTerminalNode);

      if (nodeNonTerminalNode) {
        return true;
      }
    });
  }

  return checked;
}

function tokensFromBNFAndContent(bnf, content) {
  const unassigned = ".",
        lexicalEntries = [
          {
            unassigned
          }
        ],
        exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries),
        tokens = exampleLexer.tokenise(content);

  return tokens;
}

function exampleLexerFromLexicalEntries(lexicalEntries) {
  const entries = lexicalEntries, ///
        exampleLexer = ExampleLexer.fromEntries(entries);

  return exampleLexer;
}

function parseTreeStringFromNodeAndTokens(node, tokens) {
  const parseTree = node.asParseTree(tokens);

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
