"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { leftRecursionUtilities } = require("../../lib");  ///

const { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { leftRecursiveRuleNamesFromPart, leftRecursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromRule } = leftRecursionUtilities;

describe("utiliies/leftReursion", () => {
  describe("leftRecursiveRuleNamesFromPart", () => {
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns false with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveNames);
      });
    });

    describe("a rule name part with a corresponding consuming rule", () => {
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a rule name part with a corresponding non-consuming rule", () => {
      const bnf = `
  
        S ::= A ;
        
        A ::= "a"? ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a nullified terminal part", () => {
      const bnf = `
  
        S ::= "e"* ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveNames);
      });
    });

    describe("a nullified rule name part", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a sequence of two nullified rule name parts", () => {
      const bnf = `
  
        S ::= ( A? B? ) ;
          
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("a sequence of one nullified terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a sequence of one nullified rule name part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( A? B ) ;
          
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

      it("returns true with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("a sequence of one nullified terminal part followed by one nullified rule name part", () => {
      const bnf = `
  
      S ::= ( "e"? A? ) ;
        
        A ::= "a" ;
          
    `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
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

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a choice of two nullified rule name parts", () => {
      const bnf = `
  
        S ::= ( A? | B? ) ;
          
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("a choice of one nullified terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? | A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("a choice of one nullified rule name part and one rule name part", () => {
      const bnf = `
  
        S ::= ( A? | B ) ;
          
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("a choice of one nullified terminal part and one nullified rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? | A? ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });
  });

  describe("leftRecursiveRuleNamesFromDefinition", () => {
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("two nullified rule name parts", () => {
      const bnf = `
  
        S ::= A? B? ;
          
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("one nullified terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= "e"? A ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("one nullified rule name part followed by one rule name part", () => {
      const bnf = `
  
        S ::= A? B ;
          
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

      it("returns true with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("one nullified terminal part followed by one nullified rule name part", () => {
      const bnf = `
  
        S ::= "e"? A? ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });
  });

  describe("leftRecursiveRuleNamesFromRule", () => {
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

      it("returns true with an empty array", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveNames);
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

      it("returns true with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
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

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
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

      it("returns true with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("two definitions with two nullified rule name parts", () => {
      const bnf = `
  
        S ::= A? 
        
            | B? 
            
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("two definitions with one nullified terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= "e"? 
        
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

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });

    describe("two definitions with one nullified rule name part and one rule name part", () => {
      const bnf = `
  
        S ::= A? 
        
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

      it("returns false with an array of length two", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A", "B"]);
      });
    });

    describe("two definitions with one nullified terminal part and one nullified rule name part", () => {
      const bnf = `
  
        S ::= "e"? 
        
            | A? 
            
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

      it("returns false with an array of length one", () => {
        const leftRecursiveNames = [],
              terminate = leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveNames, ["A"]);
      });
    });
  });
});
