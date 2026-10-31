"use strict";

const { testUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { BasicLexer, BasicParser, eliminateLeftRecursion } = require("../lib");  ///

const { adjustedBNFFromRules } = require("./helpers/bnf"),
      { checkParentNodes, checkDescendentNodes } = require("./helpers/node");

const { rulesFromBNF } = parserUtilities,
      { nodeFromRulesAndTokens, compareParseTreeStrings, tokensFromEntriesAndContent, parseTreeStringFromNodeAndTokens } = testUtilities;

describe("Rewrites", () => {
  const entries = [
    {
      "unassigned": "^[^\\s]"
    }
  ];

  describe("a cycle of length one", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "g"
      
          | "e"
          
          ;
        
    `;

    let node,
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
                                          
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= "e" ;
        
        T~ ::= "g" ;
        
      `));
    });

    describe("content with one token", () => {
      const content = `e
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "e"[unassigned] [0]              
                                          
       `));
      });
    })

    describe("content with two tokens", () => {
      const content = `eg
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
                           ----------------------------      
                           |                          |      
                         T [0]                  <END_OF_LINE>
                           |                                 
                 ---------------------                       
                 |                   |                       
               T [0]        "g"[unassigned] [0]              
                 |                                           
        "e"[unassigned] [0]
                                          
       `));
      });
    })
  });

  describe("a cycle of length one with precedence", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "g" (-1)
      
          | "e"   (2)
          
          ;
        
    `;

    let node,
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
                                                          
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= "e" (2) ;
        
        T~ ::= "g" (-1) ;
        
     `));
    });

    describe("content with one token", () => {
      const content = `e
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
                   ------------------      
                   |                |      
               T [0] (2)      <END_OF_LINE>
                   |                       
          "e"[unassigned] [0]              
             
      `));
      });
    })

    describe("content with two tokens", () => {
      const content = `eg
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
                             ----------------------------      
                             |                          |      
                        T [0] (-1)                <END_OF_LINE>
                             |                                 
                   ---------------------                       
                   |                   |                       
               T [0] (2)      "g"[unassigned] [0]              
                   |                                           
          "e"[unassigned] [0]                                  
             
        `));
      });
    })

    describe("content with three tokens", () => {
      const content = `egg
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
                                            ---------------------------------      
                                            |                               |      
                                       T [0] (-1)                     <END_OF_LINE>
                                            |                                      
                             -------------------------------                       
                             |                             |                       
                        T [0] (-1)                "g"[unassigned] [0]              
                             |                                                     
                   ---------------------                                           
                   |                   |                                           
               T [0] (2)      "g"[unassigned] [0]                                  
                   |                                                               
          "e"[unassigned] [0]                                                      
             
       `));
      });
    });
  });

  describe("a cycle of length one with right recursion", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "+" T
      
          | .
          
          ;
        
    `;

    let node,
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
                                                  
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= . ;
        
        T~ ::= "+" _T ;
        
      `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `x + y
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
                                     T [0]                            <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "+"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `x + y + z
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
                                               T [0]                                                          <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
                 T [0]        "+"[unassigned] [0]                            T [0]                                         
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                         T [0]        "+"[unassigned] [0]        T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]              
                                                                
       `));
      });
    });
  });

  describe("a cycle of length one with right recursion and a cut", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "+" \` T
      
          | .
          
          ;
        
    `;

    let node,
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
                                                                          
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= . ;
        
        T~ ::= "+" \` _T ;
        
      `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `x + y
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
                                     T [0]                            <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "+"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `x + y + z
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
                                               T [0]                                                          <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
                 T [0]        "+"[unassigned] [0]                            T [0]                                         
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                         T [0]        "+"[unassigned] [0]        T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]              
         
       `));
      });
    });

    describe("content with seven tokens", () => {
      const content = `x + y + z + w
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
                                                      -------------------------------------------------------------------------------------------------------      
                                                      |                                                                                                     |      
                                                    T [0]                                                                                             <END_OF_LINE>
                                                      |                                                                                                            
                   -----------------------------------------------------------------------                                                                         
                   |                   |                                                 |                                                                         
                 T [0]        "+"[unassigned] [0]                                      T [0]                                                                       
                   |                                                                     |                                                                         
          "x"[unassigned] [0]                              -------------------------------------------------------------                                           
                                                           |                   |                                       |                                           
                                                         T [0]        "+"[unassigned] [0]                            T [0]                                         
                                                           |                                                           |                                           
                                                  "y"[unassigned] [0]                              -----------------------------------------                       
                                                                                                   |                   |                   |                       
                                                                                                 T [0]        "+"[unassigned] [0]        T [0]                     
                                                                                                   |                                       |                       
                                                                                          "z"[unassigned] [0]                     "w"[unassigned] [0]              
          
      `));
      });
    });
  });

  describe("a cycle of length one with right recursion, a cut and intermediate recursion", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "?" \` T ":" T
      
          | .
          
          ;
        
    `;

    let node,
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
                                                                                          
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= . ;
        
        T~ ::= "?" \` _T ":" _T ;
        
      `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with nine tokens", () => {
      const content = `x ? y : z ? u : w
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
                                                                               ----------------------------------------------------------------------------------------------------------------------      
                                                                               |                                                                                                                    |      
                                                                             T [0]                                                                                                            <END_OF_LINE>
                                                                               |                                                                                                                           
                   -------------------------------------------------------------------------------------------------------------------------                                                               
                   |                   |                   |                   |                                                           |                                                               
                 T [0]        "?"[unassigned] [0]        T [0]        ":"[unassigned] [0]                                                T [0]                                                             
                   |                                       |                                                                               |                                                               
          "x"[unassigned] [0]                     "y"[unassigned] [0]                              ---------------------------------------------------------------------------------                       
                                                                                                   |                   |                   |                   |                   |                       
                                                                                                 T [0]        "?"[unassigned] [0]        T [0]        ":"[unassigned] [0]        T [0]                     
                                                                                                   |                                       |                                       |                       
                                                                                          "z"[unassigned] [0]                     "u"[unassigned] [0]                     "w"[unassigned] [0]              
          
       `));
      });
    });
  });

  describe("a cycle of length one with right recursion, precedence, one definition with a cut and the other without ", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "+" \` T (-10)
      
          | T "^" T     (20)
      
          | /[a-z0-9]/
          
          ;
        
    `;

    let node,
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
                                                                                  
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= /[a-z0-9]/ ;
        
        T~ ::= "+" \` _T (-10)
            
             | "^" _T (20)
        
             ;
        
     `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens around the cut", () => {
      const content = `x + y
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
                                  T [0] (-10)                         <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "+"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with three tokens away from the cut", () => {
      const content = `x ^ y
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
                                  T [0] (20)                          <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "^"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with five tokens one side of the cut", () => {
      const content = `x + y ^ z
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
                                            T [0] (-10)                                                       <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
                 T [0]        "+"[unassigned] [0]                         T [0] (20)                                       
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                         T [0]        "^"[unassigned] [0]        T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]                                  
                    
       `));
      });
    });

    describe("content with five tokens the other side of the cut", () => {
      const content = `x ^ y + z
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
                                                                     ------------------------------------------------      
                                                                     |                                              |      
                                                                T [0] (-10)                                   <END_OF_LINE>
                                                                     |                                                     
                                       -------------------------------------------------------------                       
                                       |                                       |                   |                       
                                  T [0] (20)                          "+"[unassigned] [0]        T [0]                     
                                       |                                                           |                       
                   -----------------------------------------                              "z"[unassigned] [0]              
                   |                   |                   |                                                               
                 T [0]        "^"[unassigned] [0]        T [0]                                                             
                   |                                       |                                                               
          "x"[unassigned] [0]                     "y"[unassigned] [0]                                                      
          
       `));
      });
    });
  });

  describe("a cycle of length one with right recursion, together with definitions suitable to parsing polynomials ", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= T "+" \` T           (-10)
      
          | T<NO_WHITESPACE>T    (-20)
      
          | T "^" T               (30)
      
          | /[a-z0-9]/
          
          ;
        
    `;

    let node,
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
                                                                                                  
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ T~* ;
        
        T_ ::= /[a-z0-9]/ ;
        
        T~ ::= "+" \` _T (-10)
            
             | <NO_WHITESPACE> _T (-20)
            
             | "^" _T (30)
        
             ;
             
     `));
    });

    describe("content with one token", () => {
      const content = `1
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "1"[unassigned] [0]              
             
      `));
      });
    });

    describe("content with two compound tokens", () => {
      const content = `12
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
                                     ------------------------------------      
                                     |                                  |      
                                T [0] (-20)                       <END_OF_LINE>
                                     |                                         
                   -------------------------------------                       
                   |                 |                 |                       
                 T [0]        <NO_WHITESPACE>        T [0]                     
                   |                                   |                       
          "1"[unassigned] [0]                 "2"[unassigned] [0]              
             
      `));
      });
    });

    describe("content with two exponential tokens.", () => {
      const content = `x^2
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
                                  T [0] (30)                          <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "^"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
      `));
      });
    });

    describe("content with three compound exponential tokens.", () => {
      const content = `3x^2
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
                                               ------------------------------------------------------------------      
                                               |                                                                |      
                                          T [0] (-20)                                                     <END_OF_LINE>
                                               |                                                                       
                   ---------------------------------------------------------                                           
                   |                 |                                     |                                           
                 T [0]        <NO_WHITESPACE>                         T [0] (30)                                       
                   |                                                       |                                           
          "3"[unassigned] [0]                          -----------------------------------------                       
                                                       |                   |                   |                       
                                                     T [0]        "^"[unassigned] [0]        T [0]                     
                                                       |                                       |                       
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
      `));
      });
    });

    describe("content with two compound tokens then one separate token", () => {
      const content = `2x + 1
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
                                                                  -----------------------------------------------      
                                                                  |                                             |      
                                                             T [0] (-10)                                  <END_OF_LINE>
                                                                  |                                                    
                                     -----------------------------------------------------------                       
                                     |                                     |                   |                       
                                T [0] (-20)                       "+"[unassigned] [0]        T [0]                     
                                     |                                                         |                       
                   -------------------------------------                              "1"[unassigned] [0]              
                   |                 |                 |                                                               
                 T [0]        <NO_WHITESPACE>        T [0]                                                             
                   |                                   |                                                               
          "2"[unassigned] [0]                 "x"[unassigned] [0]                                                      
             
      `));
      });
    });

    describe("content with one separate token then two compound tokens.", () => {
      const content = `1 + 2x
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
                                                -----------------------------------------------------------------      
                                                |                                                               |      
                                           T [0] (-10)                                                    <END_OF_LINE>
                                                |                                                                      
                   -----------------------------------------------------------                                         
                   |                   |                                     |                                         
                 T [0]        "+"[unassigned] [0]                       T [0] (-20)                                    
                   |                                                         |                                         
          "1"[unassigned] [0]                              -------------------------------------                       
                                                           |                 |                 |                       
                                                         T [0]        <NO_WHITESPACE>        T [0]                     
                                                           |                                   |                       
                                                  "2"[unassigned] [0]                 "x"[unassigned] [0]              
             
      `));
      });
    });

    describe("content with two compound tokens the two separate tokens.", () => {
      const content = `3x + 4 + 2
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
                                                                                                     ----------------------------------------------------      
                                                                                                     |                                                  |      
                                                                                                T [0] (-10)                                       <END_OF_LINE>
                                                                                                     |                                                         
                                                                  ----------------------------------------------------------------------                       
                                                                  |                                                |                   |                       
                                                             T [0] (-10)                                  "+"[unassigned] [0]        T [0]                     
                                                                  |                                                                    |                       
                                     -----------------------------------------------------------                              "2"[unassigned] [0]              
                                     |                                     |                   |                                                               
                                T [0] (-20)                       "+"[unassigned] [0]        T [0]                                                             
                                     |                                                         |                                                               
                   -------------------------------------                              "4"[unassigned] [0]                                                      
                   |                 |                 |                                                                                                       
                 T [0]        <NO_WHITESPACE>        T [0]                                                                                                     
                   |                                   |                                                                                                       
          "3"[unassigned] [0]                 "x"[unassigned] [0]                                                                                              
             
       `));
      });
    });

    describe("content with one separate token then three compound exponential tokens.", () => {
      const content = `1 + 3x^2
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
                                                     ----------------------------------------------------------------------------------------------------      
                                                     |                                                                                                  |      
                                                T [0] (-10)                                                                                       <END_OF_LINE>
                                                     |                                                                                                         
                   ---------------------------------------------------------------------                                                                       
                   |                   |                                               |                                                                       
                 T [0]        "+"[unassigned] [0]                                 T [0] (-20)                                                                  
                   |                                                                   |                                                                       
          "1"[unassigned] [0]                              ---------------------------------------------------------                                           
                                                           |                 |                                     |                                           
                                                         T [0]        <NO_WHITESPACE>                         T [0] (30)                                       
                                                           |                                                       |                                           
                                                  "3"[unassigned] [0]                          -----------------------------------------                       
                                                                                               |                   |                   |                       
                                                                                             T [0]        "^"[unassigned] [0]        T [0]                     
                                                                                               |                                       |                       
                                                                                      "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three compound exponential tokens then two compound tokens.", () => {
      const content = `3x^2 + 4x
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
                                                                                                    -----------------------------------------------------------------------------------------      
                                                                                                    |                                                                                       |      
                                                                                               T [0] (-10)                                                                            <END_OF_LINE>
                                                                                                    |                                                                                              
                                               -----------------------------------------------------------------------------------------------------------                                         
                                               |                                                                   |                                     |                                         
                                          T [0] (-20)                                                     "+"[unassigned] [0]                       T [0] (-20)                                    
                                               |                                                                                                         |                                         
                   ---------------------------------------------------------                                                           -------------------------------------                       
                   |                 |                                     |                                                           |                 |                 |                       
                 T [0]        <NO_WHITESPACE>                         T [0] (30)                                                     T [0]        <NO_WHITESPACE>        T [0]                     
                   |                                                       |                                                           |                                   |                       
          "3"[unassigned] [0]                          -----------------------------------------                              "4"[unassigned] [0]                 "x"[unassigned] [0]              
                                                       |                   |                   |                                                                                                   
                                                     T [0]        "^"[unassigned] [0]        T [0]                                                                                                 
                                                       |                                       |                                                                                                   
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]                                                                                          
             
       `));
      });
    });

    describe("content with three compound exponential tokens then two compound tokens then a singnle token.", () => {
      const content = `3x^2 + 4x + 1
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
                                                                                                                                                            -------------------------------------------------------------------------      
                                                                                                                                                            |                                                                       |      
                                                                                                                                                       T [0] (-10)                                                            <END_OF_LINE>
                                                                                                                                                            |                                                                              
                                                                                                    ----------------------------------------------------------------------------------------------------------------                       
                                                                                                    |                                                                                          |                   |                       
                                                                                               T [0] (-10)                                                                            "+"[unassigned] [0]        T [0]                     
                                                                                                    |                                                                                                              |                       
                                               -----------------------------------------------------------------------------------------------------------                                                "1"[unassigned] [0]              
                                               |                                                                   |                                     |                                                                                 
                                          T [0] (-20)                                                     "+"[unassigned] [0]                       T [0] (-20)                                                                            
                                               |                                                                                                         |                                                                                 
                   ---------------------------------------------------------                                                           -------------------------------------                                                               
                   |                 |                                     |                                                           |                 |                 |                                                               
                 T [0]        <NO_WHITESPACE>                         T [0] (30)                                                     T [0]        <NO_WHITESPACE>        T [0]                                                             
                   |                                                       |                                                           |                                   |                                                               
          "3"[unassigned] [0]                          -----------------------------------------                              "4"[unassigned] [0]                 "x"[unassigned] [0]                                                      
                                                       |                   |                   |                                                                                                                                           
                                                     T [0]        "^"[unassigned] [0]        T [0]                                                                                                                                         
                                                       |                                       |                                                                                                                                           
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]                                                                                                                                  
             
       `));
      });
    });
  });

  describe("a cycle of length two", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "g"
      
          | "e"
          
          ;
                
      A ::= T ;

    `;

    let node,
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
                                                  
        S   ::= ( T ... <END_OF_LINE> ) ;
        
        T   ::= _T ;
        
        A   ::= _A ;
        
        _T  ::= T_ T~* ;
        
        _A  ::= _T ;
        
        T_  ::= "e" ;
        
        T~  ::= A~T ;
        
        A~T ::= "g" ;
        
     `));
    });

    describe("content with two tokens", () => {
      const content = `eg
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
                             ----------------------------      
                             |                          |      
                           T [0]                  <END_OF_LINE>
                             |                                 
                   ---------------------                       
                   |                   |                       
                 A [0]        "g"[unassigned] [0]              
                   |                                           
                 T [0]                                         
                   |                                           
          "e"[unassigned] [0]                                  
                                            
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `egg
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
                                            ---------------------------------      
                                            |                               |      
                                          T [0]                       <END_OF_LINE>
                                            |                                      
                             -------------------------------                       
                             |                             |                       
                           A [0]                  "g"[unassigned] [0]              
                             |                                                     
                           T [0]                                                   
                             |                                                     
                   ---------------------                                           
                   |                   |                                           
                 A [0]        "g"[unassigned] [0]                                  
                   |                                                               
                 T [0]                                                             
                   |                                                               
          "e"[unassigned] [0]                                                      
                                            
       `));
      });
    });
  });

  describe("a cycle of length two with precedence", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "g" (-1)
      
          | "e" (2)
          
          ;
                
      A ::= T ( ) ;


    `;

    let node,
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
                                                                                  
        S   ::= ( T ... <END_OF_LINE> ) ;
        
        T   ::= _T ;
        
        A   ::= _A ;
        
        _T  ::= T_ T~* ;
        
        _A  ::= _T ( ) ;
        
        T_  ::= "e" (2) ;
        
        T~  ::= A~T (-1) ;
        
        A~T ::= "g" ( ) ;
                  
     `));
    });

    describe("content with one token", () => {
      const content = `e
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
                   ------------------      
                   |                |      
               T [0] (2)      <END_OF_LINE>
                   |                       
          "e"[unassigned] [0]              
             
      `));
      });
    })

    describe("content with two tokens", () => {
      const content = `eg
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
                             ----------------------------      
                             |                          |      
                        T [0] (-1)                <END_OF_LINE>
                             |                                 
                   ---------------------                       
                   |                   |                       
               A [0] ( )      "g"[unassigned] [0]              
                   |                                           
               T [0] (2)                                       
                   |                                           
          "e"[unassigned] [0]                                  
                                            
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `egg
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
                                            ---------------------------------      
                                            |                               |      
                                       T [0] (-1)                     <END_OF_LINE>
                                            |                                      
                             -------------------------------                       
                             |                             |                       
                         A [0] ( )                "g"[unassigned] [0]              
                             |                                                     
                        T [0] (-1)                                                 
                             |                                                     
                   ---------------------                                           
                   |                   |                                           
               A [0] ( )      "g"[unassigned] [0]                                  
                   |                                                               
               T [0] (2)                                                           
                   |                                                               
          "e"[unassigned] [0]
                                                                
       `));
      });
    });
  });

  describe("a cycle of length two with right recursion", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "+" A
      
          | .
          
          ;
        
      A ::= T ( ) ;
      
    `;

    let node,
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
                                                                                                  
        S   ::= ( T ... <END_OF_LINE> ) ;
        
        T   ::= _T ;
        
        A   ::= _A ;
        
        _T  ::= T_ T~* ;
        
        _A  ::= _T ( ) ;
        
        T_  ::= . ;
        
        T~  ::= A~T ;
        
        A~T ::= "+" _A ( ) ;

     `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `x + y
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
                                     T [0]                            <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
               A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                   |                                       |                       
                 T [0]                                   T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              

       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `x + y + z
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
                                               T [0]                                                          <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
               A [0] ( )      "+"[unassigned] [0]                          A [0] ( )                                       
                   |                                                           |                                           
                 T [0]                                                       T [0]                                         
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                       A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                                                           |                                       |                       
                                                         T [0]                                   T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]              
                                                                
       `));
      });
    });
  });

  describe("a cycle of length two with right recursion and a cut", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "+" \` A
      
          | .
          
          ;
        
      A ::= T ( ) ;

    `;

    let node,
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
                                                                                                          
        S   ::= ( T ... <END_OF_LINE> ) ;
        
        T   ::= _T ;
        
        A   ::= _A ;
        
        _T  ::= T_ T~* ;
        
        _A  ::= _T ( ) ;
        
        T_  ::= . ;
        
        T~  ::= A~T ;
        
        A~T ::= "+" \` _A ( ) ;    

     `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `x + y
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
                                     T [0]                            <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
               A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                   |                                       |                       
                 T [0]                                   T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `x + y + z
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
                                               T [0]                                                          <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
               A [0] ( )      "+"[unassigned] [0]                          A [0] ( )                                       
                   |                                                           |                                           
                 T [0]                                                       T [0]                                         
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                       A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                                                           |                                       |                       
                                                         T [0]                                   T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]              
         
       `));
      });
    });

    describe("content with seven tokens", () => {
      const content = `x + y + z + w
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
                                                      -------------------------------------------------------------------------------------------------------      
                                                      |                                                                                                     |      
                                                    T [0]                                                                                             <END_OF_LINE>
                                                      |                                                                                                            
                   -----------------------------------------------------------------------                                                                         
                   |                   |                                                 |                                                                         
               A [0] ( )      "+"[unassigned] [0]                                    A [0] ( )                                                                     
                   |                                                                     |                                                                         
                 T [0]                                                                 T [0]                                                                       
                   |                                                                     |                                                                         
          "x"[unassigned] [0]                              -------------------------------------------------------------                                           
                                                           |                   |                                       |                                           
                                                       A [0] ( )      "+"[unassigned] [0]                          A [0] ( )                                       
                                                           |                                                           |                                           
                                                         T [0]                                                       T [0]                                         
                                                           |                                                           |                                           
                                                  "y"[unassigned] [0]                              -----------------------------------------                       
                                                                                                   |                   |                   |                       
                                                                                               A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                                                                                                   |                                       |                       
                                                                                                 T [0]                                   T [0]                     
                                                                                                   |                                       |                       
                                                                                          "z"[unassigned] [0]                     "w"[unassigned] [0]              
          
       `));
      });
    });
  });

  describe("a cycle of length two with right recursion, a cut and intermediate recursion", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "?" \` A ":" A
      
          | .
          
          ;
        
      A ::= T ( ) ;

    `;

    let node,
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
                                                                                                                  
        S   ::= ( T ... <END_OF_LINE> ) ;
        
        T   ::= _T ;
        
        A   ::= _A ;
        
        _T  ::= T_ T~* ;
        
        _A  ::= _T ( ) ;
        
        T_  ::= . ;
        
        T~  ::= A~T ;
        
        A~T ::= "?" \` _A ":" _A ( ) ;
                
      `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with nine tokens", () => {
      const content = `x ? y : z ? u : w
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
                                                                               ----------------------------------------------------------------------------------------------------------------------      
                                                                               |                                                                                                                    |      
                                                                             T [0]                                                                                                            <END_OF_LINE>
                                                                               |                                                                                                                           
                   -------------------------------------------------------------------------------------------------------------------------                                                               
                   |                   |                   |                   |                                                           |                                                               
               A [0] ( )      "?"[unassigned] [0]      A [0] ( )      ":"[unassigned] [0]                                              A [0] ( )                                                           
                   |                                       |                                                                               |                                                               
                 T [0]                                   T [0]                                                                           T [0]                                                             
                   |                                       |                                                                               |                                                               
          "x"[unassigned] [0]                     "y"[unassigned] [0]                              ---------------------------------------------------------------------------------                       
                                                                                                   |                   |                   |                   |                   |                       
                                                                                               A [0] ( )      "?"[unassigned] [0]      A [0] ( )      ":"[unassigned] [0]      A [0] ( )                   
                                                                                                   |                                       |                                       |                       
                                                                                                 T [0]                                   T [0]                                   T [0]                     
                                                                                                   |                                       |                                       |                       
                                                                                          "z"[unassigned] [0]                     "u"[unassigned] [0]                     "w"[unassigned] [0]              
          
       `));
      });
    });
  });

  describe("a cycle of length two with right recursion, precedence, one definition with a cut and the other without ", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "+" \` A (-10)
      
          | A "^" A     (20)
      
          | /[a-z0-9]/
          
          ;
        
      A ::= T ( ) ;
      
    `;

    let node,
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
                
        S     ::= ( T ... <END_OF_LINE> ) ;
        
        T     ::= _T ;
        
        A     ::= _A ;
        
        _T    ::= T_ T~* ;
        
        _A    ::= _T ( ) ;
        
        T_    ::= /[a-z0-9]/ ;
        
        T~    ::= A~T_1 (-10)
            
                | A~T_2 (20)
        
                ;
        
        A~T_1 ::= "+" \` _A ( ) ;
        
        A~T_2 ::= "^" _A ( ) ;
                              
     `));
    });

    describe("content with one token", () => {
      const content = `x
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three tokens around the cut", () => {
      const content = `x + y
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
                                  T [0] (-10)                         <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
               A [0] ( )      "+"[unassigned] [0]      A [0] ( )                   
                   |                                       |                       
                 T [0]                                   T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with three tokens away from the cut", () => {
      const content = `x ^ y
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
                                  T [0] (20)                          <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
               A [0] ( )      "^"[unassigned] [0]      A [0] ( )                   
                   |                                       |                       
                 T [0]                                   T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "y"[unassigned] [0]              
                        
       `));
      });
    });

    describe("content with five tokens one side of the cut", () => {
      const content = `x + y ^ z
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
                                            T [0] (-10)                                                       <END_OF_LINE>
                                                 |                                                                         
                   -------------------------------------------------------------                                           
                   |                   |                                       |                                           
               A [0] ( )      "+"[unassigned] [0]                          A [0] ( )                                       
                   |                                                           |                                           
                 T [0]                                                    T [0] (20)                                       
                   |                                                           |                                           
          "x"[unassigned] [0]                              -----------------------------------------                       
                                                           |                   |                   |                       
                                                       A [0] ( )      "^"[unassigned] [0]      A [0] ( )                   
                                                           |                                       |                       
                                                         T [0]                                   T [0]                     
                                                           |                                       |                       
                                                  "y"[unassigned] [0]                     "z"[unassigned] [0]              
                    
       `));
      });
    });

    describe("content with five tokens the other side of the cut", () => {
      const content = `x ^ y + z
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
                                                                     ------------------------------------------------      
                                                                     |                                              |      
                                                                T [0] (-10)                                   <END_OF_LINE>
                                                                     |                                                     
                                       -------------------------------------------------------------                       
                                       |                                       |                   |                       
                                   A [0] ( )                          "+"[unassigned] [0]      A [0] ( )                   
                                       |                                                           |                       
                                  T [0] (20)                                                     T [0]                     
                                       |                                                           |                       
                   -----------------------------------------                              "z"[unassigned] [0]              
                   |                   |                   |                                                               
               A [0] ( )      "^"[unassigned] [0]      A [0] ( )                                                           
                   |                                       |                                                               
                 T [0]                                   T [0]                                                             
                   |                                       |                                                               
          "x"[unassigned] [0]                     "y"[unassigned] [0]                                                      
          
       `));
      });
    });
  });

  describe("a cycle of length two with right recursion, together with definitions suitable to parsing polynomials ", () => {
    let bnf = `
  
      S ::= ( T ... <END_OF_LINE> ) ;
      
      T ::= A "+" \` A           (-10)
      
          | A<NO_WHITESPACE>A    (-20)
      
          | A "^" A               (30)
      
          | /[a-z0-9]/
          
          ;
        
      A ::= T ( ) ;

    `;

    let node,
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
                                                                                                  
        S     ::= ( T ... <END_OF_LINE> ) ;
        
        T     ::= _T ;
        
        A     ::= _A ;
        
        _T    ::= T_ T~* ;
        
        _A    ::= _T ( ) ;
        
        T_    ::= /[a-z0-9]/ ;
        
        T~    ::= A~T_1 (-10)
            
                | A~T_2 (-20)
            
                | A~T_3 (30)
        
                ;
        
        A~T_1 ::= "+" \` _A ( ) ;
        
        A~T_2 ::= <NO_WHITESPACE> _A ( ) ;
        
        A~T_3 ::= "^" _A ( ) ;
        
     `));
    });

    describe("content with one token", () => {
      const content = `1
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
                   ------------------      
                   |                |      
                 T [0]        <END_OF_LINE>
                   |                       
          "1"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with two compound tokens", () => {
      const content = `12
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
                                     ------------------------------------      
                                     |                                  |      
                                T [0] (-20)                       <END_OF_LINE>
                                     |                                         
                   -------------------------------------                       
                   |                 |                 |                       
               A [0] ( )      <NO_WHITESPACE>      A [0] ( )                   
                   |                                   |                       
                 T [0]                               T [0]                     
                   |                                   |                       
          "1"[unassigned] [0]                 "2"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with two exponential tokens.", () => {
      const content = `x^2
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
                                  T [0] (30)                          <END_OF_LINE>
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
               A [0] ( )      "^"[unassigned] [0]      A [0] ( )                   
                   |                                       |                       
                 T [0]                                   T [0]                     
                   |                                       |                       
          "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three compound exponential tokens.", () => {
      const content = `3x^2
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
                                               ------------------------------------------------------------------      
                                               |                                                                |      
                                          T [0] (-20)                                                     <END_OF_LINE>
                                               |                                                                       
                   ---------------------------------------------------------                                           
                   |                 |                                     |                                           
               A [0] ( )      <NO_WHITESPACE>                          A [0] ( )                                       
                   |                                                       |                                           
                 T [0]                                                T [0] (30)                                       
                   |                                                       |                                           
          "3"[unassigned] [0]                          -----------------------------------------                       
                                                       |                   |                   |                       
                                                   A [0] ( )      "^"[unassigned] [0]      A [0] ( )                   
                                                       |                                       |                       
                                                     T [0]                                   T [0]                     
                                                       |                                       |                       
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with two compound tokens then one separate token", () => {
      const content = `2x + 1
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
                                                                  -----------------------------------------------      
                                                                  |                                             |      
                                                             T [0] (-10)                                  <END_OF_LINE>
                                                                  |                                                    
                                     -----------------------------------------------------------                       
                                     |                                     |                   |                       
                                 A [0] ( )                        "+"[unassigned] [0]      A [0] ( )                   
                                     |                                                         |                       
                                T [0] (-20)                                                  T [0]                     
                                     |                                                         |                       
                   -------------------------------------                              "1"[unassigned] [0]              
                   |                 |                 |                                                               
               A [0] ( )      <NO_WHITESPACE>      A [0] ( )                                                           
                   |                                   |                                                               
                 T [0]                               T [0]                                                             
                   |                                   |                                                               
          "2"[unassigned] [0]                 "x"[unassigned] [0]                                                      
             
       `));
      });
    });

    describe("content with one separate token then two compound tokens.", () => {
      const content = `1 + 2x
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
                                                -----------------------------------------------------------------      
                                                |                                                               |      
                                           T [0] (-10)                                                    <END_OF_LINE>
                                                |                                                                      
                   -----------------------------------------------------------                                         
                   |                   |                                     |                                         
               A [0] ( )      "+"[unassigned] [0]                        A [0] ( )                                     
                   |                                                         |                                         
                 T [0]                                                  T [0] (-20)                                    
                   |                                                         |                                         
          "1"[unassigned] [0]                              -------------------------------------                       
                                                           |                 |                 |                       
                                                       A [0] ( )      <NO_WHITESPACE>      A [0] ( )                   
                                                           |                                   |                       
                                                         T [0]                               T [0]                     
                                                           |                                   |                       
                                                  "2"[unassigned] [0]                 "x"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with two compound tokens the two separate tokens.", () => {
      const content = `3x + 4 + 2
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
                                                                                                     ----------------------------------------------------      
                                                                                                     |                                                  |      
                                                                                                T [0] (-10)                                       <END_OF_LINE>
                                                                                                     |                                                         
                                                                  ----------------------------------------------------------------------                       
                                                                  |                                                |                   |                       
                                                              A [0] ( )                                   "+"[unassigned] [0]      A [0] ( )                   
                                                                  |                                                                    |                       
                                                             T [0] (-10)                                                             T [0]                     
                                                                  |                                                                    |                       
                                     -----------------------------------------------------------                              "2"[unassigned] [0]              
                                     |                                     |                   |                                                               
                                 A [0] ( )                        "+"[unassigned] [0]      A [0] ( )                                                           
                                     |                                                         |                                                               
                                T [0] (-20)                                                  T [0]                                                             
                                     |                                                         |                                                               
                   -------------------------------------                              "4"[unassigned] [0]                                                      
                   |                 |                 |                                                                                                       
               A [0] ( )      <NO_WHITESPACE>      A [0] ( )                                                                                                   
                   |                                   |                                                                                                       
                 T [0]                               T [0]                                                                                                     
                   |                                   |                                                                                                       
          "3"[unassigned] [0]                 "x"[unassigned] [0]                                                                                              
             
       `));
      });
    });

    describe("content with one separate token then three compound exponential tokens.", () => {
      const content = `1 + 3x^2
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
                                                     ----------------------------------------------------------------------------------------------------      
                                                     |                                                                                                  |      
                                                T [0] (-10)                                                                                       <END_OF_LINE>
                                                     |                                                                                                         
                   ---------------------------------------------------------------------                                                                       
                   |                   |                                               |                                                                       
               A [0] ( )      "+"[unassigned] [0]                                  A [0] ( )                                                                   
                   |                                                                   |                                                                       
                 T [0]                                                            T [0] (-20)                                                                  
                   |                                                                   |                                                                       
          "1"[unassigned] [0]                              ---------------------------------------------------------                                           
                                                           |                 |                                     |                                           
                                                       A [0] ( )      <NO_WHITESPACE>                          A [0] ( )                                       
                                                           |                                                       |                                           
                                                         T [0]                                                T [0] (30)                                       
                                                           |                                                       |                                           
                                                  "3"[unassigned] [0]                          -----------------------------------------                       
                                                                                               |                   |                   |                       
                                                                                           A [0] ( )      "^"[unassigned] [0]      A [0] ( )                   
                                                                                               |                                       |                       
                                                                                             T [0]                                   T [0]                     
                                                                                               |                                       |                       
                                                                                      "x"[unassigned] [0]                     "2"[unassigned] [0]              
             
       `));
      });
    });

    describe("content with three compound exponential tokens then two compound tokens.", () => {
      const content = `3x^2 + 4x
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
                                                                                                    -----------------------------------------------------------------------------------------      
                                                                                                    |                                                                                       |      
                                                                                               T [0] (-10)                                                                            <END_OF_LINE>
                                                                                                    |                                                                                              
                                               -----------------------------------------------------------------------------------------------------------                                         
                                               |                                                                   |                                     |                                         
                                           A [0] ( )                                                      "+"[unassigned] [0]                        A [0] ( )                                     
                                               |                                                                                                         |                                         
                                          T [0] (-20)                                                                                               T [0] (-20)                                    
                                               |                                                                                                         |                                         
                   ---------------------------------------------------------                                                           -------------------------------------                       
                   |                 |                                     |                                                           |                 |                 |                       
               A [0] ( )      <NO_WHITESPACE>                          A [0] ( )                                                   A [0] ( )      <NO_WHITESPACE>      A [0] ( )                   
                   |                                                       |                                                           |                                   |                       
                 T [0]                                                T [0] (30)                                                     T [0]                               T [0]                     
                   |                                                       |                                                           |                                   |                       
          "3"[unassigned] [0]                          -----------------------------------------                              "4"[unassigned] [0]                 "x"[unassigned] [0]              
                                                       |                   |                   |                                                                                                   
                                                   A [0] ( )      "^"[unassigned] [0]      A [0] ( )                                                                                               
                                                       |                                       |                                                                                                   
                                                     T [0]                                   T [0]                                                                                                 
                                                       |                                       |                                                                                                   
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]                                                                                          
             
       `));
      });
    });

    describe("content with three compound exponential tokens then two compound tokens then a singnle token.", () => {
      const content = `3x^2 + 4x + 1
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
                                                                                                                                                            -------------------------------------------------------------------------      
                                                                                                                                                            |                                                                       |      
                                                                                                                                                       T [0] (-10)                                                            <END_OF_LINE>
                                                                                                                                                            |                                                                              
                                                                                                    ----------------------------------------------------------------------------------------------------------------                       
                                                                                                    |                                                                                          |                   |                       
                                                                                                A [0] ( )                                                                             "+"[unassigned] [0]      A [0] ( )                   
                                                                                                    |                                                                                                              |                       
                                                                                               T [0] (-10)                                                                                                       T [0]                     
                                                                                                    |                                                                                                              |                       
                                               -----------------------------------------------------------------------------------------------------------                                                "1"[unassigned] [0]              
                                               |                                                                   |                                     |                                                                                 
                                           A [0] ( )                                                      "+"[unassigned] [0]                        A [0] ( )                                                                             
                                               |                                                                                                         |                                                                                 
                                          T [0] (-20)                                                                                               T [0] (-20)                                                                            
                                               |                                                                                                         |                                                                                 
                   ---------------------------------------------------------                                                           -------------------------------------                                                               
                   |                 |                                     |                                                           |                 |                 |                                                               
               A [0] ( )      <NO_WHITESPACE>                          A [0] ( )                                                   A [0] ( )      <NO_WHITESPACE>      A [0] ( )                                                           
                   |                                                       |                                                           |                                   |                                                               
                 T [0]                                                T [0] (30)                                                     T [0]                               T [0]                                                             
                   |                                                       |                                                           |                                   |                                                               
          "3"[unassigned] [0]                          -----------------------------------------                              "4"[unassigned] [0]                 "x"[unassigned] [0]                                                      
                                                       |                   |                   |                                                                                                                                           
                                                   A [0] ( )      "^"[unassigned] [0]      A [0] ( )                                                                                                                                       
                                                       |                                       |                                                                                                                                           
                                                     T [0]                                   T [0]                                                                                                                                         
                                                       |                                       |                                                                                                                                           
                                              "x"[unassigned] [0]                     "2"[unassigned] [0]                                                                                                                                  
             
       `));
      });
    });
  });

  describe("a cycle of length two with a single indirect repetition, a cut and precedence", () => {
    let bnf = `

      S ::= ( T ... <END_OF_LINE> ) ;

      T ::=  C ( )

          |  /[a-z0-9]/

          ;

      C ::= T ( "=" | "!" ) \` T (-1);

    `;

    let node,
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
        
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ ~C+ ( ) 
        
             | T_ 
             
             ;
        
        T_ ::= /[a-z0-9]/ ;
        
        ~C ::= ( "=" | "!" ) \` _T (-1) ;

     `));
    });

    describe("content with one token", () => {
      const content = `1
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
                   ------------------
                   |                |
                 T [0]        <END_OF_LINE>
                   |
          "1"[unassigned] [0]

       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `1 = 2
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
                                   T [0] ( )                          <END_OF_LINE>
                                       |                                           
                                  C [0] (-1)                                       
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "="[unassigned] [0]        T [0]                     
                   |                                       |                       
          "1"[unassigned] [0]                     "2"[unassigned] [0]              

       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `1 = 2 = 3
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
                                                                     ------------------------------------------------      
                                                                     |                                              |      
                                                                 T [0] ( )                                    <END_OF_LINE>
                                                                     |                                                     
                                                                C [0] (-1)                                                 
                                                                     |                                                     
                                       -------------------------------------------------------------                       
                                       |                                       |                   |                       
                                   T [0] ( )                          "="[unassigned] [0]        T [0]                     
                                       |                                                           |                       
                                  C [0] (-1)                                              "3"[unassigned] [0]              
                                       |                                                                                   
                   -----------------------------------------                                                               
                   |                   |                   |                                                               
                 T [0]        "="[unassigned] [0]        T [0]                                                             
                   |                                       |                                                               
          "1"[unassigned] [0]                     "2"[unassigned] [0]                                                      
             
       `));
      });
    });
  });

  describe("two cycles of length two with a double indirect repetition, a cut and precedence", () => {
    let bnf = `

      S ::= ( T ... <END_OF_LINE> ) ;

      T ::=  C ( )

          |  L ( )

          |  /[a-z0-9]/

          ;

      C ::= T ( "=" | "!" ) \` T (-1);

      L ::= T ( "|" | "&" ) \` T (-2) ; 

    `;

    let node,
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
        
        S  ::= ( T ... <END_OF_LINE> ) ;
        
        T  ::= _T ;
        
        _T ::= T_ ~C+ ( ) 
        
             | T_ ~L+ ( ) 
        
             | T_ 
             
             ;
        
        T_ ::= /[a-z0-9]/ ;
        
        ~C ::= ( "=" | "!" ) \` _T (-1) ;

        ~L ::= ( "|" | "&" ) \` _T (-2) ; 

     `));
    });

    describe("content with one token", () => {
      const content = `1
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
                   ------------------
                   |                |
                 T [0]        <END_OF_LINE>
                   |
          "1"[unassigned] [0]

       `));
      });
    });

    describe("content with three tokens", () => {
      const content = `1 | 2
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
                                   T [0] ( )                          <END_OF_LINE>
                                       |                                           
                                  L [0] (-2)                                       
                                       |                                           
                   -----------------------------------------                       
                   |                   |                   |                       
                 T [0]        "|"[unassigned] [0]        T [0]                     
                   |                                       |                       
          "1"[unassigned] [0]                     "2"[unassigned] [0]              

       `));
      });
    });

    describe("content with five tokens", () => {
      const content = `1 | 2 = 3
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
                                                                     ------------------------------------------------      
                                                                     |                                              |      
                                                                 T [0] ( )                                    <END_OF_LINE>
                                                                     |                                                     
                                                                C [0] (-1)                                                 
                                                                     |                                                     
                                       -------------------------------------------------------------                       
                                       |                                       |                   |                       
                                   T [0] ( )                          "="[unassigned] [0]        T [0]                     
                                       |                                                           |                       
                                  L [0] (-2)                                              "3"[unassigned] [0]              
                                       |                                                                                   
                   -----------------------------------------                                                               
                   |                   |                   |                                                               
                 T [0]        "|"[unassigned] [0]        T [0]                                                             
                   |                                       |                                                               
          "1"[unassigned] [0]                     "2"[unassigned] [0]                                                      

       `));
      });
    });

    describe("content with seven tokens", () => {
      const content = `1 | 2 = 3 | 4
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
                                                                               ------------------------------------------------------------------------------      
                                                                               |                                                                            |      
                                                                           T [0] ( )                                                                  <END_OF_LINE>
                                                                               |                                                                                   
                                                                          C [0] (-1)                                                                               
                                                                               |                                                                                   
                                       ---------------------------------------------------------------------------------                                           
                                       |                                       |                                       |                                           
                                   T [0] ( )                          "="[unassigned] [0]                          T [0] ( )                                       
                                       |                                                                               |                                           
                                  L [0] (-2)                                                                      L [0] (-2)                                       
                                       |                                                                               |                                           
                   -----------------------------------------                                       -----------------------------------------                       
                   |                   |                   |                                       |                   |                   |                       
                 T [0]        "|"[unassigned] [0]        T [0]                                   T [0]        "|"[unassigned] [0]        T [0]                     
                   |                                       |                                       |                                       |                       
          "1"[unassigned] [0]                     "2"[unassigned] [0]                     "3"[unassigned] [0]                     "4"[unassigned] [0]              

       `));
      });
    });
  });

  describe.only("two cycles of length two with a indirect repetition, a cut, precedence and a non-trivial intermediate rule", () => {
    let bnf = `

      S ::= ( T ... <END_OF_LINE> ) ;

      T ::= A "+" \` A (-90)
                            
          | A<NO_WHITESPACE>A (-101)
          
          | V
          
          ;
                                                   
      A ::= T ( ) 
    
          | Y ( )
                                           
          ;

      V ::= /[0-9]/ ; 

      Y ::= /[a-z]/ ; 

    `;

    let node,
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
        
        S     ::= ( T ... <END_OF_LINE> ) ;
        
        T     ::= _T ;
        
        A     ::= _A ;
        
        V     ::= /[0-9]/ ;
        
        Y     ::= /[a-z]/ ;
        
        _T    ::= T_ T~* ;
        
        _A    ::= _T ( )
            
                | Y ( )
        
                ;
        
        T_    ::=  V ;
        
        A_    ::= Y ( ) ;
        
        T~    ::= A~T_1 (-90)
            
                | A~T_2 (-101)
        
                ;
        
        A~T_1 ::= "+" \` _A ( ) ;
        
        A~T_2 ::= <NO_WHITESPACE> _A ( ) ;
        
     `));
    });
  });
});
