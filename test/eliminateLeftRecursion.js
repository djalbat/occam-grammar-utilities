"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rulesUtilities, eliminateLeftRecursion, removeOrRenameReducedNodes } = require("../lib/index.js");

const { rulesFromBNF, rulesAsString, ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  describe("a single unary directly left recursive definition", () => {
    const bnf = `
  
A ::= A

    | "f"

    ;

`;

    it("throws an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  describe("a single non-unary directly left recursive definition", () => {
    const bnf = `
  
A ::= A "g"

    | "f"

    ;

`;

    it("is rewritten to reference a reduced rule", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
A  ::= A_ "g"+? ;

A_ ::= "f" ;

`));

    });

    it("and results in a parse tree with the requisite repetition", () => {
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

  describe("a single unary indirectly left recursive definition and the corresponding unary implicitly left recursive definition", () => {
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

  describe("a single non-unary indirectly left recursive definition and the corresponding unary implicitly left recursive definition", () => {
    const bnf = `
  
S ::= A

    | "e"
    
    ;  
  
A ::= S "f" 

    | "g"
    
    ;  

`;

    it("is rewritten to reference a reduced rule", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
S  ::= A ;

S_ ::= "e" ;

A  ::= S_ "f"+?

     | "g"

     ;
     
`));

    });

    it("and results in a parse tree with the requisite repetition", () => {
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

  describe("a single non-unary indirectly left recursive definition and the corresponding non-unary implicitly left recursive definition", () => {
    const bnf = `
  
A ::= B 

    | "f"

    ;

B ::= C ;

C ::= A "g" ;

`;

    it("is rewritten to reference a reduced rule", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `
    
A  ::= B ;

B  ::= C ;

A_ ::= "f" ;

C  ::= A_ "g"+? ;

`));

    });

    it("and results in a parse tree with the requisite repetition", () => {
      const content = "fg",
          parseTreeString = parseTreeStringFromBNFAndContent(bnf, content);

      assert.isTrue(compare(parseTreeString, `
          
          A(0-1)         
             |           
          B(0-1)         
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

  removeOrRenameReducedNodes(node);

  const parseTree = node.asParseTree(tokens);

  parseTree.shiftLine();  //

  const parseTreeString = parseTree.asString();

  return parseTreeString;
}

function basicParserFromStartRuleAndRuleMap(startRule, ruleMap) {
  const basicParser = new BasicParser(startRule, ruleMap);

  return basicParser;
}
