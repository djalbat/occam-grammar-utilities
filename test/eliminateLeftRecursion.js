"use strict";

const { assert } = require("chai"),
      { BasicLexer } = require("occam-lexers"),
      { BasicParser } = require("occam-parsers");

const { rulesUtilities, parserUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } = require("../lib/index.js");

const { rulesFromBNF } = parserUtilities,
      { rulesAsString, ruleMapFromRules, startRuleFromRules, rulesFromStartRuleAndRuleMap } = rulesUtilities;

describe("src/eliminateLeftRecursion", () => {
  xdescribe("a complex directly left recursive definition", () => {
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

  xdescribe("a complex indirectly left recursive definition", () => {
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

  xdescribe("a complex implicitly left recursive definition", () => {
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

  xdescribe("a unary directly left recursive definition", () => {
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

  xdescribe("a unary indirectly left recursive definition", () => {
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

  xdescribe("an isolated directly left recursive definition", () => {
    const bnf = `
  
    A ::= A B ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("two isolated directly left recursive definitions", () => {
    const bnf = `
  
    A ::= A B 
    
        | A 
        
        ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
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
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("an isolated indirectly left recursive definition and a implicitly left recursive definition", () => {
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

  xdescribe("two isolated indirectly left recursive definitions and a implicitly left recursive definition", () => {
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

  xdescribe("a indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
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

  xdescribe("an isolated indirectly left recursive definition and an isolated implicitly left recursive definition", () => {
    const bnf = `
  
    A ::= B "g" ;

    B ::= A "h" ;

`;

    it("do throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
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
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("an indirectly left recursive definition with a sibling directly left recursive definition", () => {
    const bnf = `
   
    A ::= "e"
    
        | B "h"
    
        | "d"
    
        ;
    
    B ::= A "g"
    
        | "d"

        | B "f"

        | "c"

        ;

`;

    it("does throw an exception", () => {
      assert.throws(() => adjustedBNFFromBNF(bnf));
    });
  });

  xdescribe("two sibling indirectly left recursive definitions that do not match", () => {
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

  xdescribe("a directly left recursive definition", () => {
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

  xdescribe("two sibling directly left recursive definitions", () => {
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

  xdescribe("an indirectly left recursive definition and an implicitly left recursive definition", () => {
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

  xdescribe("a directly left recursive definition and sibling implicitly left recursive definition", () => {
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

  xdescribe("two sibling indirectly left recursive definitions and an implicitly left recursive definition", () => {
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

  describe("javascript bnf", () => {
    const bnf = `
  
    document                   ::=  ( preamble ( statement | error )* ) | ( statement | error )+ ;



    preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;



    statement                  ::=  class

                                 |  function

                                 |  generator

                                 |  "export"? ( ( "var" var ( "," var )* )

                                              | ( "let" let ( "," let )* )

                                              | ( "const" const ( "," const )* )

                                              ) ";"

                                 |  "export" "default" expression ";"

                                 |  "export" "default"? ( class | function | generator )

                                 |  "export" "default" ( anonymousClass | anonymousFunction | anonymousGenerator )

                                 |  "export" ( ( "export" "{" names "}" ( "from" [string-literal] )? )

                                             | ( "export" "const" "{" fields "}" "=" expression )

                                             | ( "export" "{" "default" "}" "from" [string-literal] )

                                             | ( "export" "*" ( "as" name )? "from" [string-literal] )

                                             ) ";"

                                 |  "import" ( [string-literal]

                                             | ( name "from" [string-literal] )

                                             | ( "{" names "}" "from" [string-literal] )

                                             | ( "*" "as" name "from" [string-literal] )

                                             ) ";"

                                 |  label ":" statement

                                 |  "{" statement* "}"

                                 |  "break" ";"

                                 |  "continue" ";"

                                 |  "if" "(" expression ")" statement ( "else" statement )?

                                 |  "switch" "(" expression ")" "{" case* defaultCase? "}"

                                 |  "return" expression? ";"

                                 |  "throw" expression ";"

                                 |  "delete" expression ";"

                                 |  expression... ";"

                                 |  try ( ( catch* finally ) | catch+ )

                                 |  "do" statement "while" "(" expression ")" ";"

                                 |  "for" "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement

                                 |  "for" "(" variable "in" expression ")" statement

                                 |  "for" "await"? "(" variable "of" expression ")" statement

                                 |  "while" "(" expression ")" statement

                                 |  "debugger" ";"?

                                 ;



    class                      ::=  "class" name classBody ;

    function                   ::=  "async"? "function" name functionBody ;

    generator                  ::=  "async"? "function" <NO_WHITESPACE>"*" name functionBody ;

    anonymousClass             ::=  "class" classBody ;

    anonymousFunction          ::=  "async"? "function" functionBody ;

    anonymousGenerator         ::=  "async"? "function" <NO_WHITESPACE>"*" functionBody ;

    constructor                ::=  "constructor" functionBody ;

    method                     ::=  "static"? name functionBody ;

    field                      ::=  "static"? name "=" expression ";" ;



    classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;

    functionBody               ::=  "(" arguments? ")" "{" statement* "}" ;



    case                       ::=  "case" expression ":" statement ( "break" ";" )? ;

    defaultCase                ::=  "default" ":" statement ( "break" ";" )? ;

    try                        ::=  "try" "{" statement+ "}" ;

    catch                      ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;

    finally                    ::=  "finally" "{" statement+ "}" ;

    initialiser                ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;



    var                        ::=  variable ( "=" expression )? | destructure "=" expression ;

    let                        ::=  variable ( "=" expression )? | destructure "=" expression;

    const                      ::=  ( variable | destructure ) "=" expression ;

    destructure                ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"

                                 |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"

                                 ;



    expression                 ::=  jsx

                                 |  json

                                 |  arrowFunction

                                 |  templateLiteral

                                 |  anonymousFunction

                                 |  "(" expression ")"

                                 |  "{" ( property ( "," property )* )? "}"

                                 |  "[" ( expression ( "," expression )* ","? )? "]"

                                 |  "typeof" ( expression | ( "(" expression ")") )

                                 |  "void" ( expression | ( "(" expression ")") )

                                 |  "new" name<NO_WHITESPACE>"(" arguments? ")"

                                 |  [operator]<NO_WHITESPACE>expression

                                 |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )

                                                             | ( "[" expressions "]" )

                                                             | ( "(" expressions? ")" )

                                                             | templateLiteral

                                                             | [operator]

                                                             )

                                 |  expression ( ( [operator] expression )

                                               | ( "?" expression ":" expression )

                                               | ( "instanceof" expression )

                                               | ( "in" expression )

                                               )

                                 |  [number]

                                 |  variable

                                 |  primitive

                                 |  importMeta

                                 |  [string-literal]

                                 |  "super" | "this" | "true" | "false" | "null" | "undefined"

                                 ;



    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;

    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;

    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;

    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;

    jsxAttribute               ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;



    json                       ::=  jsonArray | jsonObject ;

    jsonArray                  ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;

    jsonObject                 ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;

    jsonElement                ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;



    arrowFunction              ::=  simpleArrowFunction | complexArrowFunction ;

    arrowFunctionBody          ::=  expression | ( "{" statement* "}" ) ;

    simpleArrowFunction        ::=  argument "=>" arrowFunctionBody ;

    complexArrowFunction       ::=  "(" arguments? ")" "=>" arrowFunctionBody ;



    templateLiteral            ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;



    string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;

    property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;

    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



    expressions                ::=  expression ( "," expression )* ;

    arguments                  ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



    spreadArgument             ::=  "..."<NO_WHITESPACE>[identifier] ;

    argument                   ::=  expression | [identifier] ( "=" expression )? ;

    variable                   ::=  [identifier] ;

    label                      ::=  [identifier] ;

    name                       ::=  [identifier] ;



    error                      ::=  . ;


`;

    it("are rewritten", () => {
      const adjustedBNF = adjustedBNFFromBNF(bnf);

      assert.isTrue(compare(adjustedBNF, `

    
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
