"use strict";

const { assert } = require("chai");

const { rewriteNodes, rulesUtilities, parserUtilities, eliminateLeftRecursion, ExampleLexer, ExampleParser } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  describe("a complex directly left recursive definition", () => {
    const bnf = `
  
A ::= "g""

    | ( A | B )

    | "f"

    ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a complex indirectly left recursive definition", () => {
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
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a complex implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= "d"
    
        | ( B | C ) "g"
    
        | "e"
    
        ;
    
    B ::= "d"
    
        | A "h"
    
        | "c"

        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary directly left recursive definition", () => {
    const bnf = `
  
A ::= "g"

    | A

    | "f"

    ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("an isolated directly left recursive definition", () => {
    const bnf = `
  
    A ::= A B ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("two isolated directly left recursive definitions", () => {
    const bnf = `
  
    A ::= A B 
    
        | A 
        
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("an isolated indirectly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" 
     
        | "c"
        
        ;

    B ::= A "h" ;

`;

    it("does not throw an exception", () => {
      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary indirectly left recursive definition a unary intermediate definition", () => {
    const bnf = `
  
    A ::= "d" 
    
        | B
        
        | "e"
        
        ;
    
    B ::= "b"
    
        | A
        
        | "c"
        
        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary indirectly left recursive definition and a non-unary intermediate definition", () => {
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
      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("two isolated indirectly left recursive definitions and a implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" 
     
        | "c"
        
        ;

    B ::= A "h" 
    
        | A "f"
        
        ;

`;

    it("do not throw an exception", () => {
      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("two sibling directly left recursive definitions that do not match", () => {
    const bnf = `
   
    A ::= "c"

        | A* "f" "g"
    
        | "d"

        | A+ "h"
    
        | "e"
    
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("an indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= "d" 
     
        | A "h" 
     
        | "c"
        
        ;

`;

    it("do not throw an exception", () => {
      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("an isolated indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("two isolated indirectly left recursive definitions and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" 
    
        | A "f"
        
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("two mismatched sibling indirectly left recursive definitions", () => {
    const bnf = `
   
    A ::= "e"
    
        | B "h"
    
        | "d"
    
        ;
    
    B ::= A "g"
    
        | "d"

        | A+ "f"

        | "c"

        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a directly left recursive definition", () => {
    const bnf = `
 
    A ::= A "f"
    
        | "g"

        ;
    
`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
        
    A  ::= A_ A~* ;
    
    A_ ::= "g" ;
    
    A~ ::= "f" ;
         
     `));
    });

    it("results in the requisite parse tree", () => {
      const content = "gff",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                          A                
                          |                
               ----------------------      
               |                    |      
               A              f[unassigned]
               |                           
        ---------------                    
        |             |                    
        A       f[unassigned]              
        |                                  
  g[unassigned]                            

      `));
    });
  });

  describe("an indirectly left recursive definition", () => {
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
          
    S    ::= A... <END_OF_LINE> ;

    A    ::= A_ A~* ;
    
    B    ::= "d"
    
           | A B~A~
    
           ;
    
    B__  ::= "d" ;
    
    B~A~ ::= "h" ;
    
    A_   ::= "e"
    
           | B__ "g"
    
           ;
    
    A~   ::= B~A~ "g" ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
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

  describe("a unary indirectly left recursive definition", () => {
    const bnf = `
  
    A ::= B "d"
    
        | "c"
    
        ;
    
    B ::= A ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
      
    A    ::= A_ A~* ;
    
    B    ::= A B~A~ ;
    
    B__  ::=  ;
    
    B~A~ ::= ε ;
    
    A_   ::= "c" ;
    
    A~   ::= B~A~ "d" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "cdd",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                            A                
                            |                
                 ----------------------      
                 |                    |      
                 B              d[unassigned]
                 |                           
                 A                           
                 |                           
          ---------------                    
          |             |                    
          B       d[unassigned]              
          |                                  
          A                                  
          |                                  
    c[unassigned]                            
             
      `));
    });
  });

  describe("two sibling directly left recursive definitions", () => {
    const bnf = `
   
    A ::= "c"

        | A... "f" "g"
    
        | "d"

        | A... "h"
    
        | "e"
    
        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
    A  ::= A_... A~* ;
    
    A_ ::= "c"
    
         | "d"
    
         | "e"
    
         ;
    
    A~ ::= "f" "g"
    
         | "h"
    
         ;
     
      `));
    });

    it("result in the requisite parse tree", () => {
      const content = "cfgh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                      A                    
                                      |                    
                        -----------------------------      
                        |                           |      
                        A                     h[unassigned]
                        |                                  
          -----------------------------                    
          |             |             |                    
          A       f[unassigned] g[unassigned]              
          |                                                
    c[unassigned]                                          
             
      `));
    });
  });

  describe("two sibling indirectly left recursive definitions", () => {
    const bnf = `
  
    A ::= "d"
    
        | B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "b"

        | A "f"
    
        | "c"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A    ::= A_ A~* ;
    
    B    ::= "b"
    
           | "c"
    
           | A B~A~
    
           ;
    
    B__  ::= "b"
    
           | "c"
    
           ;
    
    B~A~ ::= "h"
    
           | "f"
    
           ;
    
    A_   ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A~   ::= B~A~ "g" ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "efghg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                                                     A                   
                                                     |                   
                                        ---------------------------      
                                        |                         |      
                                        B                   g[unassigned]
                                        |                                
                            -------------------------                    
                            |                       |                    
                            A                 h[unassigned]              
                            |                                            
                 ----------------------                                  
                 |                    |                                  
                 B              g[unassigned]                            
                 |                                                       
          ---------------                                                
          |             |                                                
          A       f[unassigned]                                          
          |                                                              
    e[unassigned]                                                        
             
      `));
    });
  });

  describe("two non-sibling indirectly left recursive definitions", () => {
    const bnf = `
  
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  A "f" 
    
         |  C
         
         ;

    C  ::=  A "e" 
    
         |  "d"
         
         ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A    ::= A_ A~* ;
    
    B    ::= C__
    
           | A B~A~
    
           ;
    
    C    ::= "d"
    
           | A C~A~
    
           ;
    
    C__  ::= "d" ;
    
    C~A~ ::= "e" ;
    
    B__  ::= C__ ;
    
    B~A~ ::= "f"
    
           | C~A~
    
           ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gehe",
            startRuleName = "C",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                                        C                  
                                        |                  
                            -------------------------      
                            |                       |      
                            A                 e[unassigned]
                            |                              
                 ----------------------                    
                 |                    |                    
                 B              h[unassigned]              
                 |                                         
                 C                                         
                 |                                         
          ---------------                                  
          |             |                                  
          A       e[unassigned]                            
          |                                                
    g[unassigned]                                          
  
      `));
    });
  });

  describe("an indirectly left recursive definition of length three", () => {
    const bnf = `
    
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  C 
    
         |  "e"
         
         ;

    C  ::=  A "d" 
    
         |  A "c" 
    
         |  "b"
         
         ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A    ::= A_ A~* ;
    
    B    ::= "e"
    
           | C__
           
           | A B~A~
    
           ;
    
    C    ::= "b"
    
           | A C~A~
    
           ;
    
    C__  ::= "b" ;
    
    C~A~ ::= "d"
    
           | "c"
    
           ;
    
    B__  ::= "e"
    
           | C__
    
           ;
    
    B~A~ ::= C~A~ ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gchd",
            startRuleName = "C",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                                        C                  
                                        |                  
                            -------------------------      
                            |                       |      
                            A                 d[unassigned]
                            |                              
                 ----------------------                    
                 |                    |                    
                 B              h[unassigned]              
                 |                                         
                 C                                         
                 |                                         
          ---------------                                  
          |             |                                  
          A       c[unassigned]                            
          |                                                
    g[unassigned]                                          
    
      `));
    });
  });

  describe("two sibling but unrelated indirectly left recursive definitions", () => {
    const bnf = `
    
    T  ::= A "g"
    
         | "f"
    
         ;

    A ::= E "h" ;
    
    E ::= A "c"
    
        | T "d"
    
        ;
    
    `;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    T    ::= T_ T~* ;
    
    A    ::= T A~T~ ;
    
    E    ::= T E~T~
    
           | A E~A~
    
           ;
           
    E__  ::=  ;
    
    E~T~ ::= "d" ;
    
    E~A~ ::= "c" ;
    
    A~   ::= E~A~ "h" ;
    
    A__  ::=  ;
    
    A~T~ ::= E~T~ "h" A~* ;
    
    T_   ::= "f" ;
    
    T~   ::= A~T~ "g" ;
      
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "fdhchg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
      
                                                                   T                   
                                                                   |                   
                                                     ----------------------------      
                                                     |                          |      
                                                     A                    g[unassigned]
                                                     |                                 
                                        ---------------------------                    
                                        |                         |                    
                                        E                   h[unassigned]              
                                        |                                              
                            -------------------------                                  
                            |                       |                                  
                            A                 c[unassigned]                            
                            |                                                          
                 ----------------------                                                
                 |                    |                                                
                 E              h[unassigned]                                          
                 |                                                                     
          ---------------                                                              
          |             |                                                              
          T       d[unassigned]                                                        
          |                                                                            
    f[unassigned]                                                                      
      
      `));
    });
  });

  describe("two indirectly left recursive definitions with the same underlying definition", () => {
    const bnf = `
    
    S ::= E... <END_OF_LINE> ;

    T ::= R
    
        | V
    
        ;
    
    R ::= A "/" A
    
        | V
    
        ;
    
    A ::= E ;
    
    E ::= F ;
    
    F ::= A "+" A
    
        | T
    
        ;
    
    V ::= . ;
     
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    S    ::= E... <END_OF_LINE> ;
    
    T    ::= V
    
           | R__
    
           | E T~E~
    
           ;
    
    R    ::= V
    
           | E R~E~
    
           ;
    
    A    ::= E A~E~ ;
    
    E    ::= E_ E~* ;
    
    F    ::= T__
    
           | E F~E~
    
           ;
    
    V    ::= . ;
    
    A__  ::=  ;
    
    A~E~ ::= ε ;
    
    R__  ::= V ;
    
    R~E~ ::= A~E~ "/" A ;
    
    T__  ::= V
    
           | R__
    
           ;
    
    T~E~ ::= R~E~ ;
    
    F__  ::= T__ ;
    
    F~E~ ::= A~E~ "+" A
    
           | T~E~
    
           ;
    
    E_   ::= F__ ;
    
    E~   ::= F~E~ ;
    
     `));
    });

    it("result in the requisite parse tree" , () => {
      const content = `n+m
`,
            startRuleName = "S",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                                      S                    
                                      |                    
                        -----------------------------      
                        |                           |      
                        E                     <END_OF_LINE>
                        |                                  
                        F                                  
                        |                                  
          -----------------------------                    
          |             |             |                    
          A       +[unassigned]       A                    
          |                           |                    
          E                           E                    
          |                           |                    
          F                           F                    
          |                           |                    
          T                           T                    
          |                           |                    
          V                           V                    
          |                           |                    
    n[unassigned]               m[unassigned]              

      `));
    });
  });

  describe("an indirectly left recursive definition with a unary direct directly repeated rule", () => {
    const bnf = `
    
    S ::=  E... <END_OF_LINE> ;

    A ::=  E ;
    
    E ::=  A "+" A
    
        |  V
    
        ;
    
    V ::=  . ;
     
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                  
    S    ::= E... <END_OF_LINE> ;
    
    A    ::= E A~E~ ;
    
    E    ::= E_ E~* ;
    
    V    ::= . ;
    
    A__  ::=  ;
    
    A~E~ ::= ε ;
    
    E_   ::= V ;
    
    E~   ::= A~E~ "+" A ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
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

  describe("an indirectly left recursive definition with two sibling left recursive definitions", () => {
    const bnf = `

    A ::= B "f"
    
        | B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "d"

        ;
        
`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
      
    A    ::= A_ A~* ;
    
    B    ::= "d"
    
           | A B~A~
    
           ;
    
    B__  ::= "d" ;
    
    B~A~ ::= "h" ;
    
    A_   ::= "e"
    
           | B__ "f"
    
           | B__ "g"
    
           ;
    
    A~   ::= B~A~ "f"
    
           | B~A~ "g"
    
           ;
       
     `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "dfhg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
      
                                        A                  
                                        |                  
                            -------------------------      
                            |                       |      
                            B                 g[unassigned]
                            |                              
                 ----------------------                    
                 |                    |                    
                 A              h[unassigned]              
                 |                                         
          ---------------                                  
          |             |                                  
          B       f[unassigned]                            
          |                                                
    d[unassigned]                                          
      
      `));
    });
  });

  describe("an indirectly left recursive definition and sibling directly left recursive definition", () => {
    const bnf = `
  
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  B "e" "f"
    
         |  A "d" 
    
         |  "c" 

         ;
              
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A    ::= A_ A~* ;
    
    B    ::= B_ B~*
    
           | A B~A~
    
           ;
    
    B_   ::= "c" ;
    
    B~   ::= "e" "f" ;
    
    B__  ::= B_ B~* ;
    
    B~A~ ::= "d" B~* ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gdefefh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                                            A                        
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

  describe("an indirectly left recursive definition and a non-sibling directly left recursive definition", () => {
    const bnf = `
  
    A ::= A "h"
    
        | "d"
    
        | B "g"
    
        | "e"
    
        ;
    
    B ::= "b"

        | A "f"
    
        | "c"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
                
    A    ::= A_ A~* ;
    
    B    ::= "b"
    
           | "c"
    
           | A B~A~
    
           ;
    
    B__  ::= "b"
    
           | "c"
    
           ;
    
    B~A~ ::= "f" ;
    
    A_   ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A~   ::= "h"
    
           | B~A~ "g"
    
           ;
                                                 
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "dhfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
              
                                        A                  
                                        |                  
                            -------------------------      
                            |                       |      
                            B                 g[unassigned]
                            |                              
                 ----------------------                    
                 |                    |                    
                 A              f[unassigned]              
                 |                                         
          ---------------                                  
          |             |                                  
          A       h[unassigned]                            
          |                                                
    d[unassigned]                                          
             
      `));
    });
  });

  describe("a unary indirectly left recursive definition and a sibling directly left recursive definition", () => {
    const bnf = `
 
    A  ::=  B "h" 
      
         |  "g" 
  
         ;
  
    B  ::=  B "e" "f"
    
         |  A 
    
         |  "c" 
  
         ;
              
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A    ::= A_ A~* ;
    
    B    ::= B_ B~*
    
           | A B~A~
    
           ;
    
    B_   ::= "c" ;
    
    B~   ::= "e" "f" ;
    
    B__  ::= B_ B~* ;
    
    B~A~ ::= B~* ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;
      
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gefh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `

                                      A                    
                                      |                    
                        -----------------------------      
                        |                           |      
                        B                     h[unassigned]
                        |                                  
          -----------------------------                    
          |             |             |                    
          B       e[unassigned] f[unassigned]              
          |                                                
          A                                                
          |                                                
    g[unassigned]                                          
      
      `));
    });
  });

  describe("an indirectly left recursive definition and an isolated sibling directly left recursive definition", () => {
    const bnf = `
  
    A  ::=  B "g" 
      
         |  "f" 
 
         ;

    B  ::=  B "e"
    
         |  A "d" 
    
         ;
              
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A    ::= A_ A~* ;
    
    B    ::= A B~A~ ;
    
    B~   ::= "e" ;
    
    B__  ::=  ;
    
    B~A~ ::= "d" B~* ;
    
    A_   ::= "f" ;
    
    A~   ::= B~A~ "g" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "fdeeg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                     A                   
                                                     |                   
                                        ---------------------------      
                                        |                         |      
                                        B                   g[unassigned]
                                        |                                
                            -------------------------                    
                            |                       |                    
                            B                 e[unassigned]              
                            |                                            
                 ----------------------                                  
                 |                    |                                  
                 B              e[unassigned]                            
                 |                                                       
          ---------------                                                
          |             |                                                
          A       d[unassigned]                                          
          |                                                              
    f[unassigned]                                                        

      `));
    });
  });

  describe("an indirectly left recursive definition of length two and a unary intermediate left recursive definition", () => {
    const bnf = `
    
    S  ::=  A ;
    
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
      
    S    ::= A ;
    
    A    ::= A_ A~* ;
    
    E    ::= F__
    
           | A E~A~
    
           ;
    
    T    ::= "n" ;
    
    F    ::= "(" A ")"
    
           | A F~A~
    
           ;
    
    F__  ::= "(" A ")" ;
    
    F~A~ ::= "+" A ;
    
    E__  ::= F__ ;
    
    E~A~ ::= F~A~ ;
    
    A_   ::= T
    
           | E__
    
           ;
    
    A~   ::= E~A~ ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "(n+n)",
            startRuleName = "F",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                                      F                                  
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

  rules = eliminateLeftRecursion(rules);

  const multiLine = true,
        rulesString = rulesAsString(rules, multiLine),
        adjustedBNF = rulesString;  ///

  return adjustedBNF;
}

function exampleLexerFromNothing() {
  const unassigned = ".",
        entries = [
          {
            unassigned
          }
        ],
        exampleLexer = ExampleLexer.fromEntries(entries);

  return exampleLexer;
}

function parseTreeStringFromBNFAndContent(bnf, content, startRuleName = null) {
  let rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);

  const exampleLexer = exampleLexerFromNothing(),
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
