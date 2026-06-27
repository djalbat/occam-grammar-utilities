"use strict";

const { testUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers"),
      { BasicLexer, BasicParser, eliminateLeftRecursion } = require("../lib/index");  ///

const { adjustedBNFFromRules } = require("./utilities/bnf"),
      { checkParentNodes, checkDescendentNodes } = require("./utilities/node");

const { rulesFromBNF } = parserUtilities,
      { nodeFromRulesAndTokens, compareParseTreeStrings, tokensFromEntriesAndContent, parseTreeStringFromNodeAndTokens } = testUtilities;

describe("Rewrites", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a cycle of length one", () => {
    let bnf = `
  
      S ::= A... <END_OF_LINE> ;
      
      A ::= A "g"
      
          | "e"
          
          ;
        
    `;

    const content = `egg
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~* ;
        
        A_  ::= "e" ;
        
        A~A ::= "g" ;
        
        A~  ::= A~A ;
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
      S ::= A... <END_OF_LINE> ;

      A ::= B "g"
      
          | "e"
      
          ;
      
      B ::= A "h"
      
          | B "f"
      
          | "d"
  
          ;
        
    `;

    const content = `ehfg
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
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

    const content = `(n+n)
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
      S ::= E... <END_OF_LINE> ;
  
      A ::= E ;
      
      E ::= A "+" A
      
          | V
      
          ;
      
      V ::= . ;

    `;

    const content = `n+m
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
      S ::= A... <END_OF_LINE> ;
  
      A ::= A "c"
      
          | B "d"
      
          | "e"
      
          ;
  
      B ::= A "f"
      
          | "g"
      
          ;

    `;

    const content = `efd
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
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

    const content = `gkhrldf
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~*
        
              | B_ B~* A~B
        
              | C_ C~* B~C B~* A~B
        
              | D_ D~* C~D C~* B~C B~* A~B
        
              ;
        
        B   ::= B_ B~*
        
              | C_ C~* B~C
        
              | A_ A~* B~A
        
              | D_ D~* C~D C~* B~C
        
              | A_ A~* D~A D~* C~D C~* B~C
        
              ;
        
        C   ::= C_ C~*
        
              | D_ D~* C~D
        
              | A_ A~* D~A D~* C~D
        
              | B_ B~* D~B D~* C~D
        
              | B_ B~* A~B A~* D~A D~* C~D
        
              ;
        
        D   ::= D_ D~*
        
              | A_ A~* D~A
        
              | B_ B~* D~B
        
              | C_ C~* B~C B~* D~B
        
              | B_ B~* A~B A~* D~A
        
              | C_ C~* B~C B~* A~B A~* D~A
        
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
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

    const content = `akch
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
      S ::= A... <END_OF_LINE> ;

      A ::= B "h" 
        
          | "g" 
   
          ;
  
      B ::= B "e" "f"
      
          | A "d" 
      
          | "c" 
  
          ;
    `;

    const content = `gdefefh
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                          
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
      S ::= B... <END_OF_LINE> ;
        
      A ::= B
      
          | "c"
      
          ;
      
      B ::= A "e" 
      
          | "d"
      
          ;

    `;

    const content = `dee
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
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

    const content = `bekfh
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
    let bnf = `
  
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

    const content = `n+n
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
                                              
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= T_ T~*
        
              | C_ C~* T~C
        
              | B_ B~* T~B
        
              | C_ C~* B~C B~* T~B
        
              ;
        
        A   ::= T_ T~* A~T
        
              | B_ B~* T~B T~* A~T
        
              | C_ C~* T~C T~* A~T
        
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
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
               V [0]                                   V [0]                     
                 |                                       |                       
        "n"[unassigned] [0]                     "n"[unassigned] [0]              
             
      `));
    });
  });

  describe.only("an indirectly repeated rule that is non-producing", () => {
    let bnf = `
  
      S  ::=  A... <END_OF_LINE> ; 
  
      A  ::=  B "=" C
      
           |  C
      
           ;
      
      B  ::=  A ( "," A )* ;
       
      C  ::=  . ;

    `;

    const content = `a = R
`;

    let node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        S   ::= A... <END_OF_LINE> ;
        
        A   ::= A_ A~* ;
        
        B   ::= A_ A~* B~A ;
        
        C   ::= . ;
        
        A_  ::= C ;
        
        A~B ::= "=" C ;
        
        B~A ::= ( "," A )*
        
              | ε
        
              ;
        
        A~  ::= B~A B~* A~B ;
        
        B~  ::= A~B A~* B~A ;
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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








  describe.skip("<TEMPLATE>", () => {
    let bnf = `
  
    `;

    const content = `
`;

    let node,
      rules,
      tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
             
      `));
    });
  });

  describe.skip("<TEMPLATE>", () => {
    let bnf = `
  
    `;

    const content = `
`;

    let node,
      rules,
      tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
             
      `));
    });
  });

  describe.skip("<TEMPLATE>", () => {
    let bnf = `
  
    `;

    const content = `
`;

    let node,
      rules,
      tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///

      tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

      node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        
      `));
    });

    it("results in the requisite parse tree" , () => {
      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                    
             
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
            tokens = tokensFromContent(content),
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

  describe("a cycle of length two together with ambiguity", () => {
    const bnf = `

      S ::= T... <END_OF_LINE> ;
      
      T ::= "-"<NO_WHITESPACE>A
       
          | A "-" A 
              
          | "z"
          
          ;
      
      A ::= T ( ) 
      
          | U
      
          ;
          
      U ::= . ;
    
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
              
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= T_ T~*
        
              | A_ A~* T~A
        
              ;
        
        A   ::= A_ A~*
        
              | T_ T~* A~T
        
              ;
        
        U   ::= . ;
        
        T_  ::= "-" <NO_WHITESPACE> A
        
              | "z"
        
              ;
        
        A_  ::= U ;
        
        T~A ::= "-" A ;
        
        A~T ::= ε ( ) ;
        
        T~  ::= A~T A~* T~A ;
        
        A~  ::= T~A T~* A~T ;
                      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `--z
`,
            tokens = tokensFromContent(content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                     S [0]                                   
                                                                       |                                     
                                        ---------------------------------------------------------------      
                                        |                                                             |      
                                      T [0]                                                     <END_OF_LINE>
                                        |                                                                    
             -------------------------------------------------------                                         
             |                 |                                   |                                         
    "-"[unassigned] [0] <NO_WHITESPACE>                        A [0] ( )                                     
                                                                   |                                         
                                                                 T [0]                                       
                                                                   |                                         
                                                 -------------------------------------                       
                                                 |                 |                 |                       
                                        "-"[unassigned] [0] <NO_WHITESPACE>        A [0]                     
                                                                                     |                       
                                                                                   U [0]                     
                                                                                     |                       
                                                                            "z"[unassigned] [0]              
    
      `));
    });
  });

  describe("an indirectly recursive rule with precedence", () => {
    const bnf = `
      
      S    ::= T... <END_OF_LINE> ;
      
      T    ::= ( "1" | "2" | "3" | "4" )
      
             | T<NO_WHITESPACE>T (100)
      
             | "1" "+" T (12)
      
             ;
                        
    `;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compareParseTreeStrings(adjustedBNF, `
              
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= T_ T~* ;
        
        T_  ::= ( "1" | "2" | "3" | "4" )
            
              | "1" "+" T (12)
        
              ;
        
        T~T ::= <NO_WHITESPACE> T (100) ;
        
        T~  ::= T~T ;
                      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `1+234
`,
            tokens = tokensFromContent(content),
            node = nodeFromBNFAndTokens(bnf, tokens),
            parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
          
                                                                     S [0]                                   
                                                                       |                                     
                                        ---------------------------------------------------------------      
                                        |                                                             |      
                                      T [0]                                                     <END_OF_LINE>
                                        |                                                                    
             -------------------------------------------------------                                         
             |                 |                                   |                                         
    "-"[unassigned] [0] <NO_WHITESPACE>                        A [0] ( )                                     
                                                                   |                                         
                                                                 T [0]                                       
                                                                   |                                         
                                                 -------------------------------------                       
                                                 |                 |                 |                       
                                        "-"[unassigned] [0] <NO_WHITESPACE>        A [0]                     
                                                                                     |                       
                                                                                   U [0]                     
                                                                                     |                       
                                                                            "z"[unassigned] [0]              
    
      `));
    });
  });
});
