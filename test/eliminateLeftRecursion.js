"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rewriteNodes, rulesUtilities, parserUtilities, eliminateLeftRecursion } = require("../lib/index.js"); ///

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

  describe("a unary indirectly left recursive definition", () => {
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

  xdescribe("a unary implicitly left recursive definition", () => {
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
             ----------------    
             |              |    
             A          f[custom]
             |                   
        -----------              
        |         |              
        A     f[custom]          
        |                        
    g[custom]                    

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
                  ---------------------    
                  |                   |    
                  A               h[custom]
                  |                        
        ---------------------              
        |         |         |              
        A     f[custom] g[custom]          
        |                                  
    c[custom]                              
             
      `));
    });
  });

  describe("an indirectly left recursive definition", () => {
    const bnf = `
  
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
      
    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~?
    
          | "d"
    
          ;
    
    B~~ ::= "h" ;
    
    B__ ::= "d" ;
    
    A_  ::= B__ "g"
    
          | "e"
    
          ;
    
    A~  ::= B~~ "g" ;        

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "dgh",
            startRuleName = "B",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
            
                     B           
                     |           
             ----------------    
             |              |    
             A          h[custom]
             |                   
        -----------              
        |         |              
        B     g[custom]          
        |                        
    d[custom]                    
             
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
      
    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~? ;
    
    B~~ ::= ε ;
    
    A_  ::= "c" ;
    
    A~  ::= B~~ "d" ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "cdd",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                     A           
                     |           
             ----------------    
             |              |    
             B          d[custom]
             |                   
             A                   
             |                   
        -----------              
        |         |              
        B     d[custom]          
        |                        
        A                        
        |                        
    c[custom]                    
             
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

    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~?
    
          | "b"
    
          | "c"
    
          ;
    
    B~~ ::= "h"
    
          | "f"
    
          ;
    
    B__ ::= "b"
    
          | "c"
    
          ;
    
    A_  ::= "d"
    
          | B__ "g"
    
          | "e"
    
          ;
    
    A~  ::= B~~ "g" ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "efghg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                                       A             
                                       |             
                              -------------------    
                              |                 |    
                              B             g[custom]
                              |                      
                     ------------------              
                     |                |              
                     A            h[custom]          
                     |                               
             ----------------                        
             |              |                        
             B          g[custom]                    
             |                                       
        -----------                                  
        |         |                                  
        A     f[custom]                              
        |                                            
    e[custom]                                        
             
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
      
    A  ::=  A_ A~* ;

    B  ::=  A_ A~* B~~? 
    
         |  C__
         
         ;

    C  ::=  A_ A~* C~~?
    
         |  "d"
         
         ;
    
   C~~ ::=  "e" ;
    
   C__ ::=  "d" ;
    
   B~~ ::=  "f" 
    
         |  C~~
         
         ;

   B__ ::=  C__ ;

    A_ ::=  B__ "h" 
      
         |  "g" 
 
         ;

    A~ ::=  B~~ "h" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gehe",
            startRuleName = "C",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                              C            
                              |            
                     ------------------    
                     |                |    
                     A            e[custom]
                     |                     
             ----------------              
             |              |              
             B          h[custom]          
             |                             
             C                             
             |                             
        -----------                        
        |         |                        
        A     e[custom]                    
        |                                  
    g[custom]                              
  
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
        
    A   ::= A_ A~* ;
    
    B   ::= "b"
    
          | A_ A~* B~~?
    
          | "c"
    
          ;
    
    B~~ ::= "f" ;
    
    B__ ::= "b"
    
          | "c"
    
          ;
    
    A_  ::= "d"
    
          | B__ "g"
    
          | "e"
    
          ;
    
    A~  ::= "h"
    
          | B~~ "g"
    
          ;
                    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "dhfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
              
                              A            
                              |            
                     ------------------    
                     |                |    
                     B            g[custom]
                     |                     
             ----------------              
             |              |              
             A          f[custom]          
             |                             
        -----------                        
        |         |                        
        A     h[custom]                    
        |                                  
    d[custom]                              
             
      `));
    });
  });

  describe("an indirectly left recursive definition of length two", () => {
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

    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~?
    
          | C__
    
          | "e"
    
          ;
    
    C   ::= A_ A~* C~~?
    
          | "b"
    
          ;
    
    C~~ ::= "d"
    
          | "c"
    
          ;
    
    C__ ::= "b" ;
    
    B~~ ::= C~~ ;
    
    B__ ::= C__
    
          | "e"
    
          ;
    
    A_  ::= B__ "h"
    
          | "g"
    
          ;
    
    A~  ::= B~~ "h" ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gchd",
            startRuleName = "C",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                              C            
                              |            
                     ------------------    
                     |                |    
                     A            d[custom]
                     |                     
             ----------------              
             |              |              
             B          h[custom]          
             |                             
             C                             
             |                             
        -----------                        
        |         |                        
        A     c[custom]                    
        |                                  
    g[custom]                              
    
      `));
    });
  });

  describe("an indirectly left recursive definition with a unary direct directly repeated rule", () => {
    const bnf = `
    
    A ::=  E ;
    
    E ::=  A "+" A
    
        |  V
    
        ;
    
    V ::=  . ;
     
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
              
    A   ::= A_ A~* ;
    
    E   ::= A_ A~* E~~?
    
          | V
    
          ;
    
    V   ::= . ;
    
    E~~ ::= "+" A ;
    
    E__ ::= V ;
    
    A_  ::= E__ ;
    
    A~  ::= E~~ ;
        
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "n+m",
          startRuleName = "E",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                  E              
                  |              
        ---------------------    
        |         |         |    
        A     +[custom]     A    
        |                   |    
        E                   E    
        |                   |    
        V                   V    
        |                   |    
    n[custom]           m[custom]
    
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

    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~?
    
          | B_ B~*
    
          ;
    
    B_  ::= "c" ;
    
    B~  ::= "e" "f" ;
    
    B~~ ::= "d" B~* ;
    
    B__ ::= B_ B~* ;
    
    A_  ::= B__ "h"
    
          | "g"
    
          ;
    
    A~  ::= B~~ "h" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gdefefh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                                       A                 
                                                       |                 
                                          ---------------------------    
                                          |                         |    
                                          B                     h[custom]
                                          |                              
                          ---------------------------------              
                          |                     |         |              
                          B                 e[custom] f[custom]          
                          |                                              
             --------------------------                                  
             |              |         |                                  
             B          e[custom] f[custom]                              
             |                                                           
        -----------                                                      
        |         |                                                      
        A     d[custom]                                                  
        |                                                                
    g[custom]                                                            

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

    it.only("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, ``));
    });

    it("result in the requisite parse tree" , () => {
      const content = "fdeeg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, ``));
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
      
    A   ::= A_ A~* ;
    
    B   ::= A_ A~* B~~? ;
    
    B~  ::= "e" ;
    
    B~~ ::= "d" B~* ;
    
    A_  ::= "f" ;
    
    A~  ::= B~~ "g" ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "fdeeg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                       A             
                                       |             
                              -------------------    
                              |                 |    
                              B             g[custom]
                              |                      
                     ------------------              
                     |                |              
                     B            e[custom]          
                     |                               
             ----------------                        
             |              |                        
             B          e[custom]                    
             |                                       
        -----------                                  
        |         |                                  
        A     d[custom]                              
        |                                            
    f[custom]                                        

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
      
    S   ::= A ;
    
    A   ::= A_ A~* ;
    
    E   ::= A_ A~* E~~?
    
          | F__
    
          ;
    
    T   ::= "n" ;
    
    F   ::= "(" A ")"
    
          | A_ A~* F~~?
    
          ;
    
    F~~ ::= "+" A ;
    
    F__ ::= "(" A ")" ;
    
    E~~ ::= F~~ ;
    
    E__ ::= F__ ;
    
    A_  ::= E__
    
          | T
    
          ;
    
    A~  ::= E~~ ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "(n+n)",
            startRuleName = "F",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content, startRuleName);

      assert.isTrue(compare(parseTreeString, `
          
                            F                        
                            |                        
        -----------------------------------------    
        |                   |                   |    
    ([custom]               A               )[custom]
                            |                        
                            E                        
                            |                        
                            F                        
                            |                        
                  ---------------------              
                  |         |         |              
                  A     +[custom]     A              
                  |                   |              
                  T                   T              
                  |                   |              
              n[custom]           n[custom]          

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

function basicLexerFromLexicalPattern(lexicalPattern) {
  const unassigned = "^.*$",  ///
        custom = lexicalPattern,  ///
        entries = [
          {
            custom
          },
          {
            unassigned
          }
        ],
        basicLexer = BasicLexer.fromEntries(entries);

  return basicLexer;
}

function parseTreeStringFromBNFAndContent(bnf, content, startRuleName = null) {
  let rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);

  const lexicalPattern = ".", ///
        basicLexer = basicLexerFromLexicalPattern(lexicalPattern),
        basicParser =  basicParserFromRulesAndStartRuleName(rules, startRuleName);

  const tokens = basicLexer.tokenise(content),
        node = basicParser.parse(tokens);

  rewriteNodes(node);

  const abridged = true,
        parseTree = node.asParseTree(tokens, abridged);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function basicParserFromRulesAndStartRuleName(rules, startRuleName) {
  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName),
        basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}
