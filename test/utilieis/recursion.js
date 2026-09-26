"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { recursionUtilities } = require("../../lib");  ///

const { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { recursiveRuleNamesFromPart, recursiveRuleNamesFromDefinition, recursiveRuleNamesFromRule } = recursionUtilities;

describe("utiliies/recursion", () => {
  describe("recursiveRuleNamesFromPart", () => {
    describe("a terminal part", () => {
      const bnf = `
  
        S ::= "e" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("a rule name part with no corresponding rule", () => {
      const bnf = `
  
        S ::= A ;
        
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("a rule name part with a corresponding rule", () => {
      const bnf = `
  
        S ::= A ;
        
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("an isolated terminal part part", () => {
      const bnf = `
  
        S ::= ("a") ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("an isolated rule name part part ", () => {
      const bnf = `
  
        S ::= (A) ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("n committed terminal part part", () => {
      const bnf = `
  
        S ::= \`"a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("n committed rule name part part ", () => {
      const bnf = `
  
        S ::= \`A ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("a one or more terminal parts part", () => {
      const bnf = `
  
        S ::= "a"+ ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("a one or more rule name parts part", () => {
      const bnf = `
  
        S ::= A+ ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("a sequence of two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" "b" ) ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("a sequence of two rule name parts", () => {
      const bnf = `
  
        S ::= ( A B ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A", "B"]);
      });
    });

    describe("a sequence of one terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( "e" A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("a sequence of one rule name part followed by one terminal part", () => {
      const bnf = `
  
        S ::= ( A "e" ) ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("a choice of two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" | "b" ) ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("a choice of two rule name parts", () => {
      const bnf = `
  
        S ::= ( A | B ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A", "B"]);
      });
    });

    describe("a choice of one terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= ( "e" | A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("a choice of one rule name part and  one terminal part", () => {
      const bnf = `
  
        S ::= ( A | "e" ) ;
          
        A ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromPart(part, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });
  });

  describe("recursiveRuleNamesFromDefinition", () => {
    describe("two terminal parts", () => {
      const bnf = `
  
        S ::= "a" "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromDefinition(definition, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("two rule name parts", () => {
      const bnf = `
  
        S ::= A B ;
          
        A ::= "a" ;
          
        B ::= "b" ;

      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const recursiveNames = recursiveRuleNamesFromDefinition(definition, ruleMap);

        assert.deepEqual(recursiveNames, ["A", "B"]);
      });
    });

    describe("one terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= "e" A ;
                    
        A ::= "a" ;
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromDefinition(definition, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("one rule name part followed by one terminal part", () => {
      const bnf = `
  
        S ::= A "e" ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromDefinition(definition, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });
  });

  describe("recursiveRuleNamesFromRule", () => {
    describe("two definitions with two terminal parts", () => {
      const bnf = `
  
        S ::= "a" 
        
            | "b"
             
            ;
          
      `;

      let rule,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const recursiveNames = recursiveRuleNamesFromRule(rule, ruleMap);

        assert.isEmpty(recursiveNames);
      });
    });

    describe("two definitions with two rule name parts", () => {
      const bnf = `
  
        S ::= A 
        
            | B 
            
            ;           
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const recursiveNames = recursiveRuleNamesFromRule(rule, ruleMap);

        assert.deepEqual(recursiveNames, ["A", "B"]);
      });
    });

    describe("two definitions with one terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= "e" 
        
            | A 
            
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromRule(rule, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });

    describe("two definitions with one rule name part and one terminal part", () => {
      const bnf = `
  
        S ::=  A 
        
            | "e"
             
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const recursiveNames = recursiveRuleNamesFromRule(rule, ruleMap);

        assert.deepEqual(recursiveNames, ["A"]);
      });
    });
  });
});
