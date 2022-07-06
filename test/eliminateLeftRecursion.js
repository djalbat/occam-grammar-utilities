"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rulesUtilities, parserUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

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
      adjustedBNFFromBNF(bnf)

      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary implicitly left recursive definition", () => {
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

  describe("an isolated indirectly left recursive definition and a implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" 
     
        | "c"
        
        ;

    B ::= A "h" ;

`;

    it("do not throw an exception", () => {
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

  describe("two sibling indirectly left recursive definitions that do not match", () => {
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
 
    A ::= "h"
    
        | A... "g"
    
        | "f"
    
        ;
  
`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
      A  ::= A_... "g"* ;
      
      A_ ::= "h"
      
           | "f"
      
           ;
           
      `));
    });

    it("results in the requisite parse tree", () => {
      const content = "fgg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                A              
                |              
      ---------------------    
      |         |         |    
      A     g[custom] g[custom]
      |                        
  f[custom]                    
           
      `));
    });
  });

  describe("two sibling directly left recursive definitions", () => {
    const bnf = `
   
    A ::= "c"

        | A* "f" "g"
    
        | "d"

        | A* "h"
    
        | "e"
    
        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
  A  ::= A_* ( ( "f" "g" ) | "h" )* ;
  
  A_ ::= "c" 
  
       | "d" 
  
       | "e"
       
       ;

      `));
    });

    it("result in the requisite parse tree" +
        "", () => {
      const content = "ehfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                     A                   
                     |                   
      -------------------------------    
      |         |         |         |    
      A     h[custom] f[custom] g[custom]
      |                                  
  e[custom]                              
             
      `));
    });
  });

  describe("an indirectly left recursive definition and an implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= "e"
    
        | B "g"
    
        | "f"
    
        ;
    
    B ::= "c"
    
        | A "h"
    
        | "d"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A ::= A_ ( B~ "g" )* ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" 
   
        | "d"
        
        ;

   B~ ::= "h" ;

   A_ ::= "e"
    
        | B_ "g"
    
        | "f"

        ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "cghg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                        A                
                        |                
           --------------------------    
           |              |         |    
           A              B     g[custom]
           |              |              
      -----------     h[custom]          
      |         |                        
      B     g[custom]                    
      |                                  
  c[custom]                              
             
      `));
    });
  });

  describe("a directly left recursive definition and sibling implicitly left recursive definition", () => {
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

    A ::= A_ ( "h" | ( B~ "g" ) )* ;
    
    B ::= A "f"
    
        | B_

        ;

   B_ ::= "b"

        | "c"

        ;

   B~ ::= "f" ;
    
   A_ ::= "d"
    
        | B_ "g"
    
        | "e"
    
        ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "dhfg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                     A                   
                     |                   
      -------------------------------    
      |         |         |         |    
      A     h[custom]     B     g[custom]
      |                   |              
  d[custom]           f[custom]          
             
      `));
    });
  });

  describe("two sibling indirectly left recursive definitions and an implicitly left recursive definition", () => {
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

    A ::= A_ ( B~ "g" )* ;
    
    B ::= A "h"
    
        | A "f"
    
        | B_

        ;

   B_ ::= "b" 
   
        | "c"
        
        ;

   B~ ::= ( "h" | "f" );

   A_ ::= "d"
    
        | B_ "g"
    
        | "e"
    
        ;
    
      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "cghg",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                        A                
                        |                
           --------------------------    
           |              |         |    
           A              B     g[custom]
           |              |              
      -----------     h[custom]          
      |         |                        
      B     g[custom]                    
      |                                  
  c[custom]                              
             
      `));
    });
  });

  describe("an indirectly left recursive definition separated from an implicitly left recursive definition by an intermediate left recursive definition", () => {
    const bnf = `
    
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  C "f" 
    
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

    A  ::=  A_ ( B~ "h" )* ;

    B  ::=  A C~ "f" 
    
         |  B_
         
         ;         

    C  ::=  A "d" 
    
         |  A "c" 
    
         |  C_
         
         ;

    C_ ::=  "b" ;

    C~ ::=  ( "d" | "c" );

    B_ ::=  C_ "f" 
    
         |  "e"
         
         ;         

    B~ ::=  C~ "f" ;         

    A_ ::=  B_ "h" 
      
         |  "g" 
 
         ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gcfh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                   A                   
                   |                   
    -------------------------------    
    |              |              |    
    A              B          h[custom]
    |              |                   
g[custom]     -----------              
              |         |              
              C     f[custom]          
              |                        
          c[custom]                    
             
      `));
    });
  });

  describe("two indirectly left recursive definitions and one implicitly left recursive definition", () => {
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

    A  ::=  A_ ( B~ "h" )* ;

    B  ::=  A "f"
         
         |  A C~
         
         |  B_

         ;

    C  ::=  A "e" 
    
         |  C_
         
         ;

    C_ ::=  "d" ;

    C~ ::=  "e" ;
    
    B_ ::=  C_ ;

    B~ ::=  ( "f" | C~ ) ;
    
    A_ ::=  B_ "h" 
      
         |  "g" 
 
         ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "gfheh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                        A                        
                        |                        
    -----------------------------------------    
    |         |         |         |         |    
    A         B     h[custom]     B     h[custom]
    |         |                   |              
g[custom] f[custom]               C              
                                  |              
                              e[custom]          
             
      `));
    });
  });

  describe.only("an indirectly left recursive definition and sibling directly left recursive definition", () => {
    const bnf = `
  
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  B "e" 
    
         |  A "f" 
    
         |  "c" 

         ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A  ::=  A "f" B~* "h" 
      
         |  B_ B~* "h" 
      
         |  "g" 
 
         ;

    B  ::=  A "f" "e"* 
    
         |  B_ "e"*

         ;

    B_ ::=  "c" ;

    B~ ::=  "e" ;

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

  const ruleMap = ruleMapFromRules(rules);

  let startRule = startRuleFromRules(rules);

  startRule = eliminateLeftRecursion(startRule, ruleMap);

  rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

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

function parseTreeStringFromBNFAndContent(bnf, content) {
  let rules = rulesFromBNF(bnf);

  const ruleMap = ruleMapFromRules(rules);

  let startRule = startRuleFromRules(rules);

  startRule = eliminateLeftRecursion(startRule, ruleMap);

  const lexicalPattern = ".",
        basicLexer = basicLexerFromLexicalPattern(lexicalPattern),
        basicParser =  basicParserFromStartRuleAndRuleMap(startRule, ruleMap);

  const tokens = basicLexer.tokenise(content),
        node = basicParser.parse(tokens);

  removeOrRenameIntermediateNodes(node);

  const abridged = true,
        parseTree = node.asParseTree(tokens, abridged);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function basicParserFromStartRuleAndRuleMap(startRule, ruleMap) {
  const basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}
