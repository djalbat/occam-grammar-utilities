"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rulesUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } = require("../lib/index.js");

const { rulesFromBNF, rulesAsString, ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  describe("a complex directly left recursive definition", () => {
    const bnf = `
  
A ::= ( A | B )

    | "f"

    ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a complex indirectly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g"
    
        | "e"
    
        ;
    
    B ::= ( A | C ) "h"
    
        | "c"

        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a complex implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= ( B | C ) "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "c"

        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary directly left recursive definition", () => {
    const bnf = `
  
A ::= A

    | "f"

    ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary indirectly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g"
    
        | "e"
    
        ;
    
    B ::= A
    
        | "c"

        ;

`;

    it("does not throw an exception", () => {
      assert.doesNotThrow(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a unary implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B 
    
        | "e"
    
        ;
    
    B ::= A
    
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

  describe("an isolated indirectly left recursive definition and a non-isolated implicitly left recursive definition", () => {
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

  describe("a non-isolated indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" 
     
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

  describe("an indirectly left recursive definition with a sibling directly left recursive definition", () => {
    const bnf = `
   
    A ::= B "h"
    
        | "d"
    
        ;
    
    B ::= A "g"
    
        | B "f"

        | "c"

        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a directly left recursive definition", () => {
    const bnf = `
 
  A ::= A "g"
  
      | "f"
  
      ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
A  ::= A_ "g"* ;

A_ ::= "f"

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
   
    A ::= A "f" "g"
    
        | A "h"
    
        | "e"
    
        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
  A  ::= A_ ( ( "f" "g" ) | "h" )* ;
  
  A_ ::= "e" ;

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
  
    A ::= B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "c"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A ::= A_ ( B~ "g" )* ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;

   A_ ::= B_ "g"
    
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

  describe("two sibling indirectly left recursive definitions and an implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
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

   B_ ::= "c" ;

   B~ ::= ( "h" | "f" );

   A_ ::= B_ "g"
    
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
