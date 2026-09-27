"use strict";

const { testUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { BasicLexer, BasicParser, eliminateLeftRecursion } = require("../lib");  ///

const { adjustedBNFFromRules } = require("./helpers/bnf"),
      { checkParentNodes, checkDescendentNodes } = require("./helpers/node");

const { rulesFromBNF } = parserUtilities,
      { nodeFromRulesAndTokens, compareParseTreeStrings, tokensFromEntriesAndContent, parseTreeStringFromNodeAndTokens } = testUtilities;

describe.skip("Equality", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a compund term equal to a term", () => {
    let bnf = `
  
      S ::= E... <END_OF_LINE> ;
          
      E ::= T \`"=" T ;
          
      T ::= A A
      
             | .
      
             ;

      A ::= T ;
                  
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
                                  
        S   ::= E... <END_OF_LINE> ;
        
        E   ::= T \` "=" T ;
        
        T   ::= T_ T~* ;
        
        A   ::= T_ T~* A~T ;
        
        T_  ::= . ;
        
        T~A ::= A ;
        
        A~T ::= ε ;
        
        T~  ::= A~T A~* T~A ;
        
        A~  ::= T~A T~* A~T ;
        
      `));
    });

    describe("contenxt with two operators", () => {
      const content = `2x = x
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
                                                      -------------------------------------------      
                                                      |                                         |      
                                                    E [0]                                 <END_OF_LINE>
                                                      |                                                
                             ---------------------------------------------------                       
                             |                             |                   |                       
                           T [0]                  "="[unassigned] [0]        T [0]                     
                             |                                                 |                       
                   ---------------------                              "x"[unassigned] [0]              
                   |                   |                                                               
                 A [0]               A [0]                                                             
                   |                   |                                                               
                 T [0]               T [0]                                                             
                   |                   |                                                               
          "2"[unassigned] [0] "x"[unassigned] [0]                                                      
             
      `));
      });
    });
  });
});
