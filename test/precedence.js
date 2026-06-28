"use strict";

const { testUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers"),
      { BasicLexer, BasicParser, eliminateLeftRecursion } = require("../lib/index");  ///

const { adjustedBNFFromRules } = require("./utilities/bnf"),
      { checkParentNodes, checkDescendentNodes } = require("./utilities/node");

const { rulesFromBNF } = parserUtilities,
      { nodeFromRulesAndTokens, compareParseTreeStrings, tokensFromEntriesAndContent, parseTreeStringFromNodeAndTokens } = testUtilities;

describe("Precedence", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a cycle of length one together with ambiguity", () => {
    let bnf = `
  
          S ::= T... <END_OF_LINE> ;
        
          T ::= T "+" T (1) 
        
              | T "*" T (2)
        
              | . ;
    
        `,
        node,
        rules,
        tokens;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
                  
        S   ::= T... <END_OF_LINE> ;
        
        T   ::= T_ T~* ;
        
        T_  ::= . ;
        
        T~T ::= "+" T (1)
            
              | "*" T (2)
        
              ;
        
        T~  ::= T~T ;
        
      `));
    });

    describe("for content with one operator", () => {
      const content = `1+2
`;

      before(() => {
        tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

        node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
      });

      it("results in the requisite parse tree" , () => {
        assert.isTrue(checkParentNodes(node));

        assert.isTrue(checkDescendentNodes(node));

        const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                              
                                                        S [0]                      
                                                          |                        
                                       --------------------------------------      
                                       |                                    |      
                                   T [0] (1)                          <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "+"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "1"[unassigned] [0]                     "2"[unassigned] [0]              
             
      `));
      });
    });

    describe("for content with two operators", () => {
      const content = `1+2*3
`;

      before(() => {
        tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

        node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
      });

      it("results in the requisite parse tree" , () => {
        assert.isTrue(checkParentNodes(node));

        assert.isTrue(checkDescendentNodes(node));

        const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                        
                                                                                 S [0]                                     
                                                                                   |                                       
                                                 --------------------------------------------------------------------      
                                                 |                                                                  |      
                                             T [0] (1)                                                        <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
                 T [0]        "+"[unassigned] [0]                          T [0] (2)                                       
                   |                                                           |                                           
          "1"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                         T [0]        "*"[unassigned] [0]        T [0]                     
                                                           |                                       |                       
                                                  "2"[unassigned] [0]                     "3"[unassigned] [0]              
             
      `));
      });
    });

    describe("for content with two operators reversed", () => {
      const content = `1*2+3
`;

      before(() => {
        tokens = tokensFromEntriesAndContent(BasicLexer, entries, content);

        node = nodeFromRulesAndTokens(BasicParser, rules, tokens);
      });

      it.only("results in the requisite parse tree" , () => {
        assert.isTrue(checkParentNodes(node));

        assert.isTrue(checkDescendentNodes(node));

        const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

        assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                  
                                                                                           S [0]                           
                                                                                             |                             
                                                                     ------------------------------------------------      
                                                                     |                                              |      
                                                                 T [0] (1)                                    <END_OF_LINE>
                                                                     |                                                     
                                       -------------------------------------------------------------                       
                                       |                                       |                   |                       
                                   T [0] (2)                          "+"[unassigned] [0]        T [0]                     
                                       |                                                           |                       
                   -----------------------------------------                              "3"[unassigned] [0]              
                   |                   |                   |                                                               
                 T [0]        "*"[unassigned] [0]        T [0]                                                             
                   |                                       |                                                               
          "1"[unassigned] [0]                     "2"[unassigned] [0]
                                                                
      `));
      });
    });
  });

  describe.skip("a cycle of length two together with ambiguity", () => {
    let bnf = `
  
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

    const content = `--z
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
      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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

  describe.skip("an indirectly recursive rule with precedence", () => {
    let bnf = `
  
      S    ::= T... <END_OF_LINE> ;
      
      T    ::= ( "1" | "2" | "3" | "4" )
      
             | T<NO_WHITESPACE>T (100)
      
             | "1" "+" T (12)
      
             ;
                        
    `;

    const content = `1+234
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
        
        T   ::= T_ T~* ;
        
        T_  ::= ( "1" | "2" | "3" | "4" )
            
              | "1" "+" T (12)
        
              ;
        
        T~T ::= <NO_WHITESPACE> T (100) ;
        
        T~  ::= T~T ;
                              
      `));
    });

    it("results in the requisite parse tree" , () => {
      assert.isTrue(checkParentNodes(node));

      assert.isTrue(checkDescendentNodes(node));

      const parseTreeString = parseTreeStringFromNodeAndTokens(node, tokens);

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
