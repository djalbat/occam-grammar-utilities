"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rulesUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } = require("../lib/index.js");

const { rulesFromBNF, rulesAsString, ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  xdescribe("a single unary directly left recursive definition", () => {
    const bnf = `
  
A ::= A

    | "f"

    ;

`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("a single complex directly left recursive definition", () => {
    const bnf = `
  
A ::= ( A B )

    | "f"

    ;

`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("a single isolated directly left recursive definition", () => {
    const bnf = `
  
A ::= A "f" ;

`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("a single non-unary directly left recursive definition", () => {
    const bnf = `
  
A ::= A "g"

    | "f"

    ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
A  ::= A_ "g"* ;

A_ ::= "f" ;

`));

    });

    it("results in the requisite parse tree" +
        "", () => {
      const content = "fg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
          A(0-1)         
             |           
      --------------     
      |            |     
    A(0)     g[custom](1)
      |                  
f[custom](0)
             
`));

    });
  });

  xdescribe("two single non-unary directly left recursive definitions", () => {
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
      const content = "efgh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                       A(0-3)                      
                          |                        
      ----------------------------------------     
      |            |            |            |     
    A(0)     f[custom](1) g[custom](2) h[custom](3)
      |                                            
e[custom](0)                                       
             
`));

    });
  });

  xdescribe("an indirectly left recursive rule and corresponding implicitly left recursive rule are both additionally directly left recursive", () => {
    const bnf = `
  
    A ::= B "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | B "d"
    
        | "c"

        ;
`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("a single unary indirectly left recursive definition and the corresponding unary implicitly left recursive definition", () => {
    const bnf = `
  
A ::= B 

    | "f"

    ;

B ::= C ;

C ::= A ;

`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("a single non-unary indirectly left recursive definition and the corresponding unary implicitly left recursive definition", () => {
    const bnf = `
  
S ::= A

    | "e"
    
    ;  
  
A ::= S "f" 

    | "g"
    
    ;  

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
S  ::= A

     | S_

     ;

A  ::= A_ "f"* ;

A_ ::= S_ "f"

     | "g"

     ;

S_ ::= "e" ;

`));

    });

    it("results in the requisite parse tree" +
        "", () => {
      const content = "ef",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
          S(0-1)         
             |           
          A(0-1)         
             |           
      --------------     
      |            |     
    S(0)     f[custom](1)
      |                  
e[custom](0)             
             
`));

    });
  });

  xdescribe("a single non-unary indirectly left recursive definition and the corresponding non-unary implicitly left recursive definition", () => {
    const bnf = `
  
A ::= B "e"

    | "f"

    ;

B ::= C ;

C ::= A "g" ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
A  ::= B "e"

     | A_

     ;

B  ::= C ;

C  ::= C_ ( "e" "g" )* ;

C_ ::= A_ "g" ;

A_ ::= "f" ;

`));

    });

    it("results in the requisite parse tree" +
        "", () => {
      const content = "fge",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                    A(0-2)            
                       |              
             --------------------     
             |                  |     
          B(0-1)          e[custom](2)
             |                        
          C(0-1)                      
             |                        
      --------------                  
      |            |                  
    A(0)     g[custom](1)             
      |                               
f[custom](0)                          
             
`));

    });
  });

  describe("a single non-unary indirectly left recursive definition with a sibling directly left recursive definitions and the corresponding non-unary implicitly left recursive definition", () => {
    const bnf = `
   
    A ::= B "h"
    
        | "d"
    
        ;
    
    B ::= A "g"
    
        | B "f"

        | B "e"
    
        | "c"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A ::= A_ ( B~ "h" )* ;
    
    B ::= B_ ( "f" | "e" )* ;

   B_ ::= "c" ;

   B~ ::= "g" ;

   A_ ::= B_ ( "f" | "e" )* "h"
    
        | "d"
    
        ;

`));

    });

    xit("result in the requisite parse tree" , () => {
      const content = "cgfhg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                 A(0-4)                         
                                    |                           
             ----------------------------------------------     
             |                  |            |            |     
          A(0-1)          f[custom](2)     B(3)     g[custom](4)
             |                               |                  
      --------------                   h[custom](3)             
      |            |                                            
    B(0)     g[custom](1)                                       
      |                                                         
c[custom](0)                                                    
             
`));

    });
  });

  xdescribe("a single non-unary indirectly left recursive definition and the corresponding non-unary implicitly left recursive definition with a sibling directly left recursive definition", () => {
    const bnf = `
   
    A ::= B "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "c"

        ;

`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    A ::= A_ ( ( B~ "g" ) | "f" )* ;
    
    B ::= A B~
    
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
      const content = "cgfhg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                 A(0-4)                         
                                    |                           
             ----------------------------------------------     
             |                  |            |            |     
          A(0-1)          f[custom](2)     B(3)     g[custom](4)
             |                               |                  
      --------------                   h[custom](3)             
      |            |                                            
    B(0)     g[custom](1)                                       
      |                                                         
c[custom](0)                                                    
             
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

  const parseTree = node.asParseTree(tokens);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function basicParserFromStartRuleAndRuleMap(startRule, ruleMap) {
  const basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}
