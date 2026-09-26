"use strict";

const { arrayUtilities } = require("necessary"),
      { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers"),
      { partsUtilities } = require("../lib/index");  ///

const { first } = arrayUtilities,
      { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { isPartConsuming, isDefinitionConsuming, isRuleConsuming, leftRecursiveRuleNamesFromPart, leftRecursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromRule } = partsUtilities;

describe("partsUtilities", () => {
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

    describe("a rule name part with no conrresponding rule", () => {
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

    describe("a rule name part with a conrresponding consuming rule", () => {
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

    describe("a rule name part with a conrresponding non-consuming rule", () => {
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

      it("returns true with an array of length one", () => {
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

    describe("a squence of two terminal parts", () => {
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

    describe("a squence of two rule name parts", () => {
      const bnf = `
  
        S ::= ( A B ) ;
          
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

    describe("a squence of one terminal part followed by one rule name part", () => {
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

    describe("a squence of one rule name part followed by one terminal part", () => {
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

    describe("a squence of two nullified rule name parts", () => {
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

    describe("a squence of one nullified terminal part followed by one rule name part", () => {
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

    describe("a squence of one nullified rule name part followed by one rule name part", () => {
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

    describe("a squence of one nullified terminal part followed by one nullified rule name part", () => {
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
    describe("two definitinos with two terminal parts", () => {
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

    describe("two definitinos with two rule name parts", () => {
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

    describe("two definitinos with one terminal part and one rule name part", () => {
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

    describe("two definitinos with one rule name part and one terminal part", () => {
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

    describe("two definitinos with two nullified rule name parts", () => {
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

    describe("two definitinos with one nullified terminal part and one rule name part", () => {
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

    describe("two definitinos with one nullified rule name part and one rule name part", () => {
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

    describe("two definitinos with one nullified terminal part and one nullified rule name part", () => {
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

  describe("isPartConsuming", () => {
    describe("a terminal part", () => {
      const bnf = `
  
        S ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("an epsilon part", () => {
      const bnf = `
  
        S ::= ε ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a no-whitespace part", () => {
      const bnf = `
  
        S ::= <NO_WHITESPACE> ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified terminal part", () => {
      const bnf = `
  
        S ::= "a"? ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a isolated terminal part", () => {
      const bnf = `
  
        S ::= ( "a" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a commited terminal part", () => {
      const bnf = `
  
        S ::= \`"a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a choice part with two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" | "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a choice part with two nullifid partsterminal parts", () => {
      const bnf = `
  
        S ::= ( "a"* | "b"? ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a choice part with one terminal part and one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( "a" | "b"* ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a sequence part with two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" "b" ) ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a sequence part with two nullifid partsterminal parts", () => {
      const bnf = `
  
        S ::= ( "a"* "b"? ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a sequence part with one terminal part and one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( "a" "b"* ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a sequence part with one nullified terminal part and one terminal part", () => {
      const bnf = `
  
        S ::= ( "a"* "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule name part without a corresponding rule", () => {
      const bnf = `
  
        S ::= A ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part without a corresponding rule", () => {
      const bnf = `
  
        S ::= A? ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
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

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding consuming rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
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

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding non-consuming rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a"* ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding directly cyclic rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding directly cyclic rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= S ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding indirectly cyclic rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= B ;

        B ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding indirectly cyclic rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= B ;

        B ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });
  });

  describe("isDefinitinoConsuming", () => {
    describe("a definition with a consuming part", () => {
      const bnf = `
  
        S ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a definition with a non-consuming part", () => {
      const bnf = `
  
        S ::= "a"* ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a definition with a non-consuming part followed by a consuming part", () => {
      const bnf = `
  
        S ::= "a"* "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isTrue(consuming);
      });
    });
  });

  describe("isRuleConsuming", () => {
    describe("a rule with a consuming definition", () => {
      const bnf = `

        S ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule with a non-consuming definition", () => {
      const bnf = `

        S ::= "a"* ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule with two consuming definitions", () => {
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

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule with two non-consuming definitions", () => {
      const bnf = `

        S ::= "a"*
        
            | "b"?
            
            ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule with a consuming definition and a non-consuming definition", () => {
      const bnf = `

        S ::= "a" 
        
            | "b"* 
            
            ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });
  });
});

function partFromRules(rules) {
  const definition = definitionFromRules(rules),
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart; ///

  return part;
}

function definitionFromRules(rules) {
  const rule = ruleFromRules(rules),
        defintions = rule.getDefinitions(),
        firstDefinition = first(defintions),
        definition = firstDefinition; ///

  return definition;
}

function ruleFromRules(rules) {
  const firstRule = first(rules),
        rule = firstRule; ///

  return rule;
}
