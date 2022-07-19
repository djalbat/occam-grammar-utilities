"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers"),
      { FlorenceLexer, FlorenceParser } = require("occam-grammars");

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
 
    A ::= A "e"
    
        | A "f"
    
        | "g"

        | "h"

        ;
    
`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
      A  ::= A_ "g"* ;
      
      A_ ::= "f" ;
           
      `));
    });

    it.only("results in the requisite parse tree", () => {
      const content = "gef",
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

    it("result in the requisite parse tree", () => {
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

  describe("an indirectly left recursive definition", () => {
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
    
    B ::= "c"
    
        | A "h"
    
        | "d"

        ;
    
  B__ ::= "c"
    
        | "d"

        ;
    
   B~ ::= "h" ;
    
   A_ ::= "e"
    
        | B__ "g"
    
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
                   ------------------    
                   |                |    
                   B            g[custom]
                   |                     
           ----------------              
           |              |              
           A          h[custom]          
           |                             
      -----------                        
      |         |                        
      B     g[custom]                    
      |                                  
  c[custom]                              
             
      `));
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

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF,`
      
    A ::= A_ "g"* ;
    
    B ::= "b"
    
        | A
    
        | "c"

        ;

  B__ ::= "b"
    
        | "c"

        ;
      
    A_ ::= "d"
    
        | B__ "g"
    
        | "e"
    
        ;
    
      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = "eggg",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
            
                     A                   
                     |                   
      -------------------------------    
      |         |         |         |    
      A     g[custom] g[custom] g[custom]
      |                                  
  e[custom]                              
             
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

    A ::= A_ ( B~ "g" )* ;
    
    B ::= A "h"
    
        | "b"

        | A "f"
    
        | "c"

        ;

  B__ ::= "b" 
   
        | "c"
        
        ;

   B~ ::= "h" 
   
        | "f"
        
        ;

   A_ ::= "d"
    
        | B__ "g"
    
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
                   ------------------    
                   |                |    
                   B            g[custom]
                   |                     
           ----------------              
           |              |              
           A          h[custom]          
           |                             
      -----------                        
      |         |                        
      B     g[custom]                    
      |                                  
  c[custom]                              
             
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
      
    A  ::=  A_ ( B~ "h" )* ;

    B  ::=  A "f" 
    
         |  A C~
         
         |  C__
         
         ;

    C  ::=  A "e" 
    
         |  "d"
         
         ;

   C__ ::=  "d" ;
    
    C~ ::=  "e" ;

   B__ ::=  C__ ;

    B~ ::=  "f" 
    
         |  C~
         
         ;
    
    A_ ::=  B__ "h" 
      
         |  "g" 
 
         ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "dhfh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                            A            
                            |            
                   ------------------    
                   |                |    
                   B            h[custom]
                   |                     
           ----------------              
           |              |              
           A          f[custom]          
           |                             
      -----------                        
      |         |                        
      B     h[custom]                    
      |                                  
      C                                  
      |                                  
  d[custom]                              
  
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

    A ::= A_ ( "h" | ( B~ "g" ) )* ;
    
    B ::= "b"

        | A "f"
    
        | "c"

        ;

  B__ ::= "b"

        | "c"

        ;

   B~ ::= "f" ;

   A_ ::= "d"
    
        | B__ "g"

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

  describe("an indirectly left recursive definition if length greater than one", () => {
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
    
         |  C__ "f" 
         
         |  "e" 

         ;         

    C  ::=  A "d" 
    
         |  A "c" 
    
         |  "b"
         
         ;

   C__ ::=  "b" ;

    C~ ::=  "d" 
    
         |  "c" 
         
         ;

   B__ ::=  C__ "f" 
    
         |  "e"
         
         ;         

    B~ ::=  C~ "f" ;         

    A_ ::=  B__ "h" 
      
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

  describe("an indirectly left recursive definition and sibling directly left recursive definition", () => {
    const bnf = `
  
    A  ::=  B "h" 
      
         |  "g" 
 
         ;

    B  ::=  B "e" "g"
    
         |  A "f" 
    
         |  "c" 

         ;
              
`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
    A  ::=  A_ ( B~ "h" )* ;

    B  ::=  A "f" ( "e" "g" )*
    
         |  B_ ( "e" "g" )*

         ;

    B_ ::=  "c" ;
              
   B__ ::=  B_ ( "e" "g" )* ;

    B~ ::=  "f" ( "e" "g" )* ;

    A_ ::=  B__ "h" 
      
         |  "g" 
 
         ;

      `));
    });

    it("result in the requisite parse tree" , () => {
      const content = "chfegegh",
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
                                          A                                    
                                          |                                    
         ------------------------------------------------------------------    
         |                                  |                             |    
         A                                  B                         h[custom]
         |                                  |                                  
    -----------         -----------------------------------------              
    |         |         |         |         |         |         |              
    B     h[custom] f[custom] e[custom] g[custom] e[custom] g[custom]          
    |                                                                          
c[custom]                                                                      

      `));
    });
  });

  xdescribe("Florence", () => {
    const bnf = `topLevelInstruction                  ::=   comparatorDeclaration 
                                           
                                       |   combinatorDeclaration 
                                                                                      
                                       ;

comparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;

argument                             ::=   type 

                                       |   expression 
                                       
                                       ;

type                                 ::=   "NaturalNumber" ;

expression!                          ::=   arithmeticExpression ;

statement!                           ::=   arithmeticStatement ;

arithmeticExpression                 ::=   "(" argument ")"
                       
                                       |   argument "+" argument

                                       ;

arithmeticStatement                  ::=  argument ;

`;

    it("is rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
      
topLevelInstruction                  ::=   comparatorDeclaration 
                                           
                                       |   combinatorDeclaration 
                                                                                      
                                       ;

comparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;
 
combinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;

argument                             ::=   argument_ expression~* ;

type                                 ::=   "NaturalNumber" ;

expression!                          ::=   argument arithmeticExpression~ 
 
                                       |   arithmeticExpression__
                                       
                                       ;

statement!                           ::=   arithmeticStatement ;

arithmeticExpression                 ::=  "(" argument ")"
                       
                                       |  argument "+" argument

                                       ;

arithmeticStatement                  ::=  argument ;

arithmeticExpression__               ::=  "(" argument ")" ;

arithmeticExpression~                ::=  "+" argument ;

expression__                         ::=  arithmeticExpression__ ;
                                       
expression~                          ::=  arithmeticExpression~ ;

argument_                            ::=   type 

                                       |   expression__

                                       ;

      `));
    });

    it("results in the requisite parse tree" , () => {
      const content = `Combinator (NaturalNumber + NaturalNumber):NaturalNumber
`,
            parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `    
    
                                                              topLevelInstruction                                                           
                                                                       |                                                                    
                                                             combinatorDeclaration                                                          
                                                                       |                                                                    
         -----------------------------------------------------------------------------------------------------------------------------      
         |                                                |                                          |              |                |      
Combinator[keyword]                                  expression                                 :[special]        type         <END_OF_LINE>
                                                          |                                                         |                       
                                                arithmeticExpression                                       NaturalNumber[name]              
                                                          |                                                                                 
                         ------------------------------------------------------------------                                                 
                         |                               |                                |                                                 
                    ([special]                       argument                        )[special]                                             
                                                         |                                                                                  
                                        -----------------------------------                                                                 
                                        |                |                |                                                                 
                                    argument       +[unassigned]      argument                                                              
                                        |                                 |                                                                 
                                      type                              type                                                                
                                        |                                 |                                                                 
                               NaturalNumber[name]               NaturalNumber[name]                                                        


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

  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules);

  eliminateLeftRecursion(startRule, ruleMap);

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

  const ruleMap = ruleMapFromRules(rules),
        startRule = startRuleFromRules(rules);

  eliminateLeftRecursion(startRule, ruleMap);

  // const { entries } = FlorenceLexer,
  //       lexicalPattern = "\\+",
  //       custom = lexicalPattern;  ///
  //
  // entries.push({
  //   custom
  // });
  //
  // const florenceLexer = FlorenceLexer.fromEntries(entries),
  //       florenceParser = new FlorenceParser(startRule, ruleMap),  ///
  //       tokens = florenceLexer.tokenise(content),
  //       node = florenceParser.parse(tokens);

  const lexicalPattern = ".", ///
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
