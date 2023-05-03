"use strict";

const { assert } = require("chai");

const { rulesUtilities, parserUtilities } = require("occam-parsers");

const { rewriteNode, ExampleLexer, ExampleParser, eliminateLeftRecursion } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  describe("all the reduced rules in a cycle are empty", () => {
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
      
          | B
      
          | "e"
      
          ;
  
      B ::= A "f"?
      
          | "g"
      
          ;
        
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

  describe("a cycle where some but not all of the reduced rules are empty", () => {
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
        
        A   ::= A_ A~* ;
        
        B   ::= B_ B~* ;
        
        A_  ::= "e" ;
        
        B_  ::= "d" ;
        
        A~B ::= "g" ;
        
        B~A ::= "h" ;
        
        A~  ::= B~A B~* A~B ;
        
        B~  ::= B~A B~* A~B ;
      
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

  describe("cycles of length one and two", () => {
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
        
        A   ::= A_ A~* ;
        
        B   ::= B_ B~* ;
        
        A_  ::= "e" ;
        
        B_  ::= "g" ;
        
        A~A ::= "c" ;
        
        A~B ::= "d" ;
        
        B~A ::= "f" ;
    
        A~  ::= A~A
        
              | B~A B~* A~B
        
              ;
        
        B~  ::= B~A B~* A~B ;
        
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

  describe("cycles of length one, tow and three", () => {
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
        
        A   ::= A_ A~* ;
        
        B   ::= B_ B~* ;
        
        C   ::= C_ C~* ;
        
        D   ::= D_ D~* ;
        
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
        
              | D~A D~* C~D C~* B~C B~* A~B
        
              | B~A B~* A~B
        
              ;
        
        C~  ::= D~B D~* C~D C~* B~C
        
              | D~A D~* C~D C~* B~C B~* A~B
        
              ;
        
        D~  ::= D~B D~* C~D C~* B~C
        
              | D~A D~* C~D C~* B~C B~* A~B
        
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

  describe("a strictly unary implicitly left recursive definition", () => {
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
        
        A   ::= A_ A~* ;
        
        B   ::= B_ B~* ;
        
        B_  ::= "d" ;
        
        A_  ::= "c" ;
        
        B~A ::= "e" ;
        
        A~B ::= ε ;
        
        B~  ::= A~B A~* B~A ;
        
        A~  ::= A~B A~* B~A ;
              
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


















  xdescribe("a strictly unary indirectly left recursive definition", () => {
    const bnf = `
  
    A ::= B "d"
    
        | "c"
    
        ;
    
    B ::= A 
    
        | "a"
    
        ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
      
    A    ::= A_ A~* ;
    
    B    ::= "a"
    
           | A_B_ B~A~
    
           ;
    
    B__  ::= "a" ;
    
    B~A~ ::= ε ;
    
    A_B_ ::= "c"
    
           | B__ "d"
    
           ;
    
    A_   ::= "c"
    
           | B__ "d"
    
           ;
    
    A~   ::= B~A~ "d" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "addd",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                                        A                  
                                        |                  
                            -------------------------      
                            |                       |      
                            B                 d[unassigned]
                            |                              
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
    a[unassigned]                                          
             
      `));
    });
  });

  xdescribe("two sibling indirectly left recursive definitions", () => {
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
    
           | A_B_ B~A~
    
           ;
    
    B__  ::= "b"
    
           | "c"
    
           ;
    
    B~A~ ::= "h"
    
           | "f"
    
           ;
    
    A_B_ ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A_   ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A~   ::= B~A~ "g" ;
    
      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("two isolated sibling indirectly left recursive definitions", () => {
    const bnf = `
  
    A ::= B "g" 
     
        | "c"
        
        ;

    B ::= A "h" 
    
        | A "f"
        
        ;

`;

    it("do not throw an exception", () => {
      assert.doesNotThrow(() => {
        adjustedBNFFromBNF(bnf)
      });
    });
  });

  xdescribe("an indirectly left recursive definition and an isolated left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= "d" 
     
        | A "h" 
     
        | "c"
        
        ;

`;

    it("do not throw an exception", () => {
      assert.doesNotThrow(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("an isolated indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" ;

`;

    it("do throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two isolated indirectly left recursive definitions and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" 
    
        | A "f"
        
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two mismatched sibling indirectly left recursive definitions", () => {
    const bnf = `
   
A ::= B "h"

    | "d"

    ;

B ::= A "g"

    | A+ "f"

    | "c"

    ;

`;

    it("do throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two non-sibling indirectly left recursive definitions", () => {
    const bnf = `
  
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
              
    A    ::= A_ A~* ;
    
    B    ::= "d"
    
           | A_B_ B~A~
    
           ;
    
    C    ::= "a"
    
           | A_C_ C~A~
    
           ;
    
    B__  ::= "d" ;
    
    B~A~ ::= "f" ;
    
    A_B_ ::= C "k"
    
           | "b"
    
           | B__ "h"
    
           ;
    
    C__  ::= "a" ;
    
    C~A~ ::= "e" ;
    
    A_C_ ::= "b"
    
           | B__ "h"
    
           | C__ "k"
    
           ;
    
    A_   ::= "b"
    
           | B__ "h"
    
           | C__ "k"
    
           ;
    
    A~   ::= B~A~ "h"
    
           | C~A~ "k"
    
           ;
                      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "bekfh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                     A                   
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

  xdescribe("two sibling but unrelated implicitly left recursive definitions", () => {
    const bnf = `
  
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
                  
    A    ::= A_ A~* ;
    
    B    ::= "d"
    
           | A_B_ B~A~
    
           ;
    
    C    ::= "a"
    
           | A_C_ C~A~
    
           ;
    
    B__  ::= "d" ;
    
    B~A~ ::= "f" ;
    
    A_B_ ::= C "k"
    
           | "b"
    
           | B__ "h"
    
           ;
    
    C__  ::= "a" ;
    
    C~A~ ::= "e" ;
    
    A_C_ ::= "b"
    
           | B__ "h"
    
           | C__ "k"
    
           ;
    
    A_   ::= "b"
    
           | B__ "h"
    
           | C__ "k"
    
           ;
    
    A~   ::= B~A~ "h"
    
           | C~A~ "k"
    
           ;
                                 
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "bekfh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `          
                                                     A                   
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

  xdescribe("two sibling definitions, one implicitly left recursive and one indirectly left recursive", () => {
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
          
    A    ::= A_ A~* ;
    
    B    ::= "f"
    
           | C_B_ B~C~
    
           ;
    
    C    ::= C_ C~* ;
    
    C__  ::= B "c"
    
           | "a"
    
           ;
    
    C~A~ ::= "g" ;
    
    A_C_ ::= "d"
    
           | C__ "h"
    
           ;
    
    B__  ::= "f" ;
    
    B~C~ ::= "k" ;
    
    C_B_ ::= "a"
    
           | A_C_ C~A~
    
           | B__ "c"
    
           ;
    
    A_   ::= "d"
    
           | C__ "h"
    
           ;
    
    A~   ::= C~A~ "h" ;
    
    C_   ::= "a"
    
           | A_C_ C~A~
    
           | B__ "c"
    
           ;
    
    C~   ::= B~C~ "c" ;
           
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "akch",
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

  xdescribe("an indirectly left recursive definition of depth three", () => {
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
    
           | A_B_ B~A~*
    
           ;
    
    C    ::= "b"
    
           | A C~A~*
    
           ;
    
    C__  ::= "b" ;
    
    C~A~ ::= "d"
    
           | "c"
    
           ;
    
    B__  ::= "e"
    
           | C__
    
           ;
    
    B~A~ ::= C~A~ ;
    
    A_B_ ::= "g"
    
           | B__ "h"
    
           ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;
    
    
      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("two non-sibling indirectly left recursive definitions one of depth three", () => {
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
    
           | A_B_ B~A~*
    
           ;
    
    C    ::= "d"
    
           | A C~A~*
    
           ;
    
    C__  ::= "d" ;
    
    C~A~ ::= "e" ;
    
    B__  ::= C__ ;
    
    B~A~ ::= "f"
    
           | C~A~
    
           ;
    
    A_B_ ::= "g"
    
           | B__ "h"
    
           ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("two indirectly left recursive definitions both of the same cycle", () => {
    const bnf = `
    
    S ::=  "f" A
  
        |  E... <END_OF_LINE>
  
        ;
  
    E  ::=  B "g" ;
  
    B  ::=  A "f" ;
  
    A  ::=  E 
    
         | "h" 
                                 
         ;
  
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    S    ::= "f" A
    
           | E... <END_OF_LINE>
    
           ;
    
    E    ::= A_E_ E~A~* ;
    
    B    ::= A B~A~* ;
    
    A    ::= A_ A~* ;
    
    B~A~ ::= "f" ;
    
    E~A~ ::= B~A~ "g" ;
    
    A_E_ ::= "h" ;
    
    A_   ::= "h" ;
    
    A~   ::= E~A~ ;
    

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `hfgfg
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `

                                                                   S                   
                                                                   |                   
                                                     ----------------------------      
                                                     |                          |      
                                                     E                    <END_OF_LINE>
                                                     |                                 
                                        ---------------------------                    
                                        |                         |                    
                                        B                   g[unassigned]              
                                        |                                              
                            -------------------------                                  
                            |                       |                                  
                            E                 f[unassigned]                            
                            |                                                          
                 ----------------------                                                
                 |                    |                                                
                 B              g[unassigned]                                          
                 |                                                                     
          ---------------                                                              
          |             |                                                              
          A       f[unassigned]                                                        
          |                                                                            
    h[unassigned]                                                                      
      
      `));
    });
  });

  xdescribe("two indirectly left recursive definitions and their left recursive definitions with the same underlying definitions", () => {
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
      
    S    ::= T... <END_OF_LINE> ;
    
    T    ::= T_ T~* ;
    
    A    ::= T A~T~* ;
    
    B    ::= "-" A
    
           | V
    
           | C__
    
           | T_B_ B~T~*
    
           ;
    
    C    ::= V
    
           | T C~T~*
    
           ;
    
    V    ::= . ;
    
    A~T~ ::= ε ;
    
    C__  ::= V ;
    
    C~T~ ::= A~T~ "+" A ;
    
    B__  ::= "-" A
    
           | V
    
           | C__
    
           ;
    
    B~T~ ::= C~T~ ;
    
    T_B_ ::= C
    
           | V
    
           | B__
    
           ;
    
    T_   ::= C
    
           | V
    
           | B__
    
           ;
    
    T~   ::= B~T~ ;
    
           
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
          C                           C                    
          |                           |                    
          V                           V                    
          |                           |                    
    n[unassigned]               n[unassigned]              
    
      `));
    });
  });

  xdescribe("an indirectly left recursive definition of depth four", () => {
    const bnf = `
          
        S ::=  A... <END_OF_LINE> ;
      
        A  ::=  B "c" 
        
             |  "d"
             
             ;
      
        B  ::=  C "f" 
        
             |  "g"
             
             ;
      
        C  ::=  D "h" 
        
             |  D "j" 
        
             |  "k" 
                                     
             ;
    
        D  ::=  A "p" 
        
             |  B "q" 
        
             |  C "r" 
        
             |  "s" 
                                     
             ;
    
          `;

    it.only("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    
      `));
    });
  });

  xdescribe("a directly left recursive definition and sibling non-left recursive definition each with one part", () => {
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

  xdescribe("a directly left recursive definition with two parts and a sibling non-left recursive definition with one part", () => {
    const bnf = `
 
    A ::= A "f" "g"
    
        | "h"
    
        ;
    
`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
        
    A  ::= A_ A~* ;
    
    A_ ::= "h" ;
    
    A~ ::= "f" "g" ;
         
     `));
    });

    it("results in the requisite parse tree", () => {
      const content = "hfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                      A                    
                      |                    
        -----------------------------      
        |             |             |      
        A       f[unassigned] g[unassigned]
        |                                  
  h[unassigned]                            

      `));
    });
  });

  xdescribe("a directly left recursive definition with two parts and two sibling non-left recursive definitions", () => {
    const bnf = `
 
    A ::= A "f" "g"
    
        | "h"
    
        | "k"

        ; 

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
        
    A  ::= A_ A~* ;
    
    A_ ::= "h"
    
         | "k"
    
         ;
    
    A~ ::= "f" "g" ;    

     `));
    });

    it("results in the requisite parse tree", () => {
      const content = "kfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                      A                    
                      |                    
        -----------------------------      
        |             |             |      
        A       f[unassigned] g[unassigned]
        |                                  
  k[unassigned]                            

      `));
    });
  });

  xdescribe("two sibling directly left recursive definitions and two sibling non-left recursive definitions", () => {
    const bnf = `
 
    A ::= A "f" "g"
    
        | A "h"
    
        | "k"
    
        | "j"

        ; 

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
        
    A  ::= A_ A~* ;
    
    A_ ::= "k"
    
         | "j"
    
         ;
    
    A~ ::= "f" "g"
    
         | "h"
    
         ;
                  
     `));
    });

    it("results in the requisite parse tree", () => {
      const content = "jfgh",
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
  j[unassigned]                                          
  
      `));
    });
  });

  xdescribe("an isolated directly left recursive definition", () => {
    const bnf = `
  
    A ::= A B ;

`;

    it("does throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two isolated directly left recursive definitions", () => {
    const bnf = `
  
    A ::= A B 
    
        | A "c"
        
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two sibling directly left recursive definitions that do not match", () => {
    const bnf = `
   
    A ::= "c"

        | A* "f" "g"
    
        | "d"

        | A+ "h"
    
        | "e"
    
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => {
        adjustedBNFFromBNF(bnf);
      });
    });
  });

  xdescribe("two sibling directly left recursive definitions", () => {
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

    it("results in the requisite parse tree", () => {
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

  xdescribe("two indirectly left recursive definitions with the same underlying definition", () => {
    const bnf = `

    A ::= B "f"
    
        | B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "d"

        ;
        
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
                  
    A    ::= A_ A~* ;
    
    B    ::= "d"
    
           | A_B_ B~A~
    
           ;
    
    B__  ::= "d" ;
    
    B~A~ ::= "h" ;
    
    A_B_ ::= "e"
    
           | B__ "f"
    
           | B__ "g"
    
           ;
    
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
      const content = "ehghf",
        parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
      
                                                     A                   
                                                     |                   
                                        ---------------------------      
                                        |                         |      
                                        B                   f[unassigned]
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
          A       h[unassigned]                                          
          |                                                              
    e[unassigned]                                                        
      
      `));
    });
  });

  xdescribe("two sibling but unrelated indirectly left recursive definitions", () => {
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
    
    A    ::= T_A_ A~T~ ;
    
    E    ::= T_E_ E~T~
    
           | A_E_ E~A~
    
           ;
    
    E~T~ ::= "d" ;
    
    A_E_ ::= T E~T~ "h" ;
    
    E~A~ ::= "c" ;
    
    A~   ::= E~A~ "h" ;
    
    A~T~ ::= E~T~ "h" A~* ;
    
    T_A_ ::= "f" ;
    
    T_   ::= "f" ;
    
    T~   ::= A~T~ "g" ;
      
      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("an indirectly left recursive definition that is referenced more than once", () => {
    const bnf = `

    S ::=  "a" E

        |  "b" E

        ;

    E ::=  A "f" ;

    A ::=  E 
    
        |  "g" 
        
        ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    S    ::= "a" E
    
           | "b" E
    
           ;
    
    E    ::= E_ E~* ;
    
    A    ::= "g"
    
           | E_A_ A~E~
    
           ;
    
    A__  ::= "g" ;
    
    A~E~ ::= ε ;
    
    E_A_ ::= A__ "f" ;
    
    E_   ::= A__ "f" ;
    
    E~   ::= A~E~ "f" ;
      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "agf",
          startRuleName = "",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
      
                     S                       
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

  xdescribe("an indirectly left recursive definition with an effectively unary direct directly repeated rule", () => {
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
    
    A    ::= E_A_ A~E~ ;
    
    E    ::= E_ E~* ;
    
    V    ::= . ;
    
    A~E~ ::= ε ;
    
    E_A_ ::= V ;
    
    E_   ::= V ;
    
    E~   ::= A~E~ "+" A ;
    
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

  xdescribe("an indirectly left recursive definition and sibling directly left recursive definition", () => {
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
    
           | A_B_ B~A~
    
           ;
    
    B_   ::= "c" ;
    
    B~   ::= "e" "f" ;
    
    B__  ::= B_ B~* ;
    
    B~A~ ::= "d" B~* ;
    
    A_B_ ::= "g"
    
           | B__ "h"
    
           ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("two isolated indirectly left recursive definitions with the same left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" 
     
        | "c"
        
        ;

    B ::= A "h" 
    
        | A "f"
        
        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A    ::= A_ A~* ;
    
    B    ::= A_B_ B~A~ ;
    
    B~A~ ::= "h"
    
           | "f"
    
           ;
    
    A_B_ ::= "c" ;
    
    A_   ::= "c" ;
    
    A~   ::= B~A~ "g" ;
      
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "cfghg",
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
    c[unassigned]                                                        
      
      `));
    });
  });

  xdescribe("an indirectly left recursive definition and a non-sibling directly left recursive definition", () => {
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
    
           | A_B_ B~A~
    
           ;
    
    B__  ::= "b"
    
           | "c"
    
           ;
    
    B~A~ ::= "f" ;
    
    A_B_ ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A_   ::= "d"
    
           | "e"
    
           | B__ "g"
    
           ;
    
    A~   ::= "h"
    
           | B~A~ "g"
    
           ;
                                                            
      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("an effectively unary indirectly left recursive definition and a sibling directly left recursive definition", () => {
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
    
           | A_B_ B~A~
    
           ;
    
    B_   ::= "c" ;
    
    B~   ::= "e" "f" ;
    
    B__  ::= B_ B~* ;
    
    B~A~ ::= B~* ;
    
    A_B_ ::= "g"
    
           | B__ "h"
    
           ;
    
    A_   ::= "g"
    
           | B__ "h"
    
           ;
    
    A~   ::= B~A~ "h" ;
      
      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("an indirectly left recursive definition and an isolated sibling directly left recursive definition", () => {
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
    
    B    ::= A_B_ B~A~ ;
    
    B~   ::= "e" ;
    
    B~A~ ::= "d" B~* ;
    
    A_B_ ::= "f" ;
    
    A_   ::= "f" ;
    
    A~   ::= B~A~ "g" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
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

  xdescribe("an indirectly left recursive definition of depth two and an effectively unary intermediate left recursive definition", () => {
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
    
           | A_E_ E~A~
    
           ;
    
    T    ::= "n" ;
    
    F    ::= "(" A ")"
    
           | A_F_ F~A~
    
           ;
    
    F__  ::= "(" A ")" ;
    
    F~A~ ::= "+" A ;
    
    E_F_ ::= A F~A~
    
           | F__
    
           ;
    
    E__  ::= F__ ;
    
    E~A~ ::= F~A~ ;
    
    A_E_ ::= T
    
           | E__
    
           ;
    
    A_   ::= T
    
           | E__
    
           ;
    
    A~   ::= E~A~ ;

      `));
    });

    it("results in the requisite parse tree" , () => {
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

  rewriteNode(node);

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
